import {FaGithub} from "react-icons/fa6";
import {ArrowUpRight} from "lucide-react";

const ProjectCard = ({ project }) => {
    const {image, title, description, tags, liveLink, sourceCode } = project;
    return (
        <div className="w-full h-36 bg-emerald-300 p-4  overflow-hidden">
            <div className="">
                <img 
                    src={image} 
                    alt={title}
                    className="w-full h-full object-cover" 
                    />
            </div>
            <section className="">
                <h2>{title}</h2>
                <p>{description}</p>
                <div>
                    {tags?.map(tag => (
                        <span key={tag}> #{tag} </span>
                    ))}
                </div>
                <div>
                    <a className="hover:text-blue-300 " href={sourceCode} target="_blank" title="Code">
                        <FaGithub />
                    </a>
                    <a href={liveLink} target="_blank">
                        <ArrowUpRight className="hover:text-blue-300 fa-solid"/>
                    </a>
                </div>
            </section>
        </div>
     );
}

export default ProjectCard;