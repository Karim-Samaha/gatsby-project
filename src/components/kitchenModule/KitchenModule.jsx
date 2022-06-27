import React from "react"
import "./kitchenModule.css"
import {
  CloseCircleOutlined,
  CloudFilled,
  CodeSandboxOutlined,
} from "@ant-design/icons"
import { Alert } from "antd"
import { Button } from "antd"
import { useGlobalContext } from "../../context/context"
const KitchenModule = () => {
  const { kitchenModule, handleKitchenModule } = useGlobalContext()
  return (
    <div
      className="kitchenModule"
      style={{ right: kitchenModule ? "0%" : "-40%" }}
    >
      <div className="kitchenHeader">
        <div className="kitchenLeft">
          <CloseCircleOutlined onClick={handleKitchenModule} />
          <span>Your Run Kitchen</span>
        </div>
        <div className="kitchenRight">
          <span>
            Requests in <br /> your run kitchen
          </span>
          <span className="kitchenCount">3</span>
        </div>
      </div>
      <div className="kitchenInfo">
        <span>Requests</span>
        <div className="infoType">
          <span>Status</span>
          <span>O/P Link</span>
        </div>
      </div>
      <div className="kitchenItems">
        <div className="kitchenItem">
          <CodeSandboxOutlined className="kitchenItemIcon" />
          <div className="kitchenItemLeft">
            <h4>Knowledge Transfer</h4>
            <h5>Private Trainig, 12DTSU</h5>
          </div>
          <div className="kitchenItemRight">
            <div
              style={{ backgroundColor: "#ff000033" }}
              className="bullerIcon"
            >
              <span style={{ backgroundColor: "green" }}></span>
            </div>
            <CloudFilled />
          </div>
        </div>
        <div className="kitchenItem">
          <CodeSandboxOutlined className="kitchenItemIcon" />
          <div className="kitchenItemLeft">
            <h4>Knowledge Transfer</h4>
            <h5>Private Trainig, 12DTSU</h5>
          </div>
          <div className="kitchenItemRight">
            <div
              style={{ backgroundColor: "#ffff0033" }}
              className="bullerIcon"
            >
              <span style={{ backgroundColor: "yellow" }}></span>
            </div>
            <CloudFilled />
          </div>
        </div>
        <div className="kitchenItem">
          <CodeSandboxOutlined className="kitchenItemIcon" />
          <div className="kitchenItemLeft">
            <h4>Knowledge Transfer</h4>
            <h5>Private Trainig, 12DTSU</h5>
          </div>
          <div className="kitchenItemRight">
            <div
              style={{ backgroundColor: "#0000ff33" }}
              className="bullerIcon"
            >
              <span style={{ backgroundColor: "blue" }}></span>
            </div>
            <CloudFilled />
          </div>
        </div>
      </div>
      <div className="priceInfo">
        <div className="priceInfoItem">
          <h4>Units Under Processing</h4>
          <h3>12 DTSUs</h3>
        </div>
        <div className="priceInfoItem">
          <h4>Units Completed</h4>
          <h3>12 DTSUs</h3>
        </div>
        <div className="finalPrice">
          <h4>Total Units Completed</h4>
          <h3>12 DTSUs</h3>
        </div>
      </div>
      <Button type="primary" block>
        Update Status
      </Button>
      <Button type="primary" block ghost>
        Back to Your Dashboard
      </Button>
      <Alert
        message="Some requests can take a week or more to be delivered and may be subject to "
        type="info"
        showIcon
        description="dependency resolutions related to your system of records version"
      />
    </div>
  )
}

export default KitchenModule
