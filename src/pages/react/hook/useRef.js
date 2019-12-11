import React, { createRef } from "react";

import MyBlogLayout from "../../../Layouts";

class Div extends React.Component {
  constructor(props) {
    super(props);
    this.go = this.go.bind(this);
  }
  go() {
    console.log("我被执行了");
  }
  render() {
    return (
      <div>我是div</div>
    )
  }
}

class MyRefs extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = createRef(0);
    this.getText = this.getText.bind(this);
  }
  getText() {
    this.myRef.current.go();
  }
  render() {
    return (
      <>
        <Div ref={this.myRef}></Div>
        <button onClick={this.getText}>点击</button>
      </>
    )
  }
}

const refPage = () => {
  return (
    <MyBlogLayout title="Ref">
      <MyRefs />
    </MyBlogLayout>
  )
}
export default refPage;