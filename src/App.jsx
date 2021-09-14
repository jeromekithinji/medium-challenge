import logo from './logo.svg';
import './App.scss';
import Nav from "./components/Nav/Nav";
import Headline from "./components/Headline/Headline";
import Article from "./components/Article/Article";
import SideNav from "./components/SideNav/SideNav";
import FeaturedWriter from "./components/FeaturedWriter/FeaturedWriter";







function App() {
    return (
        <div className="App">
            <Nav />
            <main>
                <section className="left">
                    <Headline />
                    <h3 className="latest-title">latest</h3>
                    <Article heading="Mac is Better - Here's Why" brief="Mac OS is significantly bettter than other systems" authorName="Petra Fried" dateRead="Sep 13 . 2 min read"/>
                    <FeaturedWriter />
                    <Article heading="Mac is Better - Here's Why" brief="Mac OS is significantly bettter than other systems" authorName="Willie Wonka" dateRead="Sep 13 . 2 min read"/>
                </section>
                <section className="right">
                    <SideNav />
                    {/* <p>RIGHT NAV</p> */}
                </section>
            </main>



            {/* <header className="App-header">
            </header> */}
        </div>
    );
}

export default App;
