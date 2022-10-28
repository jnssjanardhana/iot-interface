import './App.css';
import Values from './components/Values';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<Header />} />
          <Route path = "/values" element = {<Values />} />
          <Route path = "/graph" element = {<Values />} />
        </Routes>
      </Router>
      
      {/* <Values /> */}
    </div>
  );
}

export default App;
