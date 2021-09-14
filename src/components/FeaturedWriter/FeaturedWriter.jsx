import React from 'react'
import "./FeaturedWriter.scss";
import Articles from "../SideNavArticles/SideNavArticles";


import AuthorPic from "../../assets/images/AuthorPic.jpeg";




const FeaturedWriter = () => {


    return (
        <div className="featuredWriter">
            <div className="featuredWriter__left">
                <h2>Featured writer</h2>
                <div className="featuredWriter__writer">
                    <img src={AuthorPic} alt="Picture of author" className="featuredWriter__img" />
                    <div className="featuredWriter__text">
                        <h4 className="featuredWriter__name">Writer name</h4>
                        <p className="featuredWriter__info">Writer information</p>
                    </div>
                </div>
                <button>Follow</button>
            </div>

            <div className="featuredWriter__right">
                <Articles name="Learn C#?" time="5mins"/>
            </div>
        </div>
    )
}

export default FeaturedWriter
