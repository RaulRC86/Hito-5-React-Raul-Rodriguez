

import "./index.css"
import  Header from "./components/Header";
import Navbar from "./components/Navbar"; 
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Cart from "./pages/Cart/Cart";
import Pizza from "./pages/Pizza";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  

  return (
    <>
      <Header/>
      <Navbar/>
      <Register/>
      <Login/>
      <Home/>
      <Cart/>
      <Pizza/>
      <Footer/>
    </>
  )
}

export default App
