import React from 'react'
import "./Headline.scss";
import Author from "../Author/Author";
import HeadlinePic from "../../assets/images/HeadlineImage.jpeg";


const Headline = () => {
    return (
        <div className="headline__section">
            <img className="headline__img" src={HeadlinePic} alt="Article picture" />
            <h1>Article heading</h1>
            <p>Brief</p>
            <Author />
        </div>
    )
}

export default Headline
