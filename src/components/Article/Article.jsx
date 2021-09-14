import React from 'react'
import "./Article.scss";
import ArticleImage from "../../assets/images/ArticleImage.jpeg"

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"></link>

const Article = (props) => {

    const {heading, brief, authorName, dateRead} = props;


    return (
        <div className="article">
            <div className="article__details">
                <h2>{heading}</h2>
                <h4>{brief}</h4>

                <div className="article__footer">
                    <div className="article__author">
                        <h4 className="author__name">{authorName}</h4>
                        <p className="author__date">{dateRead}</p>
                    </div>
                    {/* <i class="far fa-bookmark"></i> */}
                    <h4>Bookmark</h4>
                </div>

            </div>
            <div className="article__img">
                <img src={ArticleImage} alt="Picture of article" />
            </div>

        </div>
    )
}

export default Article
