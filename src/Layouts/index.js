import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Layout } from "antd";
import MySider from "./MySider";
import MyHeader from "./Header";

const { Header } = Layout;

const { Footer, Content } = Layout;

const WrapLayoutStyle = styled(Layout)`
  & {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
  }
`
const ContentStyle = styled(Content)`
  & {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: auto;
  }
`

const ContentHeader = styled(Header)`
  background: #fff;
  padding: 0;
`

const FooterStyle = styled(Footer)`
  height: 64px;
`

const MyBlogLayout = ({ children, title }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const [currentPath, setCurrentPath] = useState("");
  useEffect(() => {
    console.log(window.location.pathname);
    setCurrentPath(window.location.pathname);
  }, [])

  return (
    <>
      <WrapLayoutStyle>
        <MyHeader data={data} />
        <Layout style={{ background: "#fff" }}>
          <MySider selectedKeys={[currentPath]} />
          <ContentStyle>
            <div style={{ paddingLeft: 64 }}>
              <ContentHeader>{title}</ContentHeader>
              {children}
            </div>
            <FooterStyle style={{ background: "black", color: "white", textAlign: "center" }}><div>亻壬 月 月 鸟</div></FooterStyle>
          </ContentStyle>

        </Layout>
      </WrapLayoutStyle>
    </>
  )
}

MyBlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default MyBlogLayout;