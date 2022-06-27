import React from "react"
import { Layout } from "antd"
import Navbar from "./navbar/Navbar"
import Sidebar from "./sidebar/Sidebar"
import FooterBar from "./footer/footer"
import Cart from "./cart/Cart"
import KitchenModule from "./kitchenModule/KitchenModule"
const { Content, Footer, Sider } = Layout

const AntLayout = ({ children }) => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider width={40}>
        <Sidebar />
      </Sider>
      <Layout className="site-layout">
        <Navbar />
        <Content
          style={{
            margin: "0 0",
          }}
        >
          <Cart />
          <KitchenModule />
          <main>{children}</main>
          <Footer>
            <FooterBar />
          </Footer>
        </Content>
      </Layout>
    </Layout>
  )
}

export default AntLayout
