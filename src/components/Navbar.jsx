import { Link } from "react-router-dom"

export const Navbar=() =>{
    return(
        <>
    <nav>
      <h4>Pizzería Mamma Mía!</h4>
      <Link to="/"><button>🍕Home</button></Link>
      <button>🔓Profile</button>
      <Link to="/src/components/Login.jsx"><button>🔐Login</button></Link>
      <button>🔒Logout</button>
      <Link to="/src/components/Register.jsx"><button>🔐Register</button></Link>
      <div className="totalCompra">
      <button>🛒Total: $</button>
    </div>
    </nav>
        </>
    )
}

