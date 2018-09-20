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
  themeConfig: {
    nav: [
      {
        text: '章节',
        items: info.items
      }
    ],
    displayAllHeaders: true,
    sidebar: info.sidebar,
    lastUpdated: '最后更新',
    repo: 'https://gitee.com/catchlife/effective-java-notes.git',
    repoLabel: 'Git',
    editLinks: false,
    editLinkText: '帮助我改正文中错误^_^'
  }
}
