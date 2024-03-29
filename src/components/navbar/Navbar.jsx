import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">KETTELEHOF</span>
                <div className="navItems">
                    <button className="navButton">Registerieren</button>
                    <button className="navButton">Einlogen</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;