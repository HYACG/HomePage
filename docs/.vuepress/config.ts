import { defaultTheme } from 'vuepress'

export default {
    lang: 'zh-CN',
    title: '幻翼动漫社',
    description: '"以漫之名 扬幻之翼"',
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
                link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=XdkxBoGcjThNe-HXITwxcuD2S6nXQVP4&authKey=yLJqGd8w7UB7htaMUS4%2FXOjL6qd8UuM9v5On9wADZl7FS7HQTOywpI3tPgK0SoEl&noverify=0&group_code=538998187',
            },
            {
                text: 'QQ频道',
                link: '//qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&inviteCode=1Vlfou&from=246610&biz=ka#/',
            }
        ],
    }),
};
