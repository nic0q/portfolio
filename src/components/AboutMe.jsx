import { SubTitulo } from "./SubTitulo"

export const AboutMe = () => {
  return (
    <div id="aboutMe" className="bg-gray-900 w-full text-gray-300 h-screen">
      <div className="max-w-[1000px] mx-auto p-4 sm:pt-20 flex flex-col w-full">
        <SubTitulo title={"About Me"}></SubTitulo>
        <br></br>
        <p className="text-gray-300 text-3xl font-bold inline">Academic Degree</p>
        <p>I've obtain the Bachelor of Science in Engineering Degree at Universidad de Santiago de Chile in 2024.</p>  
        <br></br>
        <p className="text-gray-300 text-3xl font-bold inline">Languages</p>
        <p>Native spanish speaker but I can easily express my ideas and comunicate in English, I've also work with a multicultural team in Citi.</p>
        <br></br>
        <p className="text-gray-300 text-3xl font-bold inline">My Journey</p>
        <div className="flex-row flex">
          <p className="text-justify">
            My journey as a Full-Stack Developer has been marked by a rich tapestry of collaborations, working with diverse and talented teams from <span className="text-green-500">{" India"}</span>,<span className="text-yellow-500">{" China"}</span>, and my home country, Chile.<br></br>In my role at <span className="text-blue-500">{" Citi"}</span>, I leveraged the agile methodologies of <span className="text-orange-500">{" Scrum"}</span> to drive efficient project execution, fostering seamless communication in <span className="text-blue-400">{"English"}</span> to align our multicultural team towards common goals. In this environment of collective expertise, I honed my skills in <span className="text-red-500">{" UI and Backend"}</span> development, ensuring technical excellence and pushing the envelope of what our digital solutions could achieve.
            <br></br>
            My tenure culminated in earning the endorsement of a senior colleague, a testament to the dedication and expertise I bring to every facet of my work.
          </p>
          
        </div>
        <br></br>
        <p className="text-white text-3xl font-bold inline">What I am doing now?</p>
        <p>
            Right now I am finishing my studies in Universidad De Santiago de Chile and in parallel preparing to certificate in <span className="text-orange-500">{" AWS Cloud"}</span> and <span className="text-blue-500">{" Machine Learning"}</span>.
          </p>
      </div>
    </div>
  )
}
