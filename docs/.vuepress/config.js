module.exports = {
    title: 'Jacknic',
    description: 'Jacknic的博客',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    themeConfig: {
        sidebar: 'auto',
        nav: [
            { text: '主页', link: '/' },
            // { text: '博文', items: [ ] }, 
            { text: 'Android', link: '/android/' },
            { text: 'JVM', link: '/jvm/' },
            { text: 'JS', link: '/js/' },
            { text: 'Python', link: '/python/' },
            { text: 'Linux', link: '/linux/' },
            { text: 'Web', link: '/web/' },
            { text: 'Github', link: 'https://www.github.com/Jacknic' },
            { text: '关于', link: '/about' },
        ]
    }
}