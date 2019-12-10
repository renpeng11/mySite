/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Layout } from "antd";
import MySider from "./MySider";

const { Header, Footer, Content } = Layout;

const MyBlogLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Layout>
        <Header>header</Header>
        <Layout>
          <MySider data={data} />
          <Layout>
            <Content>
              {children}
            </Content>
            <Footer style={{ background: "black", color: "white", textAlign: "center" }}><div>亻壬 月 月 鸟</div></Footer>
          </Layout>
        </Layout>
      </Layout>
    </>
  )
}

MyBlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default MyBlogLayout;