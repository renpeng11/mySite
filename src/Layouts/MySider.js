import React from "react";
import styled from "styled-components";
import { Layout, Menu } from "antd";
import { Link } from "gatsby";

import WithLanguage from "../hoc/hoc";
import menuList from "../menuConfig";

const { Sider } = Layout;
const { SubMenu } = Menu;

const SiderStyle = styled(Sider)`
  & {
    background: #fff;
    height: 100%;
    overflow-y: auto;
  }
`

const MySider = ({ selectedKeys, leftMenu }) => {
  return (
    <SiderStyle style={{ height: "100%" }}>
      <Menu defaultOpenKeys={["CSS", "react"]} selectedKeys={selectedKeys} mode="inline">
        {menuList.map((item) => {
          if (item.routes) {
            return (<SubMenu key={item.title} title={leftMenu[item.title]}>
              {item.routes.map((v) => {
                if (v.category) {
                  return (
                    <Menu.ItemGroup title={leftMenu[v.category]} key={v.category}>
                      {v.components.map(vv => (
                        <Menu.Item key={vv.path}><Link to={vv.path}>{leftMenu[vv.name]}</Link></Menu.Item>
                      ))}
                    </Menu.ItemGroup>
                  )
                } else { return (<Menu.Item key={v.path}><Link to={v.path}>{leftMenu[v.name]}</Link></Menu.Item>) }
              })}
            </SubMenu>)
          } else { return (<Menu.Item key={item.path}><Link to={item.path}>{leftMenu[item.title]}</Link></Menu.Item>) }
        })}
      </Menu>
    </SiderStyle>
  )
}

export default WithLanguage("leftMenu")(MySider);