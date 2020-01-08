import React from "react";
import MyBlogLayout from "../Layouts";
import WithLanguage from "../hoc/hoc"

const BlogContent = (props) => {
  const { content } = props;
  return (
    <div>
      {content.name}
    </div>
  )
}


const NewContent = WithLanguage("content")(BlogContent)

const homePage = () => {
  return (
    <MyBlogLayout>
      <NewContent />
    </MyBlogLayout>
  )
}
export default homePage;