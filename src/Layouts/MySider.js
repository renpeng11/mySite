import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "gatsby";

import menuList from "../menuConfig";

const { Sider } = Layout;
const { SubMenu } = Menu;

const MySider = ({ data: { site: { siteMetadata: { title } } } }) => {
  return (
    <Sider style={{ height: "100%" }}>
      <Menu
        defaultOpenKeys={["content"]}
        defaultSelectedKeys={["0"]}
        mode="inline"
      >
        {
          menuList.map((item, index) => {
            if (item.routes) {
              return (
                <SubMenu
                  key={item.title}
                  title={item.title}
                >
                  {item.routes.map((v, i) => {
                    if (v.category) {
                      return (
                        <Menu.ItemGroup
                          title={v.category}
                          key={`${index}-${i}`}
                        >
                          {v.components.map(vv => (
                            <Menu.Item key={vv.path}><Link to={vv.path}>{vv.name}</Link></Menu.Item>
                          ))}
                        </Menu.ItemGroup>
                      )
                    } else {
                      return (
                        <Menu.Item key={v.path}>
                          <Link to={v.path}>{v.name}</Link>
                        </Menu.Item>
                      )
                    }

                  })}
                </SubMenu>
              )
            } else {
              return (
                <Menu.Item
                  key={index}
                >
                  <Link to={item.path}>{item.title}</Link>
                </Menu.Item>
              )
            }
          })
        }
      </Menu>
    </Sider>
  )
}

export default MySider;