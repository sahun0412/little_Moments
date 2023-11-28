
import './App.css';
import Nav from './components/nav';
import PreFooter from './components/preFooter';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{paddingRight:"50px"}}>
       <Nav />
      </header>

      <footer>
        <PreFooter/>
      </footer>
    </div>
  );
}

export default App;
