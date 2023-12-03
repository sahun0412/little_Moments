
import './App.css';
import Banner from './components/banner';
import Contact from './components/contact';
import Nav from './components/nav';
import Overview from './components/overview';
import PreFooter from './components/preFooter';
import Rating from './components/rating';
import Testimonial from './components/testimonial';
import Cards from './components/cards';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ paddingRight: "50px" }}>
        <Nav />
      </header>

      <section>
        <main>
            <Banner />
            <Contact />

            <Overview/>

            <Rating />

            <Testimonial />

            <Cards />
            
        </main>
      </section>

      <footer>
        <PreFooter />
      </footer>
    </div>
  );
}

export default App;
