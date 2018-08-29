module.exports = {
    title: 'Jacknic',
    description: 'Jacknic的博客',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    themeConfig: {
        sidebarDepth: 5,
        displayAllHeaders: true,
        // sidebar: {
        //     '/': [''],
        //     '/android/': [''],
        //     '/jvm/': ['', 'java'],
        //     '/js/': [''],
        //     '/python/': [''],
        //     '/linux/': [''],
        //     '/web/': [''],
        // },
        sidebar: [
            {
                title: 'Android',
                children: ['/android/']
            },
            {
                title: 'JS',
                children: ['/js/']
            },
            {
                title: 'JVM',
                children: ['/jvm/']
            },
            {
                title: 'Linux',
                children: ['/linux/']
            },
            {
                title: 'Python',
                children: ['/python/']
            },
            {
                title: 'Web',
                children: ['/web/']
            }
        ],
        // sidebar: 'auto',
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
            { text: '关于我', link: '/about' },
        ]
    },

}