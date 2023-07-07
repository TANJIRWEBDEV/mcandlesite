import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__item1">
          <a href="#">ABOUT US</a>
          <a href="#">SHOP</a>
          <a href="#">CART</a>
        </div>
        <div className="navbar__item2">
          <a href="#">WWW.WICKEDWICKS.COM</a>
        </div>
        <div className="navbar__item3">
          <a href="#">SEARCH</a>
          <a href="#">LEGALITY</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
