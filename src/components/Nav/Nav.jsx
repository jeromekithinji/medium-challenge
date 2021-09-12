import React from 'react'
import "./Nav.scss";
import Logo from "../../assets/images/mediumLogo.png";



const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav__left">
                <img src={Logo} className="nav__img " alt="Medium logo"/>
                <h1 className="nav__heading">Programming</h1>
            </div>
            <div className="nav__right">
                <p className="nav__link">Become a member</p>
                <h3 className="nav__link">Sign in</h3>
                <button className="nav__button">Get started</button>
            </div>
        </nav>
    )
}

export default Nav
