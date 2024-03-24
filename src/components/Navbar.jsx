import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink to="/feed">Feed</NavLink></li>
                    <li><NavLink to="/notifications">Notifications</NavLink></li>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/compose/post">Post</NavLink></li>
                    <li><NavLink to="/settings/account">Settings</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}