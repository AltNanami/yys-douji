/** 神龙平内战板块数据。速度或命中门槛写在 notes，避免遗漏临场限制。 */
export const section = {
  id: "shenlong",
  title: "神龙平内战",
  subtitle: "高速阎魔与高速面灵气镜像",
  // 速度、命中等硬门槛写入 notes，保证搜索也能找到这些提醒。
  cards: [
    {
      title: "高速阎魔",
      tags: ["抢速"],
      enemy: ["神龙平 + 阎 / 面 / 云 / 泷 / 目"],
      counter: ["神龙平阎 + 花 / 桃 / 云 / 云 / 封"],
      notes: [{ text: "阎魔：+152 命中", important: true }]
    },
    {
      title: "高速面",
      tags: ["抢速"],
      enemy: ["神龙平 + 阎 / 面 / 云 / 泷 / 目"],
      counter: ["神龙平面 + 白 / 桃 / 云 / 封"]
    },
    {
      title: "神龙平阎桃",
      tags: ["抢速"],
      enemy: ["神龙平阎桃"],
      counter: ["神龙平云熊"]
    }
  ]
};
