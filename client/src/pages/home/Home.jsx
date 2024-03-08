import "./home.css"
import Navbar from "../components/navbar/Navbar";

const Home = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">reservationLogo</span>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
                </div>
            </div>
    )
}

export default Home;