import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  lang: "zh-CN",
  title: "幻翼动漫社",
  description: '"以漫之名 扬幻之翼"',
  bundler: viteBundler(),
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],

  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "QQ群",
        link: "https://qm.qq.com/q/Ya1EtQVx4I",
      },
      {
        text: "QQ频道",
        link: "//qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&inviteCode=1Vlfou&from=246610&biz=ka#/",
      },
    ],
  }),
});
