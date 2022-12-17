import './App.css';
import Home from './components/Home/Home';
import Articles from './components/Articles/Articles';
import Article from './components/Article/Article';
import About from './components/About/About';


function App() {
  return (
    <div className="App">
      <h1>This Darn Ghost</h1>
      <div id="page-body">Welcome to this darn ghost!
        <Home />
        <About />
        <Articles />
        <Article />
      </div>
    </div>
  );
}

export default App;
