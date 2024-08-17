import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav
      style={{
        backgroundColor: "hsl(0, 0%, 11%)",
        padding: "20px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "20px",
        alignItems: "center",
        
        
  
        
      }}
    >
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;