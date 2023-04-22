import logo from "../../assets/images/logo-main.png";
import cart from "../../assets/images/cart.png";
import loggedIn from "../../assets/images/loggedin.png";
import loggedOut from "../../assets/images/loggedout.png";
import home from "../../assets/images/home.png";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export const ImgComponent = ({ item, itemname }) => {
  return (
    <a href="/">
      {" "}
      <img className={itemname} alt={itemname} src={item} />{" "}
    </a>
  );
};

export const Title = () => {
  return <ImgComponent item={logo} itemname={"logo"} />;
};

export const NavComponent = (user) => {
  const [isLoggedIn, setIsLoggedIn] = useState(user.authenticated || false);
  const navigate = useNavigate();
  console.log("In nav component", user);

  const toggleLogin = () => {
    console.log("isLoggedIn:", isLoggedIn);
    setIsLoggedIn(!isLoggedIn);
    let params = !user.authenticated
      ? { state: { authenticated: false } }
      : {
          state: {
            authenticated: false,
            msg: "You have logged out of Insta Food App. ",
          },
        };
    navigate("/login", params);
  };

  return (
    <div className="nav-items">
      <ul>
        <li>
          <Link to="/">
            <button className="nav-btn"> Home</button>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <button className="nav-btn"> About</button>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <button className="nav-btn"> Contact</button>
          </Link>
        </li>
        <li>
          <button
            className="nav-btn"
            onClick={() => {
              toggleLogin();
            }}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </li>
      </ul>
    </div>
  );
};

export const Header = (state) => {
  return (
    <div className="header">
      <Title />
      <NavComponent {...state} />
    </div>
  );
};

export default Header;
