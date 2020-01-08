import styled from "styled-components";
import React from "react";
import { Layout, Button } from "antd";
import LogoIcon from "../assets/icons/panda.png";

import WithLanguage from "../hoc/hoc";

const { Header } = Layout;

class HeaderContent extends React.Component {

  constructor(props) {
    super(props);
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage(type = "zh-CN") {
    return () => {
      this.props.event(type);
    }
  }

  render() {
    const { topMenu, className, data: { site: { siteMetadata: { title } } } } = this.props;
    return (
      <div className={className}>
        <div className="header-logo-wrap">
          <img className="icon-logo" src={LogoIcon} alt="logo"></img>
        </div>
        <Button onClick={this.changeLanguage()} >{topMenu.button1}</Button>
        <Button onClick={this.changeLanguage("en-US")} >{topMenu.button2}</Button>
        <div className="header-descriptions">{title ? topMenu.name : ""}</div>
      </div>
    )
  }
}

const WithLanguageHeader = WithLanguage("topMenu")(HeaderContent);

const HeaderContentStyle = styled(WithLanguageHeader)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 64px;
    .header-logo-wrap,
    .icon-logo {
      width: 50px;
      height: 50px;
    }
  `
const NewHeader = styled(Header)`
  padding: 0 20px;
  background: #fff;
  margin-bottom: 20px;
  box-shadow: 0 5px 5px rgba(245,245,245,0.8);
`

const MyHeader = ({ data, event }) => {
  return (
    <NewHeader>
      <HeaderContentStyle data={data} event={event} />
    </NewHeader>
  )
}

export default MyHeader;