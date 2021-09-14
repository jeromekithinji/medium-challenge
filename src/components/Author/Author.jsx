import React from 'react'
import "./Author.scss";
import AuthorPic from "../../assets/images/AuthorPic.jpeg";



const Author = () => {
    return (
        <div className="author__container">
            <img src={AuthorPic} alt="Picture of author" className="author__img" />
            <div className="author__text">
                <h4 className="author__name">Robyn Banks</h4>
                <p className="author__date">Sep 11  4min read</p>
            </div>
            
        </div>
    )
}

export default Author
