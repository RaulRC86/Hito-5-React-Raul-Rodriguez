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

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
      {/* <Pizza/> */}
      <Footer/>
    </>
  )
}

export default App
