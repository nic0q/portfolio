import React from "../assets/Images/react.png"
import Node from "../assets/Images/node.png"
import Angular from "../assets/Images/angular.png"
import Git from "../assets/Images/git.png"
import Mysql from "../assets/Images/mysql.png"
import TailWind from "../assets/Images/tailwind.png"
import MongoDB from "../assets/Images/mongoDB.png"
import { SubTitulo } from "./SubTitulo"
import { Skill } from "./Skill"

export default function Skills() {
  return (
    <div id="skills" className="w-full bg-gray-900 text-gray-100 md:pt-16">
      <div className="font-semibold max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <SubTitulo title={"Skills"}></SubTitulo>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8">
          {/* <Skill
            shadowColor={"shadow-[#e9e1bd] hover:shadow-[#F16529]"}
            name="HTML"
            img={HTML}
          ></Skill>
          <Skill
            shadowColor={"shadow-[#bacce2] hover:shadow-[#0277BD] "}
            name="CSS"
            img={CSS}
          ></Skill>
          <Skill
            shadowColor={"shadow-[#e7e0a3] hover:shadow-[#FED500]  "}
            name="JS"
            img={JS}
          ></Skill> */}
          <Skill
            shadowColor={"shadow-[#61c7b1] hover:shadow-[#63dddd] "}
            name="React"
            img={React}
          ></Skill>
          <Skill
            shadowColor={"shadow-[#61c7b1] hover:shadow-[#63dddd] "}
            name="Angular"
            img={Angular}
          ></Skill>          
          <Skill
            shadowColor={"shadow-[#db5d5d] hover:shadow-[#DE4C36] "}
            name="Git"
            img={Git}
          ></Skill>
          <Skill
            shadowColor={"shadow-[#a3e4bc] hover:shadow-[#4B8847] "}
            name="Node.js"
            img={Node}
          ></Skill>
          <Skill
            shadowColor={"shadow-[#5d82af] hover:shadow-[#5d82af] "}
            name="MySQL"
            img={Mysql}
          ></Skill>
          <Skill
            shadowColor={"shadow-[#a3e4bc] hover:shadow-[#4B8847] "}
            name="MongoDB"
            img={MongoDB}
          ></Skill>
          <Skill
            shadowColor={"shadow-[#44A8B3] hover:shadow-[#44A8B3]"}
            name="TailWind"
            img={TailWind}
          ></Skill>
        </div>
      </div>
    </div>
  )
}
