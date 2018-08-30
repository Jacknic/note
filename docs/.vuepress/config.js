
// 顶部导航
const nav = [
    { text: '主页', link: '/' },
    { text: 'Android', link: '/Android/' },
    { text: 'JVM', link: '/JVM/' },
    { text: 'JS', link: '/JS/' },
    { text: 'Python', link: '/Python/' },
    { text: 'Linux', link: '/Linux/' },
    { text: 'Web', link: '/Web/' },
    { text: 'Github', link: 'https://www.github.com/Jacknic' },
    { text: '关于我', link: '/about' },
]
// 侧边栏导航
const sidebar0 = [
    {
        title: 'Android',
        children: ['/Android/']
    },
    {
        title: 'JS',
        children: ['/JS/', '/JS/01.md']
    },
    {
        title: 'JVM',
        children: ['/JVM/Java/']
    },
    {
        title: 'Linux',
        children: ['/Linux/', { title: 'ubuntu', children: ['/'] }]
    },
    {
        title: 'Python',
        children: ['/Python/']
    },
    {
        title: 'Web',
        children: ['/Web/']
    }
]

const sidebar = {
    '/': [{
        title: '目录',
        children: [
            '/Android/',
            '/Python/',
            '/JVM/',
            '/JVM/Java/',
            '/JVM/Java/01-书写Java代码',
        ]
    }]
}


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
        sidebarDepth: 5,
        displayAllHeaders: true,
        sidebar: sidebar,
        nav: nav
    },

}

/**
 * 生成侧边导航链接
 * @param {string} path 
 */
function genSidebarConfig(path) {
    console.log('生成侧边导航')
    return [
        '',
        'getting-started',
        'basic-config',
        'assets',
        'markdown',
        'using-vue',
        'custom-themes',
        'i18n',
        'deploy'
    ]
}