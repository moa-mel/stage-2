import React from "react"
import './App.css';
import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";


function App() {
  return (
    <div className="App">
     <Router>
    <Routes>
    <Route path="/" element={<Home/>} />
      <Route path="/movies/:id" element={<MovieDetail/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
