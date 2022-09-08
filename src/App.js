import logo from './logo.svg';
import Home from './Screen/Home';
import Heder from './Component/Heder';
import './App.css';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Heder />
      <h1>Welcome to React Router! ok</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
