const menus = [
  {
    title: "Home",
    // icon:"",
    path: '/home'
  },
  {
    title: "school",
    // icon:"",
    path: '/school'
  },
  {
    title: "company",
    // icon:"",
    path: '/company'
  },
  {
    title: "hospital",
    // icon:"",
    path: '/hospital'
  },
  {
    title: "content",
    // icon:"",
    routes: [
      {
        category: "内容1",
        components: [
          {
            name: "内容1.1",
            path: "/contents1.1"
          },
          {
            name: "内容1.2",
            path: "/contents1.2"
          },
        ]
      },
      {
        category: "内容2",
        components: [
          {
            name: "内容2.1",
            path: "/contents2.1"
          },
          {
            name: "内容2.2",
            path: "/contents2.2"
          },
        ]
      },
      {
        category: "内容3",
        components: [
          {
            name: "内容3.1",
            path: "/contents3.1"
          },
          {
            name: "内容3.2",
            path: "/contents3.2"
          },
        ]
      }
    ]
  },
  {
    title: "react",
    // icon:"",
    routes: [
      {
        name: "Context",
        path: "/react/context"
      },
      {
        category: "Hook",
        components: [
          {
            name: "State",
            path: "/react/hook/state"
          },
          {
            name: "effect",
            path: "/react/hook/effect"
          },
          {
            name: "refs",
            path: "/react/hook/refs"
          },
        ]
      },
      {
        category: "内容22",
        components: [
          {
            name: "内容22.1",
            path: "/contents22.1"
          },
          {
            name: "内容22.2",
            path: "/contents22.2"
          },
        ]
      },
      {
        category: "内容23",
        components: [
          {
            name: "内容23.1",
            path: "/contents23.1"
          },
          {
            name: "内容23.2",
            path: "/contents23.2"
          },
        ]
      }
    ]
  },
]

export default menus;