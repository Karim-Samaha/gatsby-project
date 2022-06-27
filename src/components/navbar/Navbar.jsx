import React from "react"
import "./navbar.css"
import person1 from "../../images/person1.png"
import person2 from "../../images/person2.png"
import person3 from "../../images/person3.png"
import person4 from "../../images/person4.png"
import navlogo1 from "../../images/navlogo1.png"
import navlogo2 from "../../images/navlogo2.png"
import { useGlobalContext } from "../../context/context"

const Navbar = () => {
  const { handleCartModule, handleKitchenModule } = useGlobalContext()

  return (
    <nav>
      <div className="left">
        <h1>Welcome to iCloudReady!</h1>
        <h4>
          You have started your <span>30 days trial</span>
        </h4>
      </div>
      <div className="center">
        <div className="imgContainer">
          <div className="wrapper">
            <img src={person1} alt="Person" />
            <img src={person2} alt="Person" />
            <img src={person3} alt="Person" />
            <img src={person4} alt="Person" />
            <span className="morePeople">+3</span>
          </div>
        </div>
        <div className="text">
          <h3>Our architects are here to help</h3>
          <h4>Book a free session</h4>
        </div>
      </div>
      <div className="right">
        <div onClick={handleCartModule} className="iconContainer">
          <img src={navlogo1} alt="Logo" />
          <span>2</span>
        </div>
        <div onClick={handleKitchenModule} className="iconContainer">
          <img src={navlogo2} alt="Logo" />
          <span>2</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
