import {FaGithub, FaLinkedinIn, FaEnvelope} from "react-icons/fa6";

const SocialLinks = ({ className = '' }) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      <a
        href="https://github.com/njokinjeri/basics" 
        target="_blank"
        rel="noopener noreferrer"
        title="Github"
        className="text-2xl hover:text-(--coral-blue)"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/njokinjeri/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="text-2xl hover:text-(--coral-blue)"
          >
            <FaLinkedinIn />
          </a>
          <a 
            href="mailto:njerinjoki33@gmail.com"
            title="Gmail"
            className="text-2xl hover:text-(--coral-blue)"
          >
            <FaEnvelope />
          </a>
    </div>
  )
}

export default SocialLinks;