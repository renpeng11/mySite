import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello my friend</h1>
    <p>Welcome to my blog</p>
    <p>Now you can browse</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/home">点击这里即可进入</Link>
  </Layout>
)

export default IndexPage
