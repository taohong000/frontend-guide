module.exports = {
  lang: 'zh-CN',
  title: '成功人力前端开发规范',

  themeConfig: {
    sidebar: [
      {
        text: 'HTML 规范',
        children: ['/html/code.md','/html/note.md'],
      },
      {
        text: 'CSS 规范',
        children: ['/css/code.md','/css/note.md','/css/sass.md'],
      },
      {
        text: '命名规范',
        children: ['/name/dir.md','/name/image.md','/name/htmlcss.md','/name/classname.md'],
      },
      {
        text: 'JS 规范',
        children: ['/js/language.md','/js/code.md', '/js/vue.md'],
      },
    ],
  },
  plugins: [
    [
      '@vuepress/plugin-search',
    ],
  ],
}