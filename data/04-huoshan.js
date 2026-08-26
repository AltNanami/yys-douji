/** 火山板块数据。抢速、坐地等标签只写在 tags 中，便于统一筛选。 */
export const section = {
  id: "huoshan",
  title: "火山",
  subtitle: "传统火山与火山挖土的出场顺序",
  // 同一张卡可以在 counter 中同时放抢速和坐地方案。
  cards: [
    {
      title: "传统火山 · 座岳平孔桃",
      tags: ["坐地"],
      enemy: ["座岳平孔桃"],
      counter: ["神平云封熊"]
    },
    {
      title: "传统火山 · 平岳座摩",
      tags: ["抢速"],
      enemy: ["平岳座摩 + 孔 / 桃 / 吞 / 帝"],
      counter: ["神龙平云 + 封 / 熊"]
    },
    {
      title: "火山挖土",
      tags: ["挖土", "抢速"],
      enemy: ["平 / 修罗 + 岳 / 卑 / 思 + 阎 / 摩"],
      counter: ["抢速：神龙平 + 面 / 白 + 泷 / 雀", "坐地：神龙平 + 雀泷 + 桃"]
    }
  ]
};
