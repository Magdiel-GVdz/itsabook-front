import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <form>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />

            <button type="submit">Iniciar sesion</button>

            <Link to="/register">Todavia no tengo cuenta</Link>

        </form>
    )
}