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
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [{
      text: '章节',
      items: [{
          text: '1.引言',
          link: '/1.引言/'
        },
        {
          text: '2.创建和销毁对象',
          link: '/2.创建和销毁对象/2.1考虑用静态工厂方法代替构造器'
        }
      ]
    }],
    displayAllHeaders: true,
    sidebar: {
      '/1.引言/': ['', '1.1引言'],
      '/2.创建和销毁对象/': ['2.1考虑用静态工厂方法代替构造器', '2.2Test']
    },
    lastUpdated: '最后更新',
    repo: 'https://gitee.com/catchlife/effective-java-notes.git',
    repoLabel: 'Git',
    editLinks: false,
    editLinkText: '帮助我改正文中错误^_^'
  }
}