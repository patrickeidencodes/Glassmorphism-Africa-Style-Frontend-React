// @ts-nocheck
import React from 'react'
import "./Header.css"
import blatt from "../assets/blatt.png"

export const Header = () => {
  return (
    
    <div className="container">
        <div className="container2">
            <div className="navbarContainer">
                <div className="name">
                    <div className="blattContainer">
                        <h1>AFRI<span>CAN</span></h1>
                        <img src={blatt} alt="Logo"width="20" height="30" style={{transform: "rotate(223deg) scaleX(-1)", marginLeft: "10px"}}/>
                    </div>
                    <div className="blattContainer" style={{marginTop: "-5px"}}>
                        <img src={blatt} alt="Logo" width="20" height="30" style={{transform: "rotate(401deg) scaleX(-1)"}}/>
                        <h1>J<span>OUR</span>NEY</h1>
                    </div>
                    <h4>YOU <span>CAN</span> LIVE <span>OUR</span> LIVE</h4>
                </div>
                <div className="navbar">
                    <h4>HOME</h4>
                    <h4>ABOUT</h4>
                    <h4>SERVICES</h4>
                    <h4>PROGRAMS</h4>
                    <h4>FAQ</h4>
                </div>
            </div>
        </div>
        <div className="glass">
            <div className="trips">
                <h3>AMAZING TRIPS</h3>
            </div>
            <div className="afri">
                <h1>AFRI</h1>
            </div>
        </div>
    </div>
  )
}
