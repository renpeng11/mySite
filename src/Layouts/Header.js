import styled from "styled-components";
import React from "react";
import { Layout } from "antd";
import LogoIcon from "../assets/icons/panda.png";
const { Header } = Layout;

class HeaderContent extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { className, data: { site: { siteMetadata: { title } } } } = this.props;
    return (
      <div className={className}>
        <div className="header-logo-wrap">
          <img className="icon-logo" src={LogoIcon} alt="logo"></img>
        </div>
        <div className="header-descriptions">{title}</div>
      </div>
    )
  }
}

const HeaderContentStyle = styled(HeaderContent)`
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

const MyHeader = ({ data }) => {
  return (
    <NewHeader>
      <HeaderContentStyle data={data} />
    </NewHeader>
  )
}

export default MyHeader;