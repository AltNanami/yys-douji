/** 卑因板块数据。保留两套速度镜像方案，后续新增方案直接追加到 cards。 */
export const section = {
  id: "beiyin",
  title: "卑因",
  subtitle: "卑叉因与卑茶因蛇龙",
  // 新增卡片时保持 title / tags / enemy / counter 字段结构即可。
  cards: [
    {
      title: "卑叉因",
      tags: ["抢速"],
      enemy: ["卑叉因蛇阎"],
      counter: ["神龙平云泷"]
    },
    {
      title: "卑茶因蛇龙",
      tags: ["抢速"],
      enemy: ["卑叉因蛇龙"],
      counter: ["神龙平白面"]
    }
  ]
};
