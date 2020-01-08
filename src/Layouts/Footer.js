import React from "react";
import styled from "styled-components";
import { Layout } from "antd";

import WithLanguage from "../hoc/hoc"

const { Footer } = Layout;

const FooterStyle = styled(Footer)`
  &.ant-layout-footer {
    height: 64px;
    background: black;
    color: white;
    text-align: center;
  }
  
`

const MyFooter = ({ footer }) => {
  return (
    <FooterStyle>
      <div>{footer.name}</div>
    </FooterStyle>
  )
}

export default WithLanguage("footer")(MyFooter);