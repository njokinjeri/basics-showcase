import { Link } from "react-router";

const Logo = () => {
    return (
        <div>
            <Link to="/">
                <img
                    src="/logo/ladybug.png" 
                    alt="Home" 
                    title="Home"
                    className="h-8 w-auto"/>
            </Link>
        </div>  
    );
}
export default Logo