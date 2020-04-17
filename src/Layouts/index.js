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
import user from "../assets/icons/panda.png";
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

deckDeckGoHighlightElement();

const languageData = new LanguageData();

const { Header } = Layout;

const { Content } = Layout;

const WrapLayoutStyle = styled(Layout)`
  & {
    position: absolute;
    width: 100%;
    height: 100%;
    font-family: -apple-system,BlinkMacSystemFont,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif;
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
  height: unset;
  line-height: unset;
  margin-bottom: 20px;
  .user-wrap {
    display: flex;
    align-items: center;
    .user {
      width: 40px;
      height: 40px;
      margin-bottom: 0;
      margin-right: 20px;
    }
    .right-wrap {
      width: 25%;
      .user-right-top {
        font-weight: bold;
      }
      .user-right-bottom {
        color: gray;
        display: flex;
        justify-content: space-between;
      }
    }
  }
`

const MyBlogLayout = (props) => {
  const { children, title, date, timeToRead, tags } = props;
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
              {title && date && (<ContentHeader>
                <h1>{title}</h1>
                <div className="user-wrap">
                  <img className="user" src={user} alt="header"></img>
                  <div className="right-wrap">
                    <div className="user-right-top">
                      亻壬 月 月 鸟
                    </div>
                    <div className="user-right-bottom">
                      <span>{date}</span>
                      <span>阅读完这篇文章需要{timeToRead}分钟</span>
                    </div>
                  </div>
                </div>
              </ContentHeader>)}
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