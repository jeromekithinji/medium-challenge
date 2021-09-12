import React from 'react'
import "./SideNav.scss";
import SideNavArticles from "../SideNavArticles/SideNavArticles";



const SideNav = () => {
    return (
        <div className="SideNav">

            <section className="topic">
                <h2>Technology</h2>
                <p>The download.</p>
                <button>Follow</button>
                <p>Text about the topic</p>
            </section>

            <section className="otherTopics">
                <h3 className="otherTopics__header">RELATED TOPICS</h3>
                <ul className="otherTopics__topics">
                    <li><a className="otherTopics__topic" href="https://www.google.com">Software engineering</a></li>
                    <li><a className="otherTopics__topic" href="https://www.google.com">Programming</a></li>
                    <li><a className="otherTopics__topic" href="https://www.google.com">Artificail Intelligence</a></li>
                    <li><a className="otherTopics__topic" href="https://www.google.com">Cryptocurrency</a></li>
                    <li><a className="otherTopics__topic" href="https://www.google.com">biotech</a></li>
                </ul>
            </section>

            <section className="topicArticles">
                <SideNavArticles />
            </section>
        </div>
    )
}

export default SideNav
