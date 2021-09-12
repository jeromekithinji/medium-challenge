import React from 'react'
import "./Author.scss";
import AuthorPic from "../../assets/images/AuthorPic.jpeg";



const Author = () => {
    return (
        <div className="author__container">
            <img src={AuthorPic} alt="Picture of author" className="author__img" />
            <div className="author__text">
                <h4 className="author__name">Author name</h4>
                <p className="author__date">Date and read time</p>
            </div>
            
        </div>
    )
}

export default Author
