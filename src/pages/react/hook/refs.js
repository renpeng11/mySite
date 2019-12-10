import React, { useState, useRef, createRef } from "react";

import MyBlogLayout from "../../../Layouts";

const Count = (props) => {
  const [count, setCount] = useState(0);
  console.log(props.rp.current);
  const myRefs = useRef();
  return (
    <div>
      {count}
      <button onClick={() => { setCount(count + 1) }}>点击</button>
    </div>
  )
}

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
    this.secondRef = createRef(1);
    this.getText = this.getText.bind(this);
  }
  getText() {
    this.myRef.current.go();
    console.log(this.secondRef.current);
  }
  render() {
    return (
      <>
        {/* <div ref={this.myRef}>亻壬 月 月 鸟</div> */}
        <Div ref={this.myRef}></Div>
        <Count ref={this.secondRef} />
        <button onClick={this.getText}>点击</button>
      </>
    )
  }
}

const refPage = () => {
  return (
    <MyBlogLayout>
      <div>ref</div>
      <MyRefs />
    </MyBlogLayout>
  )
}
export default refPage;