import React from 'react';
import "./SideNavArticles.scss";


const SideNavArticles = (props) => {

    const {name, time} = props;

    return (
        <div className="sideNavArticles">
            <div className="sideNavArticles__article">
                <div className="article-info">
                    <h3 className="arcticle-name">{name}</h3>
                    <p className="article-time">{time}</p>
                </div>

                <div className="article-img">
                    image
                </div>
            </div>


        </div>
    )
}

export default SideNavArticles
