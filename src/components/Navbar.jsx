import { NavLink } from "react-router";
import Logo from "../components/Logo";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 mt-6">
        <Logo />
        <div className="flex space-evenly gap-8 px-6 text-stone-400">
          <NavLink  
            to="/about"
            className="font-inter text-xl hover:text-stone-100 hover:underline hover:underline-offset-8 hover:decoration-(--coral-blue)"
            >About</NavLink>
          <SocialLinks className="place-items-center"/>
        </div>
    </nav>
  )
}

export default Navbar