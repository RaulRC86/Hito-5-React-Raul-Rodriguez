import { Link } from "react-router-dom"

const Profile = () => {
  return (
    <>
    <div className="perfil">
    <img src="../../assets/img/usuario.jpg" alt="foto de usuario" className="usuario" />
    <h1>Raúl Rodríguez Clavero</h1>
    <p>correo: raulrodriguez@gmail.com</p>
    <Link to="/" className="btn btn-light">🔒Logout</Link>
    </div>
    </>
  )
}

export default Profile