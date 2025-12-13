import Logo from "../components/Logo";
import SocialLinks from "../components/SocialLinks";
import {ArrowUpRight} from "lucide-react";


const About = () => {
  return (
    <article className="min-h-screen bg-zinc-950 text-white">
      <nav className="flex gap-4 justify-between px-6 py-12">
        <Logo /> 
        <SocialLinks 
          className="px-10 py-20 text-stone-500"
        />
      </nav>
      <div className="flex-1 px-8 py-4 w-full lg:w-5/6 flex flex-col gap-8 font-inter text-xl leading-9  text-stone-400">
        <p>
            <a 
              href="/" 
              className="p-3 font-coiny text-5xl bg-linear-to-r from-(--coral-blue) to-(--faint-pink) bg-clip-text text-transparent"
          >
          Basics
        </a> {" "} is a small showcase of the web experiments I built while sharpening my web foundations. 
        The projects range from simple layouts like a recipe page to more interactive pieces such as 
        a tic-tac-toe game. <br />Each project focuses on making something work, look right, or just exist as a hands-on exercise in HTML, CSS, and Vanilla JavaScript.
        </p>
        <div>
          <p>The projects are sourced from:</p>
          <ul>
            <li>
              <a href="https://www.frontendmentor.io/" target="_blank" rel="noopener noreferrer" className="flex text-stone-200 hover:text-(--coral-blue)"
              >
                Frontend Mentor
                <ArrowUpRight />
              </a>
            </li>
            <li>
              <a href="https://devchallenges.io/" target="_blank" rel="noopener noreferrer" className="flex text-stone-200 hover:text-(--coral-blue)"
              >
                Dev Challenges
                <ArrowUpRight />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}

export default About