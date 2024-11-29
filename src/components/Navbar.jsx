import { Link } from "react-router-dom"

const Navbar=() =>{
    return(
        <>
    <nav>
      <h4>Pizzería Mamma Mía!</h4>
      <Link to="/"><button>🍕Home</button></Link>
      <Link to="/profile"><button>🔓Profile</button></Link>
      <Link to="/Login"><button>🔐Login</button></Link>
      <button>🔒Logout</button>
      <Link to="/Register"><button>🔐Register</button></Link>
      <div className="totalCompra">
      <Link to="/Cart"><button>🛒Total: $</button></Link>
    </div>
    </nav>
        </>
    )
}

export  default Navbar