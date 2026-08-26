/**
 * 斗技对策总览页的交互控制器。
 *
 * 页面结构保留在 index.html，八个攻略板块保留在 data/ 目录；本文件只负责
 * 把数据渲染成界面，并处理搜索、阵容类型筛选、导航和折叠状态。这样新增
 * 阵容时只需要改对应的数据文件，不会把资料和页面逻辑混在一起。
 */
import { section as geye } from "./data/01-geye.js";
import { section as huxiang } from "./data/02-huxiang.js";
import { section as siling } from "./data/03-siling.js";
import { section as huoshan } from "./data/04-huoshan.js";
import { section as lifeng } from "./data/05-lifeng.js";
import { section as shenlong } from "./data/06-shenlong.js";
import { section as watu } from "./data/07-watu.js";
import { section as beiyin } from "./data/08-beiyin.js";
import { shikigamiImages, shikigamiNames } from "./data/shikigami-images.js?v=20260825-5";
import { initSidebar } from "./sidebar.js";

/** 板块顺序决定左侧导航和主内容中的编号。 */
const sections = [geye, huxiang, siling, huoshan, lifeng, shenlong, watu, beiyin];

/** 只保存会随着用户操作变化的状态，静态资料始终来自 data 文件。 */
const state = {
  query: "",
  filter: "all",
  activeSection: sections[0].id,
  collapsedSections: new Set()
};

/** 页面中不会被重新渲染的固定节点。 */
const contentEl = document.querySelector("#content");
const navEl = document.querySelector("#section-nav");
const mobileSectionEl = document.querySelector("#mobile-section");
const searchEl = document.querySelector("#search-input");
const resultCountEl = document.querySelector("#result-count");
const sidebarCountEl = document.querySelector("#sidebar-count");
const clearSearchEl = document.querySelector("#clear-search");
const modeFiltersEl = document.querySelector("#mode-filters");
const strategyNavToggleEl = document.querySelector("#strategy-nav-toggle");
const strategyNavCountEl = document.querySelector("#strategy-nav-count");

/** 对策导航组单独记忆状态，不会影响整个侧边栏的展开/收起。 */
const STRATEGY_NAV_STORAGE_KEY = "onmyoji-strategy-nav-collapsed";

/** 统一转成小写文本，使用 ?? 避免数字 0 被误当成空值。 */
const normalize = (value) => String(value ?? "").toLocaleLowerCase("zh-CN");

/** 动态模板中的文字统一转义，避免资料中的特殊字符破坏 HTML。 */
const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}[char]));

/** 备注允许使用对象（可标记 important）或直接使用字符串。 */
const noteText = (note) => typeof note === "string" ? note : note?.text ?? "";

/** 把卡片所有可搜索字段拼成一段纯文本。 */
const flattenCard = (card) => [
  card.title,
  ...(card.tags || []),
  ...(card.enemy || []),
  ...(card.counter || []),
  ...(card.notes || []).map(noteText)
].join(" ");

const totalCardCount = () => sections.reduce((sum, section) => sum + section.cards.length, 0);

/** 同时满足关键词和阵容类型的卡片才会显示。 */
function cardMatches(card) {
  const queryMatch = !state.query || normalize(flattenCard(card)).includes(normalize(state.query));
  const filterMatch = state.filter === "all" || (card.tags || []).includes(state.filter);
  return queryMatch && filterMatch;
}

/**
 * 从一条阵容文字中找出已配置头像的式神，并严格按照文字位置返回。
 * 同一名称出现多次会保留多次；同一位置同时命中完整名和短称时优先完整名，
 * 已被完整名占用的字符范围不会再重复生成短称头像。
 */
function findShikigami(line) {
  const text = String(line);
  const matches = [];

  shikigamiNames.forEach((name) => {
    let start = text.indexOf(name);
    while (start !== -1) {
      matches.push({ name, start, end: start + name.length });
      start = text.indexOf(name, start + name.length);
    }
  });

  matches.sort((left, right) => left.start - right.start || right.name.length - left.name.length);

  const accepted = [];
  matches.forEach((match) => {
    const overlaps = accepted.some((item) => match.start < item.end && match.end > item.start);
    if (!overlaps) accepted.push(match);
  });

  return accepted.sort((left, right) => left.start - right.start).map((match) => match.name);
}

/**
 * 渲染单条阵容中识别到的头像。敌方和我方共用此函数，因此任意一侧只要
 * 出现映射表中的名字就会自动显示，无需给卡片额外添加图片字段。
 */
