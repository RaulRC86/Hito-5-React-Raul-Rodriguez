import { Link } from "react-router-dom"

export const Navbar=() =>{
    return(
        <>
    <nav>
      <h4>Pizzería Mamma Mía!</h4>
      <Link to="/"><button>🍕Home</button></Link>
      <button>🔓Profile</button>
      <button>🔐Login</button>
      <button>🔒Logout</button>
      <button>🔐Register</button>
      <div className="totalCompra">
      <button>🛒Total: $</button>
    </div>
    </nav>
        </>
    )
}

