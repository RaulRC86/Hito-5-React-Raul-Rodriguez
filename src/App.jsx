import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css"
import  Header from "./components/Header";
import Navbar from "./components/Navbar"; 
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Cart from "./pages/Cart/Cart";
// import Pizza from "./pages/Pizza";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Pizza  from "./pages/Pizza"

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/pizza/p001' element={<Pizza/>}/>
        <Route path='*' element={<h1>Página no encontrada</h1>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
