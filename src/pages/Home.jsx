import { useState, useEffect } from "react";
import { Link } from "react-router";
import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";
import SocialLinks from "../components/SocialLinks";
import {ArrowUpRight} from "lucide-react";


const Home = () => {
  const [chunkSize, setChunkSize] = useState(2);

    const chunkArray = (arr, size) => {
      const result = [];
      for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size))
      }
      return result;
    }

    useEffect(() => {
      const updateChunk = () => {
        setChunkSize(window.innerWidth < 1024 ? 2 : 3)
      };

      updateChunk();
      window.addEventListener("resize", updateChunk);
      return () => window.removeEventListener("resize", updateChunk);

    }, []);

    const projectChunks = chunkArray(projects, chunkSize);

    return (
      <main className="min-h-screen bg-zinc-950 text-white flex flex-col">
        <NavBar />
        <div className="px-8 mt-8 flex flex-col gap-4">
          <h1 className="w-64 text-6xl font-coiny hover:bg-linear-to-r from-(--coral-blue) to-(--faint-pink)
                          hover:bg-clip-text hover:text-transparent">Basics.</h1>
          <p className="font-inter text-stone-400">A collection of mini frontend-experiments.</p>
        </div>
        <div className=" border m-8"></div>
      <section className="w-full grid grid-col-1 xl:grid-cols-2 gap-8 px-8 mt-8">
          {projectChunks.map((chunk, index) => (
            <article 
              key={index}
              className="w-full h-96 grid grid-cols-1 md:grid-cols-2 auto-rows-fr md:grid-rows-2 gap-4
                                border border-amber-400 overflow-hidden p-4"
            >
              {chunk.map((project, index) => {
                const spanClass = index === 0
                ? "row-span-2 md:row-span-2 lg:row-span-2"
                : "row-span-2 md:row-span-2 lg:row-span-1";
                return (
                <div key={project.id} className={`border border-stone-600 hover:border-stone-400 p-2 ${spanClass}`}>
                  <ProjectCard project={project} />
                </div>
                );
                })}
            </article>
          ))}
      </section>
      <div className=" border m-8"></div>
      <footer className="w-full p-8 mt-20 flex justify-between items-end">
        <h3 className="font-coiny text-6xl bg-linear-to-r from-(--coral-blue) to-(--faint-pink)
                        bg-clip-text text-transparent">Basics.</h3>
        <div className="flex flex-col gap-4 relative text-stone-400">
          <Link to="/about" className="border p-4 flex hover:text-(--coral-blue)">
            About
            <ArrowUpRight />
          </Link>
          <SocialLinks 
            className="border hover:text-stone-100 p-4 flex cursor-pointer"
          />
        </div>
      </footer>
    </main>
  );
}

export default Home;