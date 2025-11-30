import {FaGithub} from "react-icons/fa6";
import {ArrowUpRight} from "lucide-react";

const ProjectCard = ({ project }) => {
    const {image, title, tags, liveLink} = project;
    return (
        <div className="w-full h-full flex flex-col gap-2 p-2 overflow-hidden">
            <div className="h-5/6 lg:h-4/5">
                <img 
                    src={image} 
                    alt={title}
                    className="w-full h-full object-cover cursor-pointer" 
                    />
            </div>
            <section className="flex justify-between">
                <h2 className="font-montserrat text-base text-stone-300">{title}</h2>
                <div className="hidden">
                    {tags?.map(tag => (
                        <span key={tag}> #{tag} </span>
                    ))}
                </div>
                <div>
                    <a href={liveLink} target="_blank">
                        <ArrowUpRight className="hover:text-(--coral-blue) fa-solid"/>
                    </a>
                </div>
            </section>
        </div>
     );
}

export default ProjectCard;