var fs = require('fs')
var path = require('path')

var themeConf = function name(params) {
  // 处理目录
  var titles = ['引言', '创建和销毁对象']

  var rootPath = path.resolve('./');

  var excludeFileNames = ['.git', '.vuepress', 'node_modules']

  var Contents = []

  var i = 0;
  var its = []

  var dirs = fs.readdirSync(rootPath)

  dirs.forEach(dirName => {
    if (excludeFileNames.indexOf(dirName) === -1) {
      var realDir = path.join(rootPath, dirName);
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
        i++;
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
}()

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
        href: '/favicon.ico'
      }
    ]
  ],
  serviceWorker: true,
  themeConfig: {
    nav: [{
      text: '章节',
      items: themeConf.themeItems
    }],
    serviceWorker: {
      updatePopup: {
        message: '发现新内容可用',
        buttonText: '刷新'
      }
    },
    displayAllHeaders: true,
    sidebar: themeConf.themeSidebar,
    lastUpdated: '上次更新',
    repo: 'CatchLife/effective-java-notes',
    repoLabel: 'GitHub',
    editLinks: true,
    editLinkText: '帮助我改正文中错误^_^'
  }
}