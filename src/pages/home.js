import React, { createContext } from "react";
import MyBlogLayout from "../Layouts";

const MyContext = createContext({});

class NewDiv extends React.Component {
  static contextType = MyContext;
  render() {
    const { name } = this.context;
    return (
      <div>{name}</div>
    )
  }
}

class OldDiv extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {
          (x) => <div>{x.name}</div>
        }
      </MyContext.Consumer>
    )
  }
}

const homePage = () => {
  return (
    <MyContext.Provider value={{ name: "我叫小美" }}>
      <MyBlogLayout>
        <NewDiv />
        <OldDiv />
      </MyBlogLayout>
    </MyContext.Provider>

  )
}
export default homePage;