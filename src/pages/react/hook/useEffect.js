import React, { useState, useEffect } from "react";

import MyBlogLayout from "../../../Layouts";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <button onClick={() => { setCount(count + 1) }}>点击</button>
    </div>
  )
}

const MyEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("副作用执行")
    // x++;
  }, [count]);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => { setCount(count + 1) }}>点击</button>
    </>
  )
}

const effectPage = () => {
  return (
    <MyBlogLayout title="useEffect">
      <div>useEffect 可以在组件渲染后实现各种不同的副作用。有些副作用可能需要清除，所以需要返回一个函数</div>
      <Count />
      <MyEffect />
    </MyBlogLayout>
  )
}
export default effectPage;