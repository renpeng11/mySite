import React from "react"
import styled from "styled-components";
import Logo from "../assets/icons/panda.png";

const Image = ({ className }) => (
  <div className={className}>
    <img src={Logo} alt="logo" />
  </div>
)

const ImageStyle = styled(Image)`
  & {
    img {
      width: 200px;
      height: 200px;
    }
  }
`

export default ImageStyle
