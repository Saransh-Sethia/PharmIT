
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import React,{useState, useEffect} from 'react';
import CartList from './components/Cart/Cart';
import Navbar from './components/Navbar';

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (data) => {
    console.log(cart);
    setCart([...cart, {...data, quantity:1}]);
  }

  return (
    <div className="App">
      <Router>
      <Navbar count={cart.length}/>
        <Routes>
           <Route path='/' element={<Home addToCart={addToCart} />} />
           <Route path='/cart' element={<CartList cart={cart}/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
