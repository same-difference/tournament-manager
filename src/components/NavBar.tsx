import { Outlet, Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/login"><li>Login</li></Link>
            <Link to="/dashboard"><li>Dashboard</li></Link>
            <Link to="/tourney"><li>Tourney</li></Link>
            <Link to="/match"><li>Match</li></Link>
        </ul>
        <Outlet />
        </>

    );
}