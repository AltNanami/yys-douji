/**
 * 两个页面共用的侧边栏折叠控制器。
 *
 * 折叠状态保存在 localStorage 中，因此用户从对策总览跳到御魂配置时，侧栏
 * 会保持相同状态。读取或写入存储失败时会自动退化为本次页面内可用。
 */
const STORAGE_KEY = "onmyoji-sidebar-collapsed";

/** 安全读取上次状态；隐私模式禁用存储时返回默认展开。 */
function readCollapsedState() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

/** 存储失败不影响按钮本身的展开/收起功能。 */
function saveCollapsedState(collapsed) {
  try {
    window.localStorage.setItem(STORAGE_KEY, String(collapsed));
  } catch {
    // localStorage 不可用时只保留当前页面状态。
  }
}

/**
 * 初始化当前页面的侧边栏。HTML 不完整时安全退出，避免影响页面其他功能。
 */
export function initSidebar() {
  const shellEl = document.querySelector(".app-shell");
  const sidebarEl = document.querySelector("#sidebar");
  const toggleEl = document.querySelector("#sidebar-toggle");
  const collapsibleEl = document.querySelector("#sidebar-collapsible");
  if (!shellEl || !sidebarEl || !toggleEl || !collapsibleEl) return;

  /** 同步类名、可访问状态、按钮图标和提示文字。 */
  function applyState(collapsed, persist = true) {
    shellEl.classList.toggle("sidebar-collapsed", collapsed);
    sidebarEl.classList.toggle("is-collapsed", collapsed);
    collapsibleEl.hidden = collapsed;
    toggleEl.setAttribute("aria-expanded", String(!collapsed));
    toggleEl.title = collapsed ? "展开侧边栏" : "收起侧边栏";

    const iconEl = toggleEl.querySelector("[aria-hidden='true']");
    const labelEl = toggleEl.querySelector(".visually-hidden");
    if (iconEl) iconEl.textContent = collapsed ? "›" : "‹";
    if (labelEl) labelEl.textContent = collapsed ? "展开侧边栏" : "收起侧边栏";
    if (persist) saveCollapsedState(collapsed);
  }

  applyState(readCollapsedState(), false);

  toggleEl.addEventListener("click", () => {
    applyState(!sidebarEl.classList.contains("is-collapsed"));
  });
}