function createShikigamiPortraits(line) {
  const matchedNames = findShikigami(line);
  if (!matchedNames.length) return "";

  return `<span class="lineup-portraits" aria-label="阵容式神：${matchedNames.map(escapeHtml).join("、")}">${matchedNames.map((name) => `
    <span class="shikigami-portrait" title="${escapeHtml(name)}">
      <img src="${escapeHtml(shikigamiImages[name])}" alt="${escapeHtml(name)}" decoding="async" />
      <span>${escapeHtml(name)}</span>
    </span>`).join("")}</span>`;
}

/** 将对面/我方阵容数组渲染成“头像 + 原始文字”列表。 */
function createLines(lines) {
  return lines.map((line) => {
    const portraits = createShikigamiPortraits(line);
    return `<li class="lineup-entry${portraits ? " has-portraits" : ""}">${portraits}<span class="lineup-text">${escapeHtml(line)}</span></li>`;
  }).join("");
}

/** 渲染单张对策卡；cardIndex 使用原始数组下标，筛选后编号仍保持稳定。 */
function createCard(card, sectionIndex, cardIndex) {
  const notes = (card.notes || []).map((note) => {
    const important = typeof note === "object" && note?.important;
    return `<span class="note${important ? " important" : ""}">${escapeHtml(noteText(note))}</span>`;
  }).join("");
  const tags = (card.tags || []).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("");

  return `
    <article class="guide-card">
      <div class="card-header">
        <div>
          <h4 class="card-title">${escapeHtml(card.title)}</h4>
          <div class="card-id">${String(sectionIndex + 1).padStart(2, "0")} / ${String(cardIndex + 1).padStart(2, "0")}</div>
        </div>
        <div class="tag-row">${tags}</div>
      </div>
      <div class="card-body">
        <div class="lineup-pane enemy-pane">
          <div class="pane-label">对面常见</div>
          <ul class="line-list">${createLines(card.enemy || [])}</ul>
        </div>
        <div class="lineup-pane counter-pane">
          <div class="pane-label">我方对策</div>
          <ul class="line-list">${createLines(card.counter || [])}</ul>
        </div>
      </div>
      ${notes ? `<div class="card-notes">${notes}</div>` : ""}
    </article>`;
}

/** 渲染左侧导航和手机端板块选择器。 */
function renderNavigation() {
  strategyNavCountEl.textContent = sections.length;
  navEl.innerHTML = sections.map((section, index) => {
    const isActive = section.id === state.activeSection;
    return `
      <button class="nav-item${isActive ? " active" : ""}" data-section="${escapeHtml(section.id)}" type="button" aria-current="${isActive ? "page" : "false"}">
        <span class="nav-index">${String(index + 1).padStart(2, "0")}</span>
        <span class="nav-label">${escapeHtml(section.title)}</span>
        <span class="nav-total">${section.cards.length}</span>
      </button>`;
  }).join("");

  mobileSectionEl.innerHTML = sections.map((section) => `<option value="${escapeHtml(section.id)}">${escapeHtml(section.title)}</option>`).join("");
  mobileSectionEl.value = state.activeSection;
}

/**
 * 渲染主内容。没有匹配结果的板块会暂时隐藏，但不会修改原始数据或折叠状态。
 */
function renderContent() {
  const visibleTotal = sections.reduce((sum, section) => sum + section.cards.filter(cardMatches).length, 0);
  resultCountEl.textContent = visibleTotal;
  sidebarCountEl.textContent = `${totalCardCount()} 条`;

  contentEl.innerHTML = sections.map((section, sectionIndex) => {
    const visibleCards = section.cards.filter(cardMatches);
    if (!visibleCards.length) return "";

    const isCollapsed = state.collapsedSections.has(section.id);
    const sectionId = escapeHtml(section.id);
    return `
      <section class="guide-section" id="${sectionId}" aria-labelledby="section-title-${sectionId}">
        <div class="section-heading">
          <div class="section-badge">${String(sectionIndex + 1).padStart(2, "0")}</div>
          <div>
            <h3 id="section-title-${sectionId}">${escapeHtml(section.title)}</h3>
            <p>${escapeHtml(section.subtitle)}</p>
          </div>
          <span class="section-total">${visibleCards.length} / ${section.cards.length} 条</span>
          <button class="section-toggle" data-toggle-section="${sectionId}" type="button" aria-expanded="${!isCollapsed}" aria-controls="cards-${sectionId}" title="${isCollapsed ? "展开板块" : "收起板块"}">
            <span class="toggle-symbol" aria-hidden="true">${isCollapsed ? "+" : "−"}</span>
            <span>${isCollapsed ? "展开" : "收起"}</span>
          </button>
        </div>
        <div class="cards-grid${isCollapsed ? " is-collapsed" : ""}" id="cards-${sectionId}"${isCollapsed ? " hidden" : ""}>${visibleCards.map((card) => createCard(card, sectionIndex, section.cards.indexOf(card))).join("")}</div>
      </section>`;
  }).join("");

  if (!visibleTotal) {
    contentEl.innerHTML = `<div class="empty-state"><strong>没有找到匹配的对策</strong><span>试试式神名、阵容名，或清空筛选条件。</span></div>`;
  }
}

