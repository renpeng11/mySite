import React from "react";
import LayoutContext from "../context/LayoutContext";

// 将语言文件分类加载，从而降低内存的占用

const WithLanguage = name => Component => {
  return (props) => (
    <LayoutContext.Consumer>
      {(value) => {
        switch (name) {
          case "topMenu":
            return (<Component topMenu={value.topMenu} {...props} />)
          case "leftMenu":
            return (<Component leftMenu={value.leftMenu} {...props} />)
          case "content":
            return (<Component content={value.content} {...props} />)
          case "footer":
            return (<Component footer={value.footer} {...props} />)
          default:
            break
        }
      }}
    </LayoutContext.Consumer>
  )
}

export default WithLanguage;