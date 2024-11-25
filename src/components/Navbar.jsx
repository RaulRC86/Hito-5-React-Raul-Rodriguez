import { Link } from "react-router-dom"

const Navbar=() =>{
    return(
        <>
    <nav>
      <h4>Pizzería Mamma Mía!</h4>
      <Link to="/"><button>🍕Home</button></Link>
      <button>🔓Profile</button>
      <Link to="/Login"><button>🔐Login</button></Link>
      <button>🔒Logout</button>
      <Link to="/Register"><button>🔐Register</button></Link>
      <div className="totalCompra">
      <button>🛒Total: $</button>
    </div>
    </nav>
        </>
    )
}

export  default Navbar