# 斗技对策簿

这是一个纯前端静态页面，页面结构、样式和攻略数据彼此分离。

代码文件已按模块补充维护注释：HTML 注释解释页面区域，CSS 注释解释布局与
响应式规则，JavaScript 注释解释状态、渲染和事件流程，数据文件注释解释字段。

## 文件怎么改

- `index.html`：主页面骨架。
- `styles.css`：颜色、间距、响应式布局。
- `app.js`：搜索、筛选、导航和卡片渲染逻辑；对策板块支持单块或全部收起 / 展开。
- `sidebar.js`：首页和御魂页共用的侧边栏折叠逻辑，并记住上次展开状态。
- 首页侧边栏的“对策总览”标题可独立收起/展开八个分类；它与整条侧边栏的折叠状态相互独立。
- `data/01-geye.js` ～ `data/08-beiyin.js`：八个独立攻略板块。新增阵容时，在对应文件的 `cards` 数组中复制一个对象即可。
- `data/shikigami-images.js`：攻略文字和式神头像的统一映射；敌方、我方阵容都会自动识别。
- `assets/shikigami/SP/`：SP 式神头像目录，新增图片应保持原始文件名并同步映射。
- `assets/shikigami/SSR/`：SSR 式神头像目录，存放其余已配置头像。
- `yuhun.html`：御魂配置独立页面，提供可检索的长表格。
- `yuhun.css` / `yuhun.js`：御魂配置页的表格样式与筛选逻辑。
- `data/yuhun-data.js`：从 Excel 整理出的第一张御魂配置表，`yuhunMeta.id` 必须唯一；后续新增或修改式神时，只改 `yuhunRows` 数组即可。
- `data/yuhun-siling-data.js`：神平 + 思铃第二张御魂配置表的数据。

每张卡片支持：

```js
{
  title: "卡片标题",
  tags: ["抢速"],
  enemy: ["对面阵容"],
  counter: ["我方对策"],
  notes: [{ text: "需要特别注意的条件", important: true }]
}
```

## 本地预览

由于页面使用 ES Module，建议在 `outputs` 目录启动一个静态服务器后访问 `index.html`。IDEA 里也可以直接配置一个静态文件服务器。

御魂配置页地址为 `yuhun.html`，主页面左侧的“御魂配置”入口可以直接跳转过去。御魂页的每张表可以单独收起 / 展开，也可以使用“全部收起 / 全部展开”。新增配置表时，在 `yuhun.js` 顶部的 `tables` 数组中注册数据文件即可。

## 数据维护注意事项

- 对策卡的 `tags` 只能使用页面已有筛选名，`enemy` 和 `counter` 必须是数组。
- 对策卡 `notes` 是数组；数组中的每项可写字符串，也可写 `{ text: "提醒", important: true }`。
- 御魂表的 `role` 使用“高速式神 / 输出式神 / 辅助式神 / 备选式神”之一。
- 页面会转义资料中的特殊字符，新增内容可以正常包含 `<`、`>`、`&` 和引号。

## 新增式神头像

1. 按稀有度将图片放入 `assets/shikigami/SP/` 或 `assets/shikigami/SSR/`。
2. 在 `data/shikigami-images.js` 中添加映射，例如 `葛: "./assets/shikigami/SSR/geye.jpg"`。
3. 攻略的敌方或我方阵容文字中出现“葛”时，页面会自动显示头像。

删除头像时移除映射项；替换头像时覆盖图片或修改映射路径即可。攻略数据本身不需要修改。
