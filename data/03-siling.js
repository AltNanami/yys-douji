/** 思铃板块数据。enemy / counter 必须使用数组，长句会由卡片样式自动换行。 */
export const section = {
  id: "siling",
  title: "思铃",
  subtitle: "坐地挂机与思铃面吞处理",
  // 对面和我方阵容使用数组，页面会逐条生成列表项。
  cards: [
    {
      title: "坐地挂机",
      tags: ["坐地"],
      enemy: ["思铃平孔桃"],
      counter: ["神龙平云 + 阎 / 封"]
    },
    {
      title: "思铃面吞",
      tags: ["坐地"],
      enemy: ["思铃面吞 + 神 / 骷"],
      counter: ["神龙平面 + 白 / 老头"]
    },
    {
      title: "思铃骷 / 入内雀",
      tags: ["坐地"],
      enemy: ["思铃骷 / 入内雀 + 吞 / 桃 / 泷 / 灵 / 孔 / 阎 / 卑"],
      counter: ["神龙平孔 + 帝 / 封 / 市"]
    }
  ]
};
