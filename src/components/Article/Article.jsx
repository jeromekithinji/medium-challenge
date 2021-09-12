import React from 'react'
import "./Article.scss";
import ArticleImage from "../../assets/images/ArticleImage.jpeg"

const Article = () => {
    return (
        <div className="article">
            <div className="article__details">
                <h2>Article Heading</h2>
                <h4>article brief</h4>

                <div className="article__footer">
                    <div className="article__author">
                        <h4 className="author__name">Author name</h4>
                        <p className="author__date">Date and read time</p>
                    </div>
                    <p>Bookmark</p>
                </div>

            </div>
            <div className="article__img">
                Image
            </div>

        </div>
    )
}

export default Article
