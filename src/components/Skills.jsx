import HTML from "../assets/Images/html.png"
import CSS from "../assets/Images/css.png"
import JS from "../assets/Images/javascript.png"
import ReactImg from "../assets/Images/react.png"
import Node from "../assets/Images/node.png"
import Git from "../assets/Images/git.png"
import Mongo from "../assets/Images/mongo.png"
import PostgreSQL from "../assets/Images/postgresql.png"
import TailWind from "../assets/Images/tailwind.png"
import Laravel from "../assets/Images/laravel.png"
import { SubTitulo } from "./SubTitulo"
import { Skill } from "./Skill"

export default function Skills() {
  return (
    <div id="skills" className="w-full bg-[#04001E] text-gray-100 md:pt-16">
      <div className="font-semibold max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <SubTitulo title={"Skills"}></SubTitulo>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8">
          <Skill
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
          ></Skill>
          <Skill
            shadowColor={"shadow-[#61c7b1] hover:shadow-[#63dddd] "}
            name="React"
            img={ReactImg}
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
          {/* <Skill
            shadowColor={"shadow-[#91da87] hover:shadow-[#94ec61] "}
            name="MongoDB"
            img={Mongo}
          ></Skill> */}
          <Skill
            shadowColor={"shadow-[#5d82af] hover:shadow-[#5d82af] "}
            name="PostgreSQL"
            img={PostgreSQL}
          ></Skill>
          <Skill
            shadowColor={"shadow-[#FF291A] hover:shadow-[#FF291A] "}
            name="Laravel"
            img={Laravel}
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
