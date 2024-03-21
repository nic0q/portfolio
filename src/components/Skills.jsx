import React from "../assets/Images/react.png"
import Node from "../assets/Images/node.png"
import Angular from "../assets/Images/angular.png"
import Git from "../assets/Images/git.png"
import Mysql from "../assets/Images/mysql.png"
import Aws from "../assets/Images/aws.png"
import MongoDB from "../assets/Images/mongoDB.png"
import Spring from "../assets/Images/spring.png"
import PostgreSQL from "../assets/Images/postgresql.png"
import Jasmine from "../assets/Images/jasmine.png"
import Docker from "../assets/Images/docker.png"
import Junit from "../assets/Images/junit.png"
import { SubTitulo } from "./SubTitulo"
import { Skill } from "./Skill"

export default function Skills() {
  return (
    <div id="skills" className="w-full h-screen bg-gray-900 text-gray-100 md:pt-16">
      <div className="font-semibold max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <SubTitulo title={"Skills"}></SubTitulo>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8">
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
            shadowColor={"shadow-[#a3e4bc] hover:shadow-[#4B8847] "}
            name="Spring Boot"
            img={Spring}
          ></Skill>
          <Skill
            shadowColor={"shadow-[#a3e4bc] hover:shadow-[#4B8847] "}
            name="AWS"
            img={Aws}
          ></Skill>
          <Skill
            shadowColor={"shadow-[#5d82af] hover:shadow-[#5d82af] "}
            name="MySQL"
            img={Mysql}
          ></Skill>
          <Skill
            shadowColor={"shadow-[#5d82af] hover:shadow-[#5d82af] "}
            name="PostgreSQL"
            img={PostgreSQL}
          ></Skill>          
          <Skill
            shadowColor={"shadow-[#a3e4bc] hover:shadow-[#4B8847] "}
            name="MongoDB"
            img={MongoDB}
          ></Skill>
          <Skill
            shadowColor={"shadow-[#a3e4bc] hover:shadow-[#4B8847] "}
            name="Docker"
            img={Docker}
          ></Skill>
          <Skill
            shadowColor={"shadow-[#a3e4bc] hover:shadow-[#4B8847] "}
            name="Jasmine"
            img={Jasmine}
          ></Skill>
          <Skill
            shadowColor={"shadow-[#a3e4bc] hover:shadow-[#4B8847] "}
            name="Junit"
            img={Junit}
          ></Skill>                              
          {/* <Skill
            shadowColor={"shadow-[#44A8B3] hover:shadow-[#44A8B3]"}
            name="TailWind"
            img={TailWind}
          ></Skill> */}


        </div>
      </div>
    </div>
  )
}
