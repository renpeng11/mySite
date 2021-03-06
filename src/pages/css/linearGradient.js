import React, { useEffect } from "react";

import MyBlogLayout from "../../Layouts";
import SEO from "../../components/seo";
import { graphql } from "gatsby";

const LinearGradientPage = ({ data }) => {
  const { frontmatter: { title, description, date, tags }, html, timeToRead } = data.markdownRemark;
  const layoutProps = { date, tags, title, timeToRead };
  const seoProps = { title, description };
  useEffect(() => {
    document.getElementById("gradient").innerHTML = html;
  }, []);
  return (
    <MyBlogLayout {...layoutProps}>
      <SEO {...seoProps} />
      <div id="gradient"></div>
    </MyBlogLayout>
  )
}
export default LinearGradientPage;
export const query = graphql`
  query gradientQuery {
    markdownRemark(frontmatter: {layout: {eq: "gradient"}}) {
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