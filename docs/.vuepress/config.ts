import { defaultTheme } from 'vuepress'

export default {
    lang: 'zh-CN',
    title: '幻翼动漫社',
    description: '你好,这里是幻翼动漫社的官网(建设中)',
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
    theme: defaultTheme({
        // 默认主题配置
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: 'QQ群',
                link: '//jq.qq.com/?_wv=1027&k=hNl4NI35',
            },
            {
                text: 'QQ频道',
                link: '//qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&inviteCode=1Vlfou&from=246610&biz=ka#/',
            }
        ],
    }),
};
