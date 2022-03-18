import { SubTitulo } from "./SubTitulo"

export const AboutMe = () => {
  return (
    <div id="aboutMe" className="bg-[#04001E] w-full text-gray-100">
      <div className="max-w-[1000px] mx-auto p-4 sm:pt-20 flex flex-col w-full">
        <SubTitulo title={"About Me"}></SubTitulo>
        {/* Main Container => Img + Text */}
        <div className="flex-row flex mt-16">
          {/* <h2 className="text-4xl mr-20">
            Hi. I'm Nícolas, nice to meet you. Please take a look around.
          </h2> */}
          <h3 className="text-3xl text-justify mt-1">
            I'm a Informatics Engineering student and appasionate for the Web
            Development from Chile, in the last summer I've build some projects
            to improve my skills in web sites and aplications development, I
            wish in the future collaborate in bigger projects and interact with
            other developers. I'm looking for any opportunity to adquire
            experience in this area. I specialize in React Apps, with CSS
            frameworks. I'm not english native speaker, but I can normally
            express my ideas, writing and talking.
          </h3>
        </div>
      </div>
    </div>
  )
}
