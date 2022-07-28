import "../App.css"
import {
  FaReact,
  FaCss3,
  FaHtml5,
  FaLink,
  FaGithub,
  FaNodeJs,
  FaLaravel,
  FaBootstrap,
  FaVuejs
} from "react-icons/fa"
import { SiJavascript, SiPostgresql, SiSpringboot} from "react-icons/si"
import {GrMysql} from "react-icons/gr"

export const ProjectCard = ({
  name = "Project Name",
  img = "",
  details = "Project Details",
  github = "",
  page = "",
  tech = [],
}) => {
  return (
    <div className="card pb-2 bg-[#1F1F3A] border-solid border-2 border-purple-600 rounded-xl flex md:h-96 md:w-78 lg:hover:scale-125 duration-500 shadow-xl shadow-[#ae70e7] w-full ">
      <div className=" w-screen">
        <img
          className="rounded-xl w-screen md:h-[40%]"
          src={img}
          alt="Imagen del Proyecto"
        ></img>
        <div className="p-4">
          <h2 className="text-2xl pb-4 font-bold text-center ">{name}</h2>
          <div className="bg-[#262644] p-1">
            <p className="font-light text-center">{details}</p>
          </div>
          <div className="flex justify-center text-white">
            {github === "" ? (
              ""
            ) : (
              <a href={github} target={"_blank"} rel="noreferrer">
                <FaGithub className="m-3 text-4xl"></FaGithub>
              </a>
            )}
            {page === "" ? (
              ""
            ) : (
              <a href={page} target={"_blank"} rel="noreferrer">
                <FaLink className="m-3 text-4xl"></FaLink>
              </a>
            )}
          </div>
          {
            <div className="flex text-purple-300 relative md:items-end justify-start mt-[-43px] md:flex-row flex-wrap w-[50px]">
              {tech.map((e) =>
                e === "react" ? (
                  <FaReact key={e} className="mb-1 mr-1 text-xl" />
                ) : e === "css" ? (
                  <FaCss3 key={e} className="mb-1 mr-1 text-xl" />
                ) : e === "html" ? (
                  <FaHtml5 key={e} className="mb-1 mr-1 text-xl" />
                ) : e === "js" ? (
                  <SiJavascript key={e} className="mb-1 mr-1 text-xl" />
                ) : e === "node" ? (
                  <FaNodeJs key={e} className="mb-1 mr-1 text-xl" />
                ) : e === "laravel" ? (
                  <FaLaravel key={e} className="mb-1 mr-1 text-xl" />
                ) : e === "postgresql" ? (
                  <SiPostgresql key={e} className="mb-1 mr-1 text-xl" />
                ) : e === "mysql" ? (
                  <GrMysql key={e} className="mb-1 mr-1 text-xl" />
                ) : e === "bootstrap" ? (
                  <FaBootstrap key={e} className="mb-1 mr-1 text-xl" />
                ) : e === "vuejs" ? (
                  <FaVuejs key={e} className="mb-1 mr-1 text-xl" />
                ) : e === "mongodb" ? (
                  <FaBootstrap key={e} className="mb-1 mr-1 text-xl" />
                ) : e === "springboot" ? (
                  <SiSpringboot key={e} className="mb-1 mr-1 text-xl" />
                )
                : (
                  ""
                )
              )}
            </div>
          }
        </div>
      </div>
    </div>
  )
}
