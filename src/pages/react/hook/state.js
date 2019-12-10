import React, { useState } from "react";

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

const statePage = () => {
  return (
    <MyBlogLayout>
      <div>我是state</div>
      <br></br>
      <Count />
    </MyBlogLayout>
  )
}
export default statePage;