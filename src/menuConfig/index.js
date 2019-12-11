const menus = [
  {
    title: "Home",
    path: '/home'
  },
  {
    title: "git",
    path: '/git'
  },
  {
    title: "Gatsby",
    path: '/gatsby'
  },
  {
    title: "styled-components",
    path: "/styledComponents"
  },
  {
    title: "CSS",
    routes: [
      {
        name: "伪类&伪元素",
        path: "/css/fakeClass"
      },
      {
        name: "盒模型",
        path: "/css/box"
      },
      {
        name: "渐变",
        path: "/css/linearGradient"
      },
      {
        name: "background-clip",
        path: "/css/backgroundClip"
      },
    ]
  },
  {
    title: "Vue",
    routes: [
      {
        category: "Vue 全家桶",
        components: [
          {
            name: "Vuex",
            path: "/vue/family/vuex"
          },
        ]
      },
    ]
  },
  {
    title: "react",
    routes: [
      {
        name: "Context",
        path: "/react/context"
      },
      {
        category: "Hook",
        components: [
          {
            name: "useState",
            path: "/react/hook/useState"
          },
          {
            name: "useEffect",
            path: "/react/hook/useEffect"
          },
          {
            name: "useRef",
            path: "/react/hook/useRef"
          },
        ]
      },
    ]
  },
]

export default menus;