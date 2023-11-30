
import './App.css';
import Banner from './components/banner';
import Contact from './components/contact';
import Nav from './components/nav';
import PreFooter from './components/preFooter';

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
        </main>
      </section>

      <footer>
        <PreFooter />
      </footer>
    </div>
  );
}

export default App;
