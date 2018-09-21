var fs = require('fs')
var path = require('path')

var themeConf = (function name(params) {
  // 处理目录
  var titles = [
    '第1章 引言',
    '第2章 创建和销毁对象',
    '第3章 对于所有对象都通用的方法',
    '第4章 类和接口',
    '第5章 泛型',
    '第6章 枚举和注解'
  ]

  var rootPath = path.resolve('./')

  var excludeFileNames = ['.git', '.vuepress', 'node_modules']

  var Contents = []

  var i = 0
  var its = []

  var dirs = fs.readdirSync(rootPath)

  dirs.forEach(dirName => {
    if (excludeFileNames.indexOf(dirName) === -1) {
      var realDir = path.join(rootPath, dirName)
      var stats = fs.statSync(realDir)
      if (stats.isDirectory()) {
        its = []
        var docs = fs.readdirSync(realDir)
        docs.forEach(docName => {
          its.push(docName.split('.')[0])
        })
        Contents.push({
          text: titles[i],
          dir: dirName,
          items: its
        })
        i++
      }
    }
  })
  var themeItems = []
  var themeSidebar = {}
  Contents.forEach(content => {
    themeItems.push({
      text: content.text,
      link: `/${content.dir}/${content.items[0]}`
    })
    themeSidebar[`/${content.dir}/`] = content.items
  })
  return {
    themeItems,
    themeSidebar
  }
})()

module.exports = {
  title: 'Effective Java Notes',
  description: 'Effective Java 阅读笔记',
  port: 9600,
  base: '/effective-java-notes/',
  head: [
    [
      'link',
      {
        rel: 'shortcut icon',
        href: '/logo.jpg'
      }
    ],
    ['link', {
      rel: 'manifest',
      href: '/manifest.json'
    }],
    ['meta', {
      name: 'theme-color',
      content: '#3eaf7c'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#000000'
    }]
  ],
  serviceWorker: true,
  themeConfig: {
    nav: [{
      text: '章节',
      items: themeConf.themeItems
    }],
    serviceWorker: {
      updatePopup: {
        message: '发现新内容更新',
        buttonText: '刷新'
      }
    },
    sidebarDepth: 0,
    displayAllHeaders: true,
    sidebar: themeConf.themeSidebar,
    lastUpdated: '上次更新',
    repo: 'CatchLife/effective-java-notes',
    repoLabel: 'GitHub',
    editLinks: true,
    editLinkText: '帮助我改正文中错误^_^'
  }
}