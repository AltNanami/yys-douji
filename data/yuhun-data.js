/**
 * 第一张御魂配置表的数据源。
 * id 用于折叠状态和 DOM 标识，必须保持唯一；rows 中每个对象对应一行表格。
 * 修改式神时只改 rows，不要把表格 HTML 写进数据文件。
 */
export const yuhunMeta = {
  id: "bangey-shenlong",
  title: "Ban葛版本强势 · 神龙平 4+1 挖土",
  subtitle: "详细御魂与属性配置一览",
  updatedAt: "2026/08/24",
  sourceNote: "all 无二号机硬性要求，建议先看重点提示，不用着急一次配齐。",
  footerNote: "黑色加粗字体是名士以下建议必做卡，可以只做这些核心卡；想打高分再按需求补充。"
};

/**
 * 行字段说明：
 * name 式神名；set 御魂套装；requirement 速度/门槛；metric 主要指标；
 * main 二四六号位主属性；fill 属性限制；advice 实战建议；role 页面筛选分组；
 * note 为可选补充说明，会显示在式神名下方并参与搜索。
 */
export const yuhunRows = [
  {
    name: "小面", set: "散件 / 套装", requirement: "越快越好", metric: "速度", main: "速 xx", fill: "抵抗 / 生命 / 攻击最佳，其次防御；其他属性较弱", advice: "不要求快，有 160 可给面 1，也可以带招财 / 共潜", role: "高速式神"
  },
  {
    name: "阎魔", set: "火灵", requirement: "越快越好", metric: "速度", main: "速命生 / 防", fill: "也可以无尾，去找命中高点的，速度优先", advice: "152 就能跑卑，满速基本就给阎 1，非必须", role: "高速式神"
  },
  {
    name: "云外镜", set: "共潜", requirement: "越快越好", metric: "速度", main: "速生生 / 防", fill: "防 2；龙珏和平面板及格或达标下尽量快", advice: "速度 > 神无月；喜欢面云可 2 号火灵 / 三味 / 青女，但非必须", role: "高速式神", note: "防 2 是防御 2 件套"
  },
  {
    name: "卑弥呼", set: "散件", requirement: "越快越好", metric: "速度", main: "速生生 / 防", fill: "有配置可以给思铃搞个", advice: "非必须", role: "高速式神"
  },
  {
    name: "摩托", set: "散件", requirement: "越快越好", metric: "速度", main: "速命生", fill: "有配置可以给思铃搞个", advice: "非必须", role: "高速式神"
  },
  {
    name: "毗沙门天", set: "共潜", requirement: "越快越好", metric: "速度", main: "速抵生 / 生生", fill: "抵抗 2", advice: "不是区！！！", role: "高速式神", note: "不是区服硬性要求"
  },
  {
    name: "二舅", set: "轮入道", requirement: "大概 238 速", metric: "攻击", main: "速攻攻", fill: "范围选 28.5 - 31 暴击，多刷攻击轮入道", advice: "t0.5 有强度，卡神后面就行；有 W 攻就算达标毕业", role: "高速式神"
  },
  {
    name: "神无月", set: "轮入道", requirement: "240 速", metric: "抵抗", main: "速生生", fill: "防 2", advice: "240 没有就降速", role: "高速式神"
  },
  {
    name: "孔雀", set: "返魂香", requirement: "> 神无月的速度", metric: "命中", main: "速命生", fill: "防 2", advice: "/", role: "高速式神"
  },
  {
    name: "老头", set: "骰子鬼", requirement: "> 神无月的速度", metric: "抵抗", main: "速抵生", fill: "/", advice: "非必须", role: "高速式神"
  },
  {
    name: "sp 千", set: "木魅", requirement: "> 神无月的速度", metric: "生命", main: "速生生", fill: "有条件防 2", advice: "可配合打离封狐", role: "高速式神"
  },
  {
    name: "切", set: "薙魂", requirement: "越快越好", metric: "速度", main: "速攻攻 / 生", fill: "速度快，打协战有优势", advice: "主要打协战、白面，非必须", role: "高速式神"
  },
  {
    name: "封", set: "钟灵 / 火灵", requirement: "越快越好", metric: "速度", main: "速命生", fill: "/", advice: "求稳命中，可以卡神后面", role: "高速式神"
  },
  {
    name: "帝", set: "油火都可 / 共潜", requirement: "/", metric: "速度", main: "速命生", fill: "防 2", advice: "共潜帝可以考虑给思铃，非必须", role: "高速式神"
  },
  {
    name: "月读", set: "共潜", requirement: "258 速", metric: "生命", main: "速生生 / 防", fill: "有条件，防 2", advice: "尽量 258，最低 251 + 跑 158 羊", role: "高速式神"
  },
  {
    name: "鹿", set: "招财", requirement: "越快越好", metric: "速度", main: "速生生", fill: "防 2", advice: "打不 ban 鹿的神荒的 Weirdo，怕万一有", role: "高速式神"
  },
  {
    name: "小白", set: "散件", requirement: "越快越好", metric: "速度", main: "速生 x", fill: "/", advice: "白面抢速用，非必须", role: "高速式神"
  },
  {
    name: "平酱门 1", set: "钟灵", requirement: "> 云速度 × 0.8", metric: "输出", main: "速攻暴", fill: "满暴；1010 防御 +；攻击 < 7100", advice: "命中给 3 - 12 差不多，没有也行。输出为主选攻击高；低练度做不出降暴、降命中。1.2w 及格，1.3w 达标，1.4w 优秀", role: "输出式神"
  },
  {
    name: "平酱门 2", set: "薙魂", requirement: "140 速", metric: "输出", main: "防攻爆", fill: "满暴；1080 防 +；攻 < 7700", advice: "防御 × 7 > 攻击，去找防御平；唯一建议搞的二号，非必须", role: "输出式神"
  },
  {
    name: "龙珏", set: "轮入道", requirement: "> 平酱门速度", metric: "输出", main: "速攻暴", fill: "满暴", advice: "1.85w 及格（最低要求），尽量 1.95w 毕业，2.05w 完美", role: "输出式神"
  },
  {
    name: "吸血姬", set: "伤魂鸟", requirement: "128 速 / 140 速", metric: "输出", main: "攻攻暴", fill: "满暴", advice: "伤魂打思铃内战，网切打禅吞，一个伤魂", role: "输出式神"
  },
  {
    name: "骷髅", set: "木魅 / 隐念", requirement: "210 速", metric: "生命", main: "速生生", fill: "防 2；生命 × 0.06 < 攻击", advice: "给思铃用，可以二号，非必须", role: "输出式神"
  },
  {
    name: "ur 刀", set: "隐念", requirement: "205 速", metric: "输出", main: "速攻暴", fill: "攻击 > 铃", advice: "非必须", role: "输出式神"
  },
  {
    name: "荒", set: "伤魂 / 地藏", requirement: "/", metric: "输出", main: "攻攻爆", fill: "满暴", advice: "伤魂必须，地藏非必须", role: "输出式神"
  },
  {
    name: "sp017", set: "伤混鸟", requirement: "205 速", metric: "输出", main: "速攻暴", fill: "满暴", advice: "做中速的花，骷髅卡 200 速，017 后面", role: "输出式神"
  },
  {
    name: "祸", set: "薙魂", requirement: "/", metric: "治疗量", main: "生生暴", fill: "满暴", advice: "打须佐和协战，二号可以伤魂鸟，非必须", role: "输出式神"
  },
  {
    name: "sp 猫", set: "伤混鸟 / 尘冢", requirement: "/", metric: "输出", main: "无固定", fill: "把 4 号抵抗 √ 上，6 号位攻击 √ 上，算高抵抗；满暴", advice: "150 抵抗，算输出就行，系统自动获取 MVP 最佳！", role: "输出式神"
  },
  {
    name: "市佳美", set: "地藏", requirement: "160 - 200 速", metric: "输出", main: "生生爆 / 速生爆", fill: "50 暴击，也可防 2，更稳保证邪枝", advice: "/", role: "输出式神"
  },
  {
    name: "小鬼童丸", set: "魅妖", requirement: "215 速", metric: "命中", main: "速命攻", fill: "选攻击高的；防 2；6200+ 攻击，跑龙珏", advice: "也可搞个输出，非必须", role: "输出式神"
  },
  {
    name: "大白", set: "蚌精", requirement: "/", metric: "治疗量", main: "生生暴", fill: "不超 x", advice: "找速度快的，非必须", role: "输出式神"
  },
  {
    name: "言", set: "钟灵", requirement: "> 云速度 × 0.8", metric: "抵抗", main: "速抵生", fill: "50 命中；防 2", advice: "卡龙珏后面，非必须", role: "辅助式神"
  },
  {
    name: "吞", set: "地藏 / 薙魂", requirement: "210 速", metric: "生命", main: "速生生", fill: "防 2", advice: "地藏打禅吞雪，薙魂打离封", role: "辅助式神"
  },
  {
    name: "sp 日和", set: "木魅", requirement: "128 速", metric: "输出", main: "攻生暴 / 爆", fill: "20000w 生命", advice: "也是离封狐策略卡，非必须", role: "辅助式神"
  },
  {
    name: "麓", set: "地藏", requirement: "235 速", metric: "抵抗", main: "速生生", fill: "防 2", advice: "打火山", role: "辅助式神"
  },
  {
    name: "思金神", set: "魍魉", requirement: "210 速", metric: "命中", main: "速命生", fill: "防 2", advice: "中速铃的话，思速度必须 > 017", role: "辅助式神"
  },
  {
    name: "雀", set: "木魅", requirement: "/", metric: "防御", main: "防防防", fill: "攻击 < 3000，稳定卡铃", advice: "还能做个正常的给荒，非必须", role: "辅助式神"
  },
  {
    name: "烟", set: "魅妖 / 魍魉", requirement: "243 速", metric: "命中", main: "速命生", fill: "/", advice: "打杯茶坐地", role: "辅助式神"
  },
  {
    name: "小僧", set: "镜姬 / 木魅", requirement: "/", metric: "抵抗", main: "生抵生", fill: "/", advice: "/", role: "辅助式神"
  },
  {
    name: "磕头涂 b", set: "三味", requirement: "/", metric: "x", main: "x", fill: "x", advice: "三味什么都行，非必须；一种反打思路，也可坐地，非必须", role: "辅助式神"
  },
  {
    name: "ssr 花", set: "魅妖 / 钟灵", requirement: "/", metric: "命中", main: "速命生 / 防", fill: "/", advice: "斗技的尽头，脸白就是神卡无敌！非必须", role: "辅助式神"
  },
  {
    name: "熊", set: "火灵 / 地藏 / 蚌精", requirement: "> 龙速度", metric: "命中", main: "速命生", fill: "/", advice: "命中最低最好 140+；有条件做俩，单号机火灵", role: "辅助式神"
  },
  {
    name: "垢尝", set: "火灵", requirement: "速度", metric: "速度", main: "速生生", fill: "防 2", advice: "如果抵抗面可以做个，打阎魔优势开，不怕奶切", role: "辅助式神"
  },
  {
    name: "不知火", set: "火灵", requirement: "/", metric: "生命", main: "速生生", fill: "防 2", advice: "有 159 的面，鱼塘打白葛抢速的，非必须", role: "辅助式神"
  },
  {
    name: "桃花", set: "地藏", requirement: "190 速", metric: "治疗量", main: "速生爆", fill: "满暴", advice: "策略卡，没阎魔就贼强！二号可珍珠，非必须", role: "辅助式神"
  },
  {
    name: "泷", set: "蚌精", requirement: "/", metric: "治疗量", main: "生生暴", fill: "满暴", advice: "/", role: "辅助式神"
  },
  {
    name: "省略", set: "/", requirement: "/", metric: "/", main: "/", fill: "/", advice: "看自己喜欢，需要做就行", role: "备选式神", note: "这里对应原表里的备选式神占位，后续可直接替换或补充"
  }
];
