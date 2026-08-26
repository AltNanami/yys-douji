/** 狐象板块数据。只维护本文件即可新增阵容，页面会自动读取 section.cards。 */
export const section = {
  id: "huxiang",
  title: "狐象",
  subtitle: "神狐象先手与坐地变体",
  // 每张卡只描述一个狐象变体，notes 可选且支持 important 高亮。
  cards: [
    {
      title: "神狐象",
      tags: ["抢速"],
      enemy: ["神狐象 + 阎 / 平 / 桃 / 熊 / 鬼 / 云", "帝 / 羊 / 麓"],
      counter: ["神龙平云 + 鬼童丸 / 桃 / 熊 / 阎 / 花 / 猫", "或者：面封 / 面阎开挖 / 坐地狐象"]
    },
    {
      title: "狐象坐地",
      tags: ["坐地"],
      enemy: ["神狐象 + 言灵大白"],
      counter: ["神龙平封 + 云/面"],
      notes: [{ text: "警惕偷星熊", important: true }]
    },
    {
      title:"神狐象+骷吸",
      tags: ["坐地"],
      enemy: ["神狐象 + 骷吸"],
      counter: ["神龙平封 + 云面/鹿"],
      notes: [
          { text: "警惕偷星熊,若吸血姬 + 入内雀,才上鹿", important: true },
          { text: "若吸血姬 + 入内雀,才上鹿", important: true }
      ]
    }
  ]
};
