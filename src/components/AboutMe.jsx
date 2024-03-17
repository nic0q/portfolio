import { SubTitulo } from "./SubTitulo"

export const AboutMe = () => {
  return (
    <div id="aboutMe" className="bg-gray-900 w-full text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 sm:pt-20 flex flex-col w-full">
        <SubTitulo title={"About Me"}></SubTitulo>
        <div className="flex-row flex lg:mt-16 mt-8">
          <h3 className="text-lg sm:text-xl md:text-2xl text-justify mt-1 tracking-wide">
          My journey as a Full-Stack Developer has been marked by a rich tapestry of collaborations, working with diverse and talented teams from <span className="text-green-500">{" India"}</span><span className="text-yellow-500">{", China"}</span>, and my home country, Chile. In my role at <span className="text-blue-500">{" Citi"}</span>, I leveraged the agile methodologies of <span className="text-orange-500">{" Scrum"}</span> to drive efficient project execution, fostering seamless communication in English to align our multicultural team towards common goals.

In this environment of collective expertise, I honed my skills in <span className="text-red-500">{" Angular"}</span> development, ensuring technical excellence and pushing the envelope of what our digital solutions could achieve. My tenure culminated in earning the endorsement of a senior colleague, a testament to the dedication and expertise I bring to every facet of my work.
          </h3>
        </div>
      </div>
    </div>
  )
}
