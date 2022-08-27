import logo from "./logo.png";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="book"/>
        </main>
        <footer className="App-footer">
          <small>
          Coded by Yulia Kashichichenko
          <a href="https://github.com/YDaKota/dictionary-project" target="_blank" rel="noopener noreferrer"> Github</a>
          </small>
        </footer>
      </div>
    </div>
  );
}


