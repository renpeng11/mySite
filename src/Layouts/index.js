import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import styled from "styled-components";
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Layout } from "antd";
import MySider from "./MySider";
import MyHeader from "./Header";
import Footer from "./Footer";
import LayoutContext from "../context/LayoutContext";
import LanguageData from "../mobx/index";

const languageData = new LanguageData();

const { Header } = Layout;

const { Content } = Layout;

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
    setCurrentPath(window.location.pathname);
  }, [])

  // 切换语言
  function selectLanguage(type = "zh-CN") {
    languageData.changeLanguage(type)
  }

  return (
    <LayoutContext.Provider value={languageData.language}>
      <WrapLayoutStyle>
        <MyHeader data={data} event={selectLanguage} />
        <Layout style={{ background: "#fff" }}>
          <MySider selectedKeys={[currentPath]} />
          <ContentStyle>
            <div style={{ paddingLeft: 64 }}>
              <ContentHeader>{title}</ContentHeader>
              {children}
            </div>
            <Footer />
          </ContentStyle>

        </Layout>
      </WrapLayoutStyle>
    </LayoutContext.Provider>
  )
}

MyBlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default observer(MyBlogLayout);