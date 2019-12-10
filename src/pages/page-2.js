import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
import MyBlogLayout from "../Layouts";
// import SEO from "../components/seo"

const SecondPage = () => (
  <MyBlogLayout>
    {/* <SEO title="Page two" /> */}
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </MyBlogLayout>
)

export default SecondPage
