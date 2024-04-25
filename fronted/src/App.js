
import './App.css';
import Cart from './components/Cart';
import HomePage from './components/HomePage';
import Nav from './components/Nav';
import comlogo from './components/img/groclub.png';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
     <Nav  logo = {comlogo} />
     <Routes>
        <Route path="/" element={<HomePage />}>
        </Route>
        <Route path="/cart" element={<Cart />} ></Route>
      </Routes>
     </BrowserRouter>
  );
}

export default App;
