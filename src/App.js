
import './App.css';

import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import NavBar from './component/navbars/NavBars';
import ShopCategory from './component/Pages/ShopCategory'
import Product from './component/Pages/Product'
import LoginSignup from './component/Pages/LoginSignup';
import Cart from './component/Pages/Cart';
import Shop from './component/Pages/Shop';
import Footer from './component/footer/Footer';
import banner_kids from './Assets/banner_kids.png'
import banner_mens from './Assets/banner_mens.png'
import banner_women from './Assets/banner_women.png'
import NavBars from './component/navbars/NavBars';

function App() {
  return (
    <div style={{
      overflow: "hidden"
    }}>






      <Router>
        <NavBar/>


        <Routes>
          <Route path='/' element={<Shop />} />




          <Route path='/mens' element={<ShopCategory banner={banner_mens} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={banner_women} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={banner_kids} category="kid" />} />

          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />

          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />



        </Routes>





      </Router>









      <Footer />
    </div>
  );
}

export default App;
