import { Link } from "react-router";

const Logo = () => {
    return (
        <div>
            <Link to="/">
                <img
                    src="/logo/wall.svg" 
                    alt="Home" 
                    title="Home"
                    className="h-40 w-auto"/>
            </Link>
        </div>  
    );
}
export default Logo