/** 设置当前导航项，并滚动到对应板块；无效 id 会被安全忽略。 */
function setActiveSection(id) {
  if (!sections.some((section) => section.id === id)) return;

  state.activeSection = id;
  document.querySelectorAll(".nav-item").forEach((item) => {
    const isActive = item.dataset.section === id;
    item.classList.toggle("active", isActive);
    item.setAttribute("aria-current", isActive ? "page" : "false");
  });
  mobileSectionEl.value = id;
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** 统一更新阵容类型按钮的视觉和无障碍状态。 */
function updateModeFilterState() {
  modeFiltersEl.querySelectorAll("[data-filter]").forEach((item) => {
    const isActive = item.dataset.filter === state.filter;
    item.classList.toggle("active", isActive);
    item.setAttribute("aria-pressed", String(isActive));
  });
}

/** 安全读取对策导航组状态；浏览器禁止存储时默认展开。 */
function readStrategyNavCollapsed() {
  try {
    return window.localStorage.getItem(STRATEGY_NAV_STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

/**
 * 只折叠八个对策分类，“御魂配置”入口和侧栏品牌区始终保留。
 */
function setStrategyNavCollapsed(collapsed, persist = true) {
  navEl.hidden = collapsed;
  strategyNavToggleEl.classList.toggle("is-collapsed", collapsed);
  strategyNavToggleEl.setAttribute("aria-expanded", String(!collapsed));
  strategyNavToggleEl.title = collapsed ? "展开对策总览" : "收起对策总览";

  const iconEl = strategyNavToggleEl.querySelector(".sidebar-group-icon");
  if (iconEl) iconEl.textContent = collapsed ? "›" : "⌄";

  if (persist) {
    try {
      window.localStorage.setItem(STRATEGY_NAV_STORAGE_KEY, String(collapsed));
    } catch {
      // 存储不可用时仍保留当前页面内的折叠状态。
    }
  }
}

navEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-section]");
  if (button) setActiveSection(button.dataset.section);
});

contentEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-toggle-section]");
  if (!button) return;
  const sectionId = button.dataset.toggleSection;
  if (state.collapsedSections.has(sectionId)) state.collapsedSections.delete(sectionId);
  else state.collapsedSections.add(sectionId);
  renderContent();
});

function setAllSections(collapsed) {
  state.collapsedSections = collapsed ? new Set(sections.map((section) => section.id)) : new Set();
  renderContent();
}

document.querySelector("#collapse-all-sections").addEventListener("click", () => setAllSections(true));
document.querySelector("#expand-all-sections").addEventListener("click", () => setAllSections(false));

mobileSectionEl.addEventListener("change", (event) => setActiveSection(event.target.value));

modeFiltersEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  state.filter = button.dataset.filter;
  updateModeFilterState();
  renderContent();
});

strategyNavToggleEl.addEventListener("click", () => {
  setStrategyNavCollapsed(!navEl.hidden);
});

searchEl.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  renderContent();
});

clearSearchEl.addEventListener("click", () => {
  state.query = "";
  state.filter = "all";
  searchEl.value = "";
  updateModeFilterState();
  renderContent();
  searchEl.focus();
});

/** 提供不占页面空间的 / 聚焦搜索和 Escape 清空能力。 */
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !event.ctrlKey && !event.metaKey && !event.altKey && document.activeElement !== searchEl) {
    event.preventDefault();
    searchEl.focus();
  }
  if (event.key === "Escape" && document.activeElement === searchEl) clearSearchEl.click();
});

/** 首次加载：先建立导航，再建立内容，保证下拉选择器有可用选项。 */
initSidebar();
renderNavigation();
setStrategyNavCollapsed(readStrategyNavCollapsed(), false);
updateModeFilterState();
renderContent();
