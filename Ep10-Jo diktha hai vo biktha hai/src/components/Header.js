import logo from "../../assets/images/logo-main.png";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useOnline from "../utils/useOnline";


export const ImgComponent = ({ item, itemname }) => {
  return (
    <a href="/">
      {" "}
      <img className={itemname} alt={itemname} src={item} />{" "}
    </a>
  );
};

export const Title = () => {
  return(
    <ImgComponent item={logo} itemname={"logo ml-2.5 w-[70px]"}/>
  )
};

export const NavComponent = (user) => {
  const navigate = useNavigate();
  const isOnline = useOnline();

  const [isLoggedIn, setIsLoggedIn] = useState(user.isAuthenticated || false);
  
  
  const toggleLogin = () => {
    console.log("isLoggedIn", isLoggedIn);
    setIsLoggedIn(!isLoggedIn);
    let params = (!user.authenticated ) ? { state: { authenticated: false } } :  { state: { authenticated: false, msg: "You have logged out of Insta Food App. " } } ;
    navigate('/login', params );
  }

  return (
    <div className="">
    <ul className="flex max-w-2xl items-center justify-between mt-2.5 mr-2.5">
        <li className="p-2.5"> <Link to="/"><button className="nav--btn mob:w-12 mob:text-xs"> Home</button></Link></li>
        <li className="p-2.5"> <Link to="/about"><button className="nav--btn mob:w-12 mob:text-xs" > About</button></Link> </li>
        <li className="p-2.5"> <Link to="/instamart"><button className="nav--btn mob:w-12 mob:text-xs"> Instamart</button></Link></li>
        <li className="p-2.5"> <button className="nav--btn mob:w-12 mob:text-xs" onClick={() => {toggleLogin()}} > {isLoggedIn?  "Logout " : "Login " }  
          <span className={isOnline ? "text-green" : "text-red" }>●</span></button>
        </li>
      </ul> 
    </div>
  );
}

export const Header = (state) => {
  return (
    <div className="flex justify-between bg-white shadow fixed top-0 left-0 w-full h-[70px] z-50">
      <Title />
      <NavComponent {...state} />
    </div>
  );
};

export default Header;
