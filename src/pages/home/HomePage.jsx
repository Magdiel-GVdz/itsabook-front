

import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/login">Iniciar sesion</Link>
            <Link to="/register">Crear cuenta</Link>
            
        </div>
    )
}