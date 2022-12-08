import React from "react";
import "./Home.css"

const Home = ()=>{
    return (
        <>
        <div className="login-bar">
            <h1>Login With Soyam</h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Passwored" />
            <div className="login-btn">Login</div> 
            <div className="alt-login">
                <div className="google"></div>
                <div className="facebook"></div>
            </div>
        </div>
        </>
    )
}

export default Home;