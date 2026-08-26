/**
 * 御魂配置页控制器。
 *
 * 每张表只提供一份 metadata 和 rows 数据，页面通过 tables 数组统一渲染。
 * 搜索、角色筛选和折叠都作用于这个统一的数据入口，因此新增表格时不会
 * 需要复制页面模板或重新编写筛选逻辑。
 */
import { yuhunMeta, yuhunRows } from "./data/yuhun-data.js";
import { yuhunSilingMeta, yuhunSilingRows } from "./data/yuhun-siling-data.js";
import { initSidebar } from "./sidebar.js";

/** 新增表格时，在这里加入对应的 metadata 和 rows 即可。id 必须唯一。 */
const tables = [
  { ...yuhunMeta, rows: yuhunRows },
  { ...yuhunSilingMeta, rows: yuhunSilingRows }
];

/**
 * 在开发阶段尽早发现“表格没有 id / rows 不是数组 / id 重复”等维护错误，
 * 避免错误数据渲染成难以定位的空白页面。
 */
function validateTables() {
  const ids = new Set();
  tables.forEach((table) => {
    if (!table.id || ids.has(table.id)) throw new Error(`御魂配置表 id 无效或重复：${table.id || "空值"}`);
    if (!Array.isArray(table.rows)) throw new Error(`御魂配置表 rows 必须是数组：${table.id}`);
    ids.add(table.id);
  });
}

validateTables();

/** 只保存筛选和折叠等临时 UI 状态，数据本身不会在运行时被改写。 */
const state = { query: "", role: "all", collapsedTables: new Set() };

/** 页面固定节点；表格列表本身会在筛选时重新渲染。 */
const searchEl = document.querySelector("#search-input");
const clearSearchEl = document.querySelector("#clear-search");
const tableListEl = document.querySelector("#table-list");
const roleFiltersEl = document.querySelector("#role-filters");
const statusTextEl = document.querySelector("#table-status-text");
const rowCountEl = document.querySelector("#row-count");

/** 页面上允许选择的角色分组，顺序也决定按钮顺序。 */
const roleOptions = [
  { id: "all", label: "全部" },
  { id: "高速式神", label: "高速式神" },
  { id: "输出式神", label: "输出式神" },
  { id: "辅助式神", label: "辅助式神" },
  { id: "备选式神", label: "备选式神" }
];

const allRows = () => tables.flatMap((table) => table.rows);
const normalize = (value) => String(value ?? "").toLocaleLowerCase("zh-CN");

/** 将一行所有可见字段拼成搜索文本，备注也会参与搜索。 */
const rowText = (row) => [
  row.name,
  row.set,
  row.requirement,
  row.metric,
  row.main,
  row.fill,
  row.advice,
  row.role,
  row.note
].join(" ");

/** 表格内容来自本地数据文件，渲染前仍统一转义，方便后续继续扩展资料。 */
const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}[char]));
const cell = (value) => escapeHtml(value).replace(/\n/g, "<br />");

/** 角色值只允许映射到已定义的 CSS 类，未知值降级为辅助色。 */
function roleClass(role) {
  return { "高速式神": "speed", "输出式神": "damage", "辅助式神": "support", "备选式神": "optional" }[role] || "support";
}

/** 同时应用关键词和角色分组两个条件。 */
function rowMatches(row) {
  const query = normalize(state.query);
  const queryMatch = !query || normalize(rowText(row)).includes(query);
  const roleMatch = state.role === "all" || row.role === state.role;
  return queryMatch && roleMatch;
}

/** 渲染角色按钮，数字是全表统计，不随当前搜索词变化。 */
function renderRoleFilters() {
  const rows = allRows();
  roleFiltersEl.innerHTML = roleOptions.map((option) => {
    const count = option.id === "all" ? rows.length : rows.filter((row) => row.role === option.id).length;
    const isActive = state.role === option.id;
    return `<button class="filter-button${isActive ? " active" : ""}" data-role="${escapeHtml(option.id)}" type="button" aria-pressed="${isActive}">${escapeHtml(option.label)}<span>${count}</span></button>`;
  }).join("");
}

/** 没有匹配结果时保留一行语义明确的空状态，避免表格完全消失。 */
function renderRows(rows) {
  if (!rows.length) {
    return `<tr><td class="table-empty" colspan="8"><strong>没有找到匹配配置</strong><span>换个关键词或清空筛选条件再试。</span></td></tr>`;
  }

  return rows.map((row, index) => `
    <tr>
      <td class="name-cell"><span class="row-number">${String(index + 1).padStart(2, "0")}</span><strong>${cell(row.name)}</strong>${row.note ? `<small>${cell(row.note)}</small>` : ""}</td>
      <td><span class="set-name">${cell(row.set)}</span></td>
      <td>${cell(row.requirement)}</td>
      <td><span class="metric-pill">${cell(row.metric)}</span></td>
      <td><code>${cell(row.main)}</code></td>
      <td>${cell(row.fill)}</td>
      <td class="advice-cell">${cell(row.advice)}</td>
      <td><span class="role-badge ${roleClass(row.role)}">${cell(row.role)}</span></td>
    </tr>`).join("");
}

