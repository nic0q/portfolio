import { useState } from "react"
import { ProjectCard } from "./ProjectCard"
import { SubTitulo } from "./SubTitulo"

export const Projects = () => {
  const [loadMore, setLoadMore] = useState(false)

  const handleClick = () => {
    loadMore ? setLoadMore(false) : setLoadMore(true)
  }
  return (
    <div id="projects" className="bg-gray-900 text-gray-100 md:pt-16">
      <div className="font-semibold max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <SubTitulo title={"Projects"}></SubTitulo>
        <div className="w-full grid gap-12 grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 py-12">
          <ProjectCard
            img="https://user-images.githubusercontent.com/91075814/181865490-104125d6-655b-42f4-87d5-74054d37dc0a.gif"
            name="Never Be Alone"
            details="University denounces portal, publish a denounce, see my denonuces, role."
            github={"https://github.com/nic0q/Never-Be-Alone"}
            tech={["java","springboot", "mysql", "vuejs"]}
          ></ProjectCard>
          <ProjectCard
            img="https://user-images.githubusercontent.com/91075814/158313040-ac313fa3-be60-4357-aa47-b5825dcf8035.gif"
            name="Mist"
            details="A Steam clone with wishlist, admin CRUD, for sale games and shopcard simulation."
            github={"https://github.com/nic0q/Mist"}
            tech={["php", "laravel", "postgresql", "bootstrap"]}
          ></ProjectCard>          
          <ProjectCard
            img="https://user-images.githubusercontent.com/91075814/158311732-11eaf0f5-6b4f-4c2e-b9c3-b63401a8bad0.gif"
            name="Memory Game"
            details="A typical memory game with a menu token's skins and grid personalization."
            page="https://nic0q.github.io/Memory-Game/"
            github={"https://github.com/nic0q/Memory-Game"}
            tech={["react"]}
          ></ProjectCard>
          {loadMore ? (
            <>
              <ProjectCard
                img="https://user-images.githubusercontent.com/91075814/158312217-c030f4de-cb5c-4000-b699-7304fc94ac2f.gif"
                name="Tik Tak Toe"
                details="Basic Multiplayer TikTakToe with JavascriptVanilla, good practices, functional programming"
                github={"https://github.com/nic0q/Tik-Tak-Toe"}
                page={"https://nic0q.github.io/Tik-Tak-Toe/"}
                tech={["html", "css", "js"]}
              ></ProjectCard>
              <ProjectCard
                img="https://user-images.githubusercontent.com/91075814/158311197-12638b3d-020a-41bc-9bc6-867cbacdda4f.gif"
                name="Random Questionary"
                details="Consults an API to get random questions, at the end give the right and wrong answers."
                page="https://nic0q.github.io/Random-Questionary/"
                github={"https://github.com/nic0q/Random-Questionary"}
                tech={["react"]}
              ></ProjectCard>
              <ProjectCard
                img="https://user-images.githubusercontent.com/91075814/158309891-cced5767-0792-4226-9c35-0944cd1915b9.gif"
                name="¿Cuánto Me Falta?"
                details="An interface that calcules the weighted average of all grades, allows ADD, DELETE grades."
                page="https://nic0q.github.io/Cuanto-Me-Falta/"
                github={"https://github.com/nic0q/Cuanto-Me-Falta"}
                tech={["html", "css", "js"]}
              ></ProjectCard>
              <ProjectCard
                img="https://user-images.githubusercontent.com/91075814/158310072-2786877e-ab62-4f6d-b2be-d45e257da05a.gif"
                name="Linked List Animation"
                details="A LinkedList animation visualizer with delete, add, change speed, and more custom features."
                page="https://nic0q.github.io/Linked-List-Animation/"
                github={"https://nic0q.github.io/Linked-List-Animation/"}
                tech={["html", "css", "js"]}
              ></ProjectCard>
            </>
          ) : (
            <div className="lg:hidden visible">
              <ProjectCard
                img="https://user-images.githubusercontent.com/91075814/158312217-c030f4de-cb5c-4000-b699-7304fc94ac2f.gif"
                name="Tik Tak Toe"
                details="Basic Multiplayer TikTakToe with JavascriptVanilla, good practices, functional programming"
                github={"https://github.com/nic0q/Tik-Tak-Toe"}
                page={"https://nic0q.github.io/Tik-Tak-Toe/"}
                tech={["html", "css", "js"]}
              ></ProjectCard>
            </div>
          )}
        </div>
        <div className="flex items-center justify-center mb-14">
          <div className="flex flex-col items-center">
            <svg
              className={
                loadMore
                  ? "hidden"
                  : "cursor-pointer w-14 h-14 bg-[#1F1F3A] border-[1px] border-[#75618d] border-solid rounded-full p-1 text-[#da71b7] animate-bounce"
              }
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={handleClick}
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
            <p
              className={
                loadMore ? "hidden" : "text-[#da71b7] pl-1 animate-pulse text-2xl"
              }
            >
              see more
            </p>
            <br></br>
            <br></br>
          </div>
          <div className="rotate-180">
            <svg
              className={
                !loadMore
                  ? "hidden"
                  : " cursor-pointer w-14 h-14 bg-[#1F1F3A] border-[1px] border-[#75618d] border-solid rounded-full p-1 text-[#da71b7] animate-bounce"
              }
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={handleClick}
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3 "></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
