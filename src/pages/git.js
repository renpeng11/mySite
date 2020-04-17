import React from "react";
import { Button } from "antd";
import MyBlogLayout from "../Layouts";
import styled, { css, keyframes } from "styled-components";

const Div = styled.div`
  background: red;
`
const ButtonStyle = styled(Button)`
  &{
    &.ant-btn-primary {
      background: red;
    }
  }
`
const MyDiv = ({ className }) => {
  return (
    <div className={className}>任鹏</div>
  )
}
const StyleCss = css`
  ul:not(&:first-child) {

  }
  border: 2px solid red;
`
const DongHua = keyframes`
  0% {
    width: 50px;
    height: 50px;
  }
  100% {
    width: 200px;
    height: 200px;
  }
`

const MyDivStyle = styled(MyDiv)`
  background: yellow;
  width: 50px;
  height: 50px;
  /* ${StyleCss} */
  &:hover {
    animation: ${DongHua} 2s ease-out;
  }
  ${(props) => {
    if (props.name) {
      return css`
        border: 2px solid red;
      `
    }
  }}
`


const gitPage = () => {
  return (
    <MyBlogLayout title="git">
      <Div>DIV</Div>
      <ButtonStyle type="primary">点击</ButtonStyle>
      <MyDiv />
      <MyDivStyle name="任鹏" />
    </MyBlogLayout>
  )
}
export default gitPage;