/** 离封板块数据。将不同变体拆成卡片，notes 用于保留共潜等关键提醒。 */
export const section = {
  id: "lifeng",
  title: "离封",
  subtitle: "离封狐、切象与共潜提醒",
  // notes 的 important=true 会使用醒目的提醒色。
  cards: [
    {
      title: "离封狐",
      tags: ["抢速"],
      enemy: ["离封狐 + 阎 + 猫 / 川…"],
      counter: ["神龙平象 + 骷 / 地震荒 / 猫"],
      notes: [{ text: "象：共潜", important: true }]
    },
    {
      title: "离封狐切象",
      tags: ["坐地"],
      enemy: ["离封狐 + 切象"],
      counter: ["面骷思铃象", "孔骷思铃象"]
    }
  ]
};
