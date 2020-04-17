import React, { useEffect } from "react";
import { graphql } from "gatsby";

import MyBlogLayout from "../Layouts";
import SEO from "../components/seo";


const AxiosPage = ({ data }) => {
  const { frontmatter: { title, description, date, tags }, html, timeToRead } = data.markdownRemark;
  const layoutProps = { date, tags, title, timeToRead };
  const seoProps = { title, description };
  useEffect(() => {
    document.getElementById("axios").innerHTML = html;
  }, []);
  return (
    <MyBlogLayout {...layoutProps}>
      <SEO {...seoProps} />
      <div id="axios"></div>
    </MyBlogLayout>
  )
}
export default AxiosPage;
export const query = graphql`
  query axiosQuery {
    markdownRemark(frontmatter: {layout: {eq: "axios"}}) {
      frontmatter {
        title
        tags
        description
        date
      }
      html
      timeToRead
    }
  }
`