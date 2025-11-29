import { NavLink } from "react-router";
import Logo from "../components/Logo";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 mt-6">
        <Logo />
        <div className="flex space-evenly gap-8 px-6">
          <NavLink  
            to="/about"
            className="text-xl"
            >About</NavLink>
          <SocialLinks className="place-items-center"/>
        </div>
    </nav>
  )
}

export default Navbar