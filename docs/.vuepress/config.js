
// 顶部导航
const navItems = [
    { text: '主页', link: '/' },
    { text: 'Android', link: '/Android/' },
    { text: 'JVM', link: '/JVM/' },
    { text: 'JS', link: '/JS/' },
    { text: 'Python', link: '/Python/' },
    { text: 'Linux', link: '/Linux/' },
    { text: 'Front', link: '/Front/' },
    { text: 'Github', link: 'https://www.github.com/Jacknic' },
    { text: '关于我', link: '/about' },
]

module.exports = {
    title: 'Jacknic',
    description: 'Jacknic的博客',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        sidebarDepth: 2,
        lastUpdated: '最近更新',
        nav: navItems
    },
}