import {FaGithub, FaLinkedinIn, FaEnvelope} from "react-icons/fa6";

const SocialLinks = ({ className = '' }) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      <a
        href="https://github.com/njokinjeri" 
        target="_blank"
        rel="noopener noreferrer"
        title="Github"
        className="text-xl"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/njokinjeri/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="text-xl"
          >
            <FaLinkedinIn />
          </a>
          <a 
            href="mailto:njerinjoki33@gmail.com"
            title="Gmail"
            className="text-xl"
          >
            <FaEnvelope />
          </a>
    </div>
  )
}

export default SocialLinks;