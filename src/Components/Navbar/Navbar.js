import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <h1>
          <h1 className="logo">Meal Finder</h1>
        </h1>
        <div className="navContainer">
          {["Home", "About", "Contact"].map((nav) => (
            <div>
              <ul className="list">
                <li className="link">{nav}</li>
              </ul>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
