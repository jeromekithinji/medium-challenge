import React from 'react'
import "./Headline.scss";
import Author from "../Author/Author";
import HeadlinePic from "../../assets/images/HeadlineImage.jpeg";


const Headline = () => {
    return (
        <div className="headline__section">
            <img className="headline__img" src={HeadlinePic} alt="Article picture" />
            <h1>Using the Waste Heat of Computers</h1>
            <p>The heat produced by big data centers mostly goes to waste but could be used productively instead</p>
            <Author />
        </div>
    )
}

export default Headline
