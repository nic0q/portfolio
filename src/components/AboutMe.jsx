import { SubTitulo } from "./SubTitulo"

export const AboutMe = () => {
  return (
    <div id="aboutMe" className="bg-[#04001E] w-full text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 sm:pt-20 flex flex-col w-full">
        <SubTitulo title={"About Me"}></SubTitulo>
        <div className="flex-row flex lg:mt-16 mt-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl text-justify mt-1 tracking-wide">
            I am a Software Developer and university student, passionate for the
            Web Development from Chile, in the last summer I have build some
            projects to improve my skills in web sites development, for in the
            future collaborate in bigger projects and interact with other
            developers. So now I am looking for any opportunity to adquire
            experience in this area, mainly using
            <span className="text-[#00D6FE]">{" React"}</span>, and styling with
            pure <span className="text-blue-500">{" CSS"}</span> frameworks or
            without these, but I also worked in the backend area with{" "}
            <span className="text-[#8CC84B]">{" nodeJS"}</span>,{" "}
            <span className="text-white">{" Express"}</span> and relational
            databases In the university we work a lot with{" "}
            <span className="text-orange-500">{" MVC"}</span> pattern using and
            also using multiple programming paradigms like POO, logic and
            declarative, in my projets I always focus on keep the intention of
            the code, thinking in a long term mantineable code keeping a
            declarative approach. In terms of language, I am not English native
            speaker, but I can easily express my ideas, writing and talking.
          </h3>
        </div>
      </div>
    </div>
  )
}
