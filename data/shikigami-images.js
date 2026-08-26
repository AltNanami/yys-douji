/**
 * 式神头像映射表。
 *
 * key 是攻略文字中会出现的式神名，value 是相对于 outputs/index.html 的图片路径。
 * 新增式神时：1) 按稀有度放到 assets/shikigami/SP 或 SSR；2) 在这里新增一项。
 * 删除或替换头像时只需修改这一份映射，不需要改每一张攻略卡。
 */
export const shikigamiImages = {
  葛: "./assets/shikigami/SSR/geye.jpg",
  封: "./assets/shikigami/SSR/fengyangjun.jpg",
  离: "./assets/shikigami/SSR/li.jpg",
  平: "./assets/shikigami/SSR/pingjiangmen.jpg",
  龙: "./assets/shikigami/SSR/longjue.jpg",
  神: "./assets/shikigami/SSR/shenwuyue.jpg",
  阎: "./assets/shikigami/SSR/yanmo.jpg",
  白: "./assets/shikigami/SSR/xiaobai.jpg",
  骷: "./assets/shikigami/SSR/kulou.jpg",
  吞: "./assets/shikigami/SP/guitun.jpg",
  禅: "./assets/shikigami/SP/chanxin.jpg",
  狐: "./assets/shikigami/SSR/buxianghuchan.jpg",
  象: "./assets/shikigami/SSR/pishamentian.jpg",
  思: "./assets/shikigami/SSR/sijinshen.jpg",
  市: "./assets/shikigami/SSR/shijiamei.jpg",
  雪: "./assets/shikigami/SSR/xueyuqian.jpg",
  卑: "./assets/shikigami/SSR/beimihu.jpg",
  歌: "./assets/shikigami/SSR/geliuduo.jpg",
  羊: "./assets/shikigami/SSR/guijinyang.jpg",
  祸: "./assets/shikigami/SSR/huojinshen.jpg",
  泷: "./assets/shikigami/SSR/long.jpg",
  孔: "./assets/shikigami/SSR/kongque.jpg",
  灵: "./assets/shikigami/SSR/yanling.jpg",
  季: "./assets/shikigami/SSR/ji.jpg",
  须: "./assets/shikigami/SSR/xuzxuo.jpg",
  帝: "./assets/shikigami/SSR/dishitian.jpg",
  鬼童丸: "./assets/shikigami/SSR/guitongwan.jpg",
  云: "./assets/shikigami/SSR/yunwaijing.jpg",
  大岳丸: "./assets/shikigami/SSR/dayuewan.jpg",
  蛇: "./assets/shikigami/SSR/dashe.jpg",
  面: "./assets/shikigami/SSR/mianlingqi.jpg",
  驴: "./assets/shikigami/SSR/lv.jpg",
  花: "./assets/shikigami/SSR/bianhua.jpg",
  目: "./assets/shikigami/SSR/yimulian.jpg",
  川: "./assets/shikigami/SP/huangchuan.jpg",
  切: "./assets/shikigami/SP/guiqie.jpg",
  麓: "./assets/shikigami/SP/luwan.jpg",
  冰: "./assets/shikigami/SP/xuenv.jpg",
  因: "./assets/shikigami/SP/yinfan.jpg",
  摩: "./assets/shikigami/SP/motuo.jpg",
  荒: "./assets/shikigami/SP/shenqihuang.jpg",
  追月: "./assets/shikigami/SP/zhuiyue.jpg",
  鹿: "./assets/shikigami/SP/xiaolunan.jpg",
  鲸: "./assets/shikigami/SP/jingji.jpg",
  座: "./assets/shikigami/SP/zuofu.jpg",
  老头: "./assets/shikigami/SP/laotou.jpg",
  龙鹿: "./assets/shikigami/SP/longlu.jpg",
  烟: "./assets/shikigami/SP/yanyanluo.jpg",
  熊: "./assets/shikigami/SP/xingxiong.jpg",
  叉: "./assets/shikigami/SP/chaji.jpg",
  猫: "./assets/shikigami/SP/jiumingmao.jpg",
  大白: "./assets/shikigami/SP/dabai.jpg",
  桃: "./assets/shikigami/SP/taohua.jpg",
  吸: "./assets/shikigami/SP/xixueji.jpg",
  铃: "./assets/shikigami/SP/sp017.jpg"
};

/**
 * 长阵容字符串里可能含有“葛禅”等组合词，因此只匹配映射中明确的式神名。
 * 页面最终会按式神名在阵容文字中的位置排序；本数组只负责提供最长名称优先
 * 的匹配基础，未来同时加入短称和完整名时不会重复显示重叠头像。
 */
export const shikigamiNames = Object.keys(shikigamiImages).sort((a, b) => b.length - a.length);
