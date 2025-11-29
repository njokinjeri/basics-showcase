import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json"

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
        <Navbar />
        <div className="px-8 mt-8 flex flex-col gap-4">
          <h1 className="text-5xl font-coiny">Basics</h1>
          <p className="font-inter text-stone-400">A collection of mini frontend-experiments.</p>
        </div>
        <div className=" border m-8"></div>
      <section className="w-full grid grid-col-1 xl:grid-cols-2 gap-8 px-8 mt-8">
          {projectChunks.map((chunk, index) => (
            <article 
              key={index}
              className="w-full h-96 grid grid-cols-1 md:grid-cols-2  grid-rows-2 gap-4
                                border border-amber-400 overflow-hidden p-4"
            >
              {chunk.map((project, index) => {
                const spanClass = index === 0
                ? "row-span-2 md:row-span-2 lg:row-span-2"
                : "row-span-1 md:row-span-2 lg:row-span-1";
                return (
                <div key={project.id} className={`border p-2 ${spanClass}`}>
                  <ProjectCard project={project} />
                </div>
                );
                })}
            </article>
          ))}
      </section>
      <div className=" border m-8"></div>
      <footer>
        <h3>Basics <span>sandbox</span></h3>
      </footer>
    </main>
  );
}

export default Home;