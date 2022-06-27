import React from "react"
import "./cart.css"
import { CloseCircleOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import { useGlobalContext } from "../../context/context"
const Cart = () => {
  const { cartModule, handleCartModule } = useGlobalContext()
  return (
    <div className="cart" style={{ right: cartModule ? "0%" : "-40%" }}>
      <div className="cartHeader">
        <div className="cartLeft">
          <CloseCircleOutlined onClick={handleCartModule} />
          <span>Your Run Cart</span>
        </div>
        <div className="cartRight">
          <span>
            Requests in <br />
            your run cart
          </span>
          <span className="cartCount">0</span>
        </div>
      </div>
      <div className="emptyCartIcon">
        <ShoppingCartOutlined className="mainIcon" />
        <h3>Your run cart is empty!</h3>
        <h5>start add your requests here</h5>
      </div>
    </div>
  )
}

export default Cart
