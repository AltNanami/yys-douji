/**
 * 第二张御魂配置表：神平、思铃和思平的 128 配置。
 * yuhun.js 会通过 yuhunSilingMeta.rows 把这份资料和第一张表并列渲染；
 * 新增一行时保持 name / set / requirement / metric / main / fill / advice / role
 * 这些字段的语义不变，note 可选，用于展示原表中的补充说明。
 */
export const yuhunSilingMeta = {
  id: "shenping-siling",
  title: "神平思铃详细御魂配置",
  subtitle: "神平 + 思铃 + 思平 · 128 配置",
  updatedAt: "2026/08/12",
  sourceNote: "all 无二号机硬性要求，优先理解速度关系和属性限制。",
  footerNote: "核心常用卡优先配置，想打高分再按阵容补充；没有平可以先玩思铃。"
};

/**
 * 每个对象是一行御魂配置；role 必须使用“高速式神 / 输出式神 / 辅助式神 /
 * 备选式神”之一，才能被顶部统计和角色筛选正确归类。
 */
export const yuhunSilingRows = [
  { name: "卑弥呼", set: "散件 / 招财", requirement: "越快越好", metric: "速度", main: "速生生 / 防", fill: "/", advice: "/", role: "高速式神" },
  { name: "阎魔", set: "火灵", requirement: "跑摩托", metric: "速度", main: "速命生", fill: "可以不用尾巴", advice: "需满速火灵", role: "高速式神" },
  { name: "摩托", set: "散件 / 招财", requirement: "/", metric: "速度", main: "速命生", fill: "/", advice: "需 156+，有条件可以 70 命中", role: "高速式神" },
  { name: "封", set: "钟灵 / 雪幽魂 / x", requirement: "越快越好", metric: "速度", main: "速命生", fill: "/", advice: "/", role: "高速式神" },
  { name: "帝", set: "共潜", requirement: "越快越好", metric: "速度", main: "速命生", fill: "/", advice: "有条件就满速跑云", role: "高速式神" },
  { name: "毗沙门天", set: "共潜", requirement: "越快越好", metric: "速度", main: "速抵 / 生生", fill: "/", advice: "/", role: "高速式神" },
  { name: "云外镜", set: "共潜", requirement: "越快越好", metric: "速度", main: "速生生 / 防", fill: "防 2", advice: "有满速内战，没有也无所谓", role: "高速式神" },
  { name: "千机", set: "火灵", requirement: "越快越好", metric: "速度", main: "速攻攻", fill: "/", advice: "打老头", role: "高速式神" },
  { name: "月读", set: "共潜", requirement: "258 速", metric: "速度", main: "速生生", fill: "防 2", advice: "/", role: "高速式神" },
  { name: "神无月", set: "木魅 / 轮入道", requirement: "240 - 250 速", metric: "抵抗", main: "速生生", fill: "防 2", advice: "/", role: "高速式神" },
  { name: "平 1", set: "网切", requirement: "140 速", metric: "输出", main: "攻防暴 / 爆", fill: "1080 防起；攻击 < 7700；满暴", advice: "找攻击和防御都高的防御平", role: "输出式神" },
  { name: "平 2", set: "钟灵", requirement: "205 速", metric: "输出", main: "速攻暴 / 爆", fill: "1000 防御+；攻击 < 7200；满暴", advice: "云能拉起；找攻击和防御都高的防御平，可以 10+ 命中", role: "输出式神" },
  { name: "龙珏 1", set: "轮入道", requirement: "210 速", metric: "输出", main: "速攻暴 / 爆", fill: "/", advice: "云能拉起", role: "输出式神" },
  { name: "龙珏 2", set: "片叶", requirement: "142 速", metric: "输出", main: "速攻暴 / 爆", fill: "/", advice: "比网切平快", role: "输出式神" },
  { name: "sp017", set: "伤魂鸟", requirement: "大概 203 速", metric: "输出", main: "速攻暴 / 爆", fill: "满暴", advice: "思铃配合；速度思 > 铃 > 骷髅，按骷铃思算", role: "输出式神" },
  { name: "sp 猫", set: "尘冢 / 伤魂", requirement: "/", metric: "输出", main: "都勾上", fill: "150 抵抗；满暴", advice: "指标输出后，把 4 号抵抗和 6 号攻击勾上，得到最佳", role: "输出式神" },
  { name: "sp 岳", set: "海图 / 地藏", requirement: "/", metric: "防御输出", main: "防防暴", fill: "满暴", advice: "/", role: "输出式神" },
  { name: "骷髅", set: "隐念 / 木魅 / 薙魂", requirement: "200 速", metric: "生命", main: "速生生", fill: "防 2", advice: "要求攻击 > 生命 × 0.06；有条件做多号机", role: "输出式神" },
  { name: "sp 吸血姬", set: "网切", requirement: "128 速", metric: "输出", main: "攻攻爆", fill: "/", advice: "打禅队", role: "输出式神" },
  { name: "市佳美", set: "地藏", requirement: "200 速", metric: "输出", main: "速生爆", fill: "/", advice: "/", role: "输出式神" },
  { name: "荒", set: "伤混鸟 / 地藏 / 恶楼", requirement: "/", metric: "输出", main: "攻攻爆", fill: "防 2", advice: "有条件做多号机", role: "输出式神" },
  { name: "祸", set: "薙魂", requirement: "/", metric: "治疗量", main: "生生爆", fill: "/", advice: "打离", role: "输出式神" },
  { name: "大白", set: "蚌精", requirement: "/", metric: "治疗量", main: "生生爆", fill: "/", advice: "打荒", role: "输出式神" },
  { name: "神蛇", set: "破势", requirement: "135 速", metric: "输出", main: "攻攻爆", fill: "/", advice: "/", role: "输出式神" },
  { name: "u 刀", set: "隐念", requirement: "200 速", metric: "输出", main: "速攻暴 / 爆", fill: "满暴", advice: "攻击 > 思", role: "输出式神" },
  { name: "言", set: "钟灵", requirement: "210 速", metric: "命抗双修", main: "速抵生", fill: "防 2", advice: "可以做俩：一个抵抗，一个命中，一个根据喜欢", role: "辅助式神" },
  { name: "泷", set: "蚌精", requirement: "/", metric: "治疗量", main: "生生爆", fill: "/", advice: "/", role: "辅助式神" },
  { name: "鬼", set: "魅妖", requirement: "210 速", metric: "命中", main: "速命攻", fill: "防 2", advice: "/", role: "辅助式神" },
  { name: "麓", set: "地藏", requirement: "240 速", metric: "抵抗", main: "速抵生", fill: "防 2", advice: "/", role: "辅助式神" },
  { name: "孔雀", set: "返魂香", requirement: "240 - 250 速", metric: "命中", main: "速命生", fill: "防 2", advice: "> 神速度；还能做个 200 速 60 暴击输出的", role: "辅助式神" },
  { name: "雨女", set: "恶楼", requirement: "大概比卑弥呼快", metric: "抵抗", main: "速抵生", fill: "防 2", advice: "大概比卑弥呼快 1 - 1.5，最好", role: "辅助式神" },
  { name: "雀", set: "木魅", requirement: "/", metric: "防御", main: "防防防", fill: "/", advice: "做两个，再做个卡思的；不要 1 号位满级", role: "辅助式神" },
  { name: "思金神", set: "钟灵 / 魍魉", requirement: "大概 205 速", metric: "命中", main: "速命生", fill: "防 2", advice: "配合 017 的", role: "辅助式神" },
  { name: "小僧", set: "地藏 / 木魅", requirement: "/", metric: "抵抗", main: "生抵生", fill: "3w 血", advice: "/", role: "辅助式神" },
  { name: "熊", set: "地藏", requirement: "/", metric: "命中", main: "速命生", fill: "有条件防 2", advice: "140+ 命中", role: "辅助式神" },
  { name: "吞", set: "薙魂 / 木魅 / 蚌精", requirement: "210 速", metric: "生命", main: "速生生", fill: "防 2", advice: "有条件做多号机", role: "辅助式神" },
  { name: "/", set: "/", requirement: "/", metric: "/", main: "/", fill: "/", advice: "", role: "备选式神", note: "原表中的备选式神占位，可按需替换或补充" }
];