/** 渲染单张表的标题、来源说明、表体和底部备注。 */
function renderTablePanel(table, tableIndex) {
  const rows = table.rows.filter(rowMatches);
  const isCollapsed = state.collapsedTables.has(table.id);
  const tableId = escapeHtml(table.id);
  const toggleId = `table-toggle-${tableId}`;
  const bodyId = `table-body-${tableId}`;

  return `
    <article class="table-panel${isCollapsed ? " is-collapsed" : ""}" id="table-${tableId}" aria-labelledby="${toggleId}">
      <div class="table-panel-header">
        <button class="table-panel-toggle" id="${toggleId}" data-toggle-table="${tableId}" type="button" aria-expanded="${!isCollapsed}" aria-controls="${bodyId}" title="${isCollapsed ? "展开配置表" : "收起配置表"}">
          <span class="panel-index">${String(tableIndex + 1).padStart(2, "0")}</span>
          <span class="panel-heading"><strong>${cell(table.title)}</strong><small>${cell(table.subtitle)}</small></span>
          <span class="panel-count">${rows.length} / ${table.rows.length} 条</span>
          <span class="panel-toggle-mark" aria-hidden="true">${isCollapsed ? "+" : "−"}</span>
          <span class="panel-toggle-label">${isCollapsed ? "展开" : "收起"}</span>
        </button>
      </div>
      <div class="table-panel-body" id="${bodyId}"${isCollapsed ? " hidden" : ""}>
        <div class="panel-source-row"><span>${cell(table.sourceNote)}</span><time>更新于 ${cell(table.updatedAt)}</time></div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">式神</th>
                <th scope="col">御魂</th>
                <th scope="col">要求</th>
                <th scope="col">指标</th>
                <th scope="col">主属性</th>
                <th scope="col">属性限制 / 配置填写</th>
                <th scope="col">具体建议</th>
                <th scope="col">分组</th>
              </tr>
            </thead>
            <tbody>${renderRows(rows)}</tbody>
          </table>
        </div>
        <p class="panel-footnote">${cell(table.footerNote)}</p>
      </div>
    </article>`;
}

/** 只渲染至少有一行匹配数据的表，同时保留原表的编号。 */
function renderPanels() {
  const visibleTotal = allRows().filter(rowMatches).length;
  rowCountEl.textContent = visibleTotal;
  // statusTextEl 使用 textContent 写入，不需要再做 HTML 转义，否则用户搜索 < 会看到实体文本。
  const queryHint = state.query ? `，搜索“${state.query}”` : "";
  const roleHint = state.role === "all" ? "全部配置" : state.role;
  statusTextEl.textContent = `显示 ${roleHint}${queryHint} · ${visibleTotal} 条`;

  const visibleTables = tables
    .map((table, index) => ({ table, index }))
    .filter(({ table }) => table.rows.some(rowMatches));

  if (!visibleTables.length) {
    tableListEl.innerHTML = `<div class="empty-state"><strong>没有找到匹配配置</strong><span>换个关键词或清空筛选条件再试。</span></div>`;
    return;
  }

  tableListEl.innerHTML = visibleTables.map(({ table, index }) => renderTablePanel(table, index)).join("");
}

/** 更新页面顶部的总量和分组统计。 */
function renderMeta() {
  const rows = allRows();
  document.querySelector("#source-summary").textContent = `已载入 ${tables.length} 张御魂配置表 · ${rows.length} 条配置`;
  document.querySelector("#total-count").textContent = rows.length;
  document.querySelector("#speed-count").textContent = rows.filter((row) => row.role === "高速式神").length;
  document.querySelector("#damage-count").textContent = rows.filter((row) => row.role === "输出式神").length;
  document.querySelector("#support-count").textContent = rows.filter((row) => row.role === "辅助式神" || row.role === "备选式神").length;
  document.querySelector("#source-footer-note").textContent = "每张表都保留原始资料中的速度、属性和用途说明；新增表格时，在 yuhun.js 顶部的 tables 数组中注册即可。";
}

/** 全部折叠/展开只修改 Set，具体 DOM 由统一渲染函数负责。 */
function setAllTables(collapsed) {
  state.collapsedTables = collapsed ? new Set(tables.map((table) => table.id)) : new Set();
  renderPanels();
}

roleFiltersEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-role]");
  if (!button) return;
  state.role = button.dataset.role;
  renderRoleFilters();
  renderPanels();
});

/** 事件委托让筛选后重新生成的表头按钮仍然可以工作。 */
tableListEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-toggle-table]");
  if (!button) return;
  const tableId = button.dataset.toggleTable;
  if (state.collapsedTables.has(tableId)) state.collapsedTables.delete(tableId);
  else state.collapsedTables.add(tableId);
  renderPanels();
});

document.querySelector("#collapse-all-tables").addEventListener("click", () => setAllTables(true));
document.querySelector("#expand-all-tables").addEventListener("click", () => setAllTables(false));

searchEl.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  renderPanels();
});

clearSearchEl.addEventListener("click", () => {
  state.query = "";
  state.role = "all";
  searchEl.value = "";
  renderRoleFilters();
  renderPanels();
  searchEl.focus();
});

/** / 聚焦搜索，Escape 清空当前条件；组合键输入不抢占用户的正常文本操作。 */
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !event.ctrlKey && !event.metaKey && !event.altKey && document.activeElement !== searchEl) {
    event.preventDefault();
    searchEl.focus();
  }
  if (event.key === "Escape" && document.activeElement === searchEl) clearSearchEl.click();
});

/** 首次加载：验证数据、写入统计、建立筛选按钮和表格。 */
initSidebar();
renderMeta();
renderRoleFilters();
renderPanels();
