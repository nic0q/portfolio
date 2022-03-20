import { SubTitulo } from "./SubTitulo"

export const AboutMe = () => {
  return (
    <div id="aboutMe" className="bg-[#04001E] w-full text-gray-100">
      <div className="max-w-[1000px] mx-auto p-4 sm:pt-20 flex flex-col w-full">
        <SubTitulo title={"About Me"}></SubTitulo>
        <div className="flex-row flex lg:mt-16 mt-8">
          <h3 className="text-3xl text-justify mt-1 tracking-wide">
            I am a Software Developer and university student, passionate for the
            Web Development from Chile, in the last summer I have build some
            projects to improve my skills in web sites development, for in the
            future collaborate in bigger projects and interact with other
            developers. So now I am looking for any opportunity to adquire
            experience in this area, mainly using React, with CSS frameworks,
            but I also worked with nodeJS, Express and relational databases. In
            terms of language, I am not English native speaker, but I can easily
            express my ideas, writing and talking.
          </h3>
        </div>
      </div>
    </div>
  )
}
