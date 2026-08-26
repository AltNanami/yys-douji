/** 葛叶板块：cards 的每个对象是一张独立对策卡；tags 用于筛选，notes 用于提醒。 */
export const section = {
  id: "geye",
  title: "葛叶",
  subtitle: "葛禅、葛卑与葛祸季的常用处理",
  // tags 决定总览页的“抢速 / 坐地 / 挖土”筛选；enemy 和 counter 都可放多条。
  cards: [
    {
      title: "葛禅吞骷",
      tags: ["抢速"],
      enemy: ["葛禅吞骷 + 白阎桃"],
      counter: ["神龙平面 + 离白封 / 阎"],
      notes: [
        { text: "对面明牌阎魔，可上垢尝", important: true },
        { text: "需要面灵气抵抗变形" },
        { text: "小白无法对抗阎切", important: true }
      ]
    },
    {
      title: "葛卑因叉挖土",
      tags: ["挖土"],
      enemy: ["葛卑因叉 + 白 / 阎 / 封"],
      counter: ["神龙平面 + 离 / 白"]
    },
    {
      title: "葛祸季",
      tags: ["坐地"],
      enemy: ["葛祸季桃 + 泷"],
      counter: ["神龙平面 + 封 / 白", "神龙平椒 + 鬼童丸"]
    }
  ]
};
