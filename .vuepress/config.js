var Contents = require('../Contents')

const info = (function genContents() {
  let items = []
  let sidebar = {}
  Contents.forEach(content => {
    items.push({
      text: content.text,
      link: `/${content.dir}/${content.items[0]}`
    })
    sidebar[`/${content.dir}/`] = content.items
  })
  return {
    items,
    sidebar
  }
})()

module.exports = {
  title: 'effective java notes',
  description: 'effective java 阅读笔记',
  port: 9600,
  base: '/effective-java-notes/',
  head: [
    [
      'link',
      {
        rel: 'shortcut icon',
        href: '/favicon.ico'
      }
    ]
  ],
  serviceWorker: true,
  themeConfig: {
    nav: [
      {
        text: '章节',
        items: info.items
      }
    ],
    serviceWorker: {
      updatePopup: {
        message: '发现新内容可用',
        buttonText: '刷新'
      }
    },
    displayAllHeaders: true,
    sidebar: info.sidebar,
    lastUpdated: '上次更新',
    repo: 'CatchLife/effective-java-notes',
    repoLabel: 'GitHub',
    editLinks: true,
    editLinkText: '帮助我改正文中错误^_^'
  }
}
