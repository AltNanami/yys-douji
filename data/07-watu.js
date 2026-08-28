/** 挖土板块数据。每张卡聚焦一个常见对面组合，counter 保持可直接抄用。 */
export const section = {
  id: "watu",
  title: "挖土",
  subtitle: "封叉因、卑因叉与因面龙歌",
  // tags 使用“挖土”后，卡片会出现在对应类型筛选结果中。
  cards: [
    {
      title: "封叉因目冰",
      tags: ["挖土"],
      enemy: ["封叉因目冰"],
      counter: ["阎摩雀思铃骷"]
    },
    {
      title: "卑因叉阎",
      tags: ["挖土"],
      enemy: ["卑因叉阎"],
      counter: ["神龙平云泷"]
    },
    {
      title: "卑神叉面",
      tags: ["挖土"],
      enemy: ["卑神叉面"],
      counter: ["龙 / 平 + 神 / 云 / 冰 / 老头"]
    },
    {
      title: "因面龙歌",
      tags: ["挖土"],
      enemy: ["因面龙歌"],
      counter: ["神龙平面 + 老头"]
    },
    {
      title: "吞雪因面封",
      tags: ["挖土"],
      enemy: ["吞雪因面封"],
      counter: ["神龙平白面"]
    }
  ]
};
