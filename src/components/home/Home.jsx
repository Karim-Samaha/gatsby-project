import { Card } from "antd"
import React from "react"
import "./home.css"
import pillar1 from "../../images/pillar1.svg"
import cardIcon from "../../images/cardIcon.png"
import { Link } from "gatsby"
import {
  SketchOutlined,
  PlusOutlined,
  ImportOutlined,
  SettingOutlined,
} from "@ant-design/icons"
const { Meta } = Card

const Home = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  console.log(edges[0].node.frontmatter)
  return (
    <section className="cards">
      <div className="brandLogo">
        <h2>Get Support</h2>
        <SketchOutlined />
      </div>
      {edges.map(card => {
        const { id, frontmatter } = card.node
        return (
          <div key={id} className="cardContainer">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={pillar1} />}
            >
              <Meta
                title={frontmatter.title}
                description={frontmatter.description}
              />
              <div className="cardBottom">
                <h3 className="cardPrice">100 DTSU*</h3>
                <ImportOutlined />
                <PlusOutlined />
                {/* <div className="cardIcons">
                 
                </div> */}
              </div>
            </Card>
            <Link to={frontmatter.path}></Link>
          </div>
        )
      })}
      <ul>
        <li>
          <SettingOutlined />
          <SettingOutlined className="up" />
          Remaining DTSUs: <span>200</span>
        </li>
        <li>
          <SettingOutlined />
          <SettingOutlined className="up" />
          Consumed DTSUs: <span>350</span>
        </li>
      </ul>
    </section>
  )
}

export default Home
