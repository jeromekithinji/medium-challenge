import logo from './logo.svg';
import './App.scss';
import Nav from "./components/Nav/Nav";
import Headline from "./components/Headline/Headline";
import Article from "./components/Article/Article";
import SideNav from "./components/SideNav/SideNav";






function App() {
    return (
        <div className="App">
            <Nav />
            <main>
                <section className="left">
                    <Headline />
                    <h3 className="latest-title">latest</h3>
                    <Article />
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
