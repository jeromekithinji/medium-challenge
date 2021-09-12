import React from 'react';
import "./SideNavArticles.scss";


const SideNavArticles = () => {
    return (
        <div className="sideNavArticles">
            <h3 className="sideNavArticles__header">popular in technology</h3>
            <div className="sideNavArticles__article">
                <div className="article-info">
                    <h2 className="arcticle-name">Article Name</h2>
                    <p className="article-time">Article time</p>
                </div>

                <div className="article-img">
                    image
                </div>
            </div>


        </div>
    )
}

export default SideNavArticles
