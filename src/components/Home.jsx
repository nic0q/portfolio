import { FiGithub, FiLinkedin } from "react-icons/fi"

export const Home = () => {
  const CV_LINK = "https://drive.google.com/file/d/1NOR8T9LKNtmHoWTI877jPu8yj-xIrEpX/view?usp=sharing"
  return (
    <div id="home" className="flex w-full h-screen bg-gray-900 items-center">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <p className="ml-[2px] text-2xl sm:text-3xl lg:text-4xl text-pink-600 lg:ml-[3px] ">
          Hi, my name is
        </p>
        <h2 className="text-6xl sm:text-7xl lg:text-7xl text-white font-bold">
          Nícolas Farfán Cheneaux
        </h2>
        <h2 className="my-3 text-3xl sm:text-4xl lg:text-5xl lg:ml-1 font-bold text-[#8892b0]">
          Full-Stack Developer
        </h2>
        <div className="flex mt-6 items-center text-white text-4xl">
          <a target="_blank" href={CV_LINK} rel="noreferrer">
            <button className="shadow-lg text-base sm:text-lg lg:text-2xl hover:bg-amber-500 hover:scale-105 duration-200 font-light my-4 ml-1 mr-2 bg-amber-600 border-2 border-none px-4 p-2 rounded-lg">
              CV 📝
            </button>
          </a>
          <a href="#experience">
            <button className="shadow-lg text-base sm:text-lg lg:text-2xl hover:bg-[#b22366] hover:scale-105 duration-200 font-light my-4 ml-1 mr-2 bg-[#772150] border-2 border-none px-4 p-2 rounded-full">
              Experience
            </button>
          </a>
          <a href="#projects">
            <button className="shadow-lg text-base sm:text-lg lg:text-2xl hover:bg-[#b22366] hover:scale-105 duration-200 font-light my-4 ml-1 mr-2 bg-[#772150] border-2 border-none px-4 p-2 rounded-full">
              Projects
            </button>
          </a>
          <a href="https://www.linkedin.com/in/nic0q/" target="_blank" rel="noreferrer">
            <FiLinkedin className="m-3 text-3xl sm:text-4xl lg:text-5xl" />
          </a>            
          <a href="https://github.com/nic0q" target="_blank" rel="noreferrer">
            <FiGithub className="m-3 text-3xl sm:text-4xl lg:text-5xl" />
          </a>
        </div>
      
      <p className="text-xl italic text-gray-200">*Last Update March 2024</p></div>
      <div>
      
      </div>
    </div>
  )
}
