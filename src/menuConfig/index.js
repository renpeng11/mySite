/*
 * title、category、name 表示菜单名的 key，与多语言切换对应
 */

const menus = [
  {
    title: "HOME",
    path: '/home'
  },
  {
    title: "GIT",
    path: '/git'
  },
  {
    title: "GATSBY",
    path: '/gatsby'
  },
  {
    title: "STYLED-COMPONENTS",
    path: "/styledComponents"
  },
  {
    title: "CSS",
    routes: [
      {
        name: "PSEUDO",
        path: "/css/fakeClass"
      },
      {
        name: "BOX",
        path: "/css/box"
      },
      {
        name: "GRADIENT",
        path: "/css/linearGradient"
      },
      {
        name: "BG",
        path: "/css/backgroundClip"
      },
    ]
  },
  {
    title: "VUE",
    routes: [
      {
        category: "VUE-FAMILY",
        components: [
          {
            name: "VUEX",
            path: "/vue/family/vuex"
          },
        ]
      },
    ]
  },
  {
    title: "REACT",
    routes: [
      {
        name: "CONTEXT",
        path: "/react/context"
      },
      {
        category: "HOOK",
        components: [
          {
            name: "USE-STATE",
            path: "/react/hook/useState"
          },
          {
            name: "USE-EFFECT",
            path: "/react/hook/useEffect"
          },
          {
            name: "USE-REF",
            path: "/react/hook/useRef"
          },
        ]
      },
    ]
  },
]

export default menus;