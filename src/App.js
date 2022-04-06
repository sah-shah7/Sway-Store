import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import HomePage from '../src/pages/home/HomePage.js'
import NavBar from "./components/NavBar/NavBar";
import Mockman from 'mockman-js';


function App() {
  return (
    <div className="App">
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/mock" element={<Mockman />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
