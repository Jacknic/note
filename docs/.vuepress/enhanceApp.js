
export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData // 站点元数据
}) => {
    // ...做一些其他的应用级别的优化
    let sidebar = siteData.themeConfig.sidebar
    let pages = siteData.pages
    // console.log(pages)
    let links = {}
    // console.log(siteData)
    pages.forEach(page => {
        let path = page.path
        let endIndex = path.lastIndexOf('/')
        let dir = path.substring(0, endIndex + 1)
        let file = path.substring(endIndex + 1)
        // console.log(path)
        // "".split('')
        // console.log(dir)
        if (!links[dir]) {
            links[dir] = ['']
        }
        if (!path.endsWith('/') && endIndex > 0) {
            let item = file.split('.')[0]
            links[dir].push(item)
        }
        // siteData.themeConfig.sidebar = links

    });
    // console.log(links)
    siteData.themeConfig.sidebar = links
}
/**
 * 
 *  '/': [{
        title: '目录',
        children: [
            'Android/',
            'Python/',
            '/JVM/',
            '/JVM/Java/',
            '/JVM/Java/01-书写Java代码',
        ]
    }]
 */