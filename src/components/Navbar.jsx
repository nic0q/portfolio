import React from "react"
import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
export const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => {
    setNav(!nav)
  }
  const CV_LINK = "https://drive.google.com/file/d/1NOR8T9LKNtmHoWTI877jPu8yj-xIrEpX/view?usp=sharing"
  return (
    <div className="z-10 fixed w-full h-[70px] flex items-center px-w bg-transparent justify-evenly text-xl md:bg-[#1E293B]">
      <div
        className="text-white md:hidden z-10 text-3xl m-3 flex fixed bottom-0 right-0"
        onClick={handleClick}
      >
        {nav ? (
          <FaTimes className="rounded-xl w-14 h-14 text-[#db2777] bg-[#04001E] p-[2px] pb-[3px] mr-1" />
        ) : (
          <GiHamburgerMenu className="rounded-xl w-14 h-14 text-[#db2777] bg-[#04001E] p-[2px] pb-[3px] mr-1" />
        )}
      </div>
      <a href="#home" className="text-5xl">
      🥷🏼
      </a>

      <ul className={"hidden md:flex text-white items-center"}>
        <li className="">
          <a href="#aboutMe">About Me</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <button className="font-bold border-none p-1 px-3 text-xl py-2 rounded-full bg-[#b22366]">
            <a
              target={"_blank"}
              href={CV_LINK} // English version
              rel="noreferrer"
            >
              <span>CV 📝</span>
            </a>
          </button>
        </li>        
        {/* Spanish version */}
        {/* <li>
          <button className="font-bold border-none p-1 px-3 text-xl py-2 rounded-full bg-[#E41476]">
            <a
              target={"_blank"}
              href="https://drive.google.com/file/d/1NOR8T9LKNtmHoWTI877jPu8yj-xIrEpX/view?usp=sharing" 
              rel="noreferrer"
            >
              CV
              <span className="font-style: italic"> spanish</span>
            </a>
          </button>
        </li> */}
      </ul>

      {/* Mobile Responsibe */}

      <ul
        className={
          nav
            ? "flex flex-col bg-[#04001E] justify-center items-center absolute top-0 left-0 w-full h-screen text-white text-4xl"
            : "hidden"
        }
      >
        <li className="py-8 font-semibold">
          <a href="#aboutMe" onClick={handleClick}>
            About Me
          </a>
        </li>
        <li className="py-8 font-semibold">
          <a href="#skills" onClick={handleClick}>
            Skills
          </a>
        </li>
        <li className="py-8 font-semibold">
          <a href="#projects" onClick={handleClick}>
            Projects
          </a>
        </li>
        <li className="py-8 font-semibold">
          <a href="#contact" onClick={handleClick}>
            Contact
          </a>
        </li>
        <button className="my-8 font-bold border-none p-1 px-6 text-xl py-2 rounded-full bg-[#b22366]">
          <a
            target={"_blank"}
            href={CV_LINK}
            rel="noreferrer"
          >
            CV 📝
          </a>
        </button>
      </ul>
    </div>
  )
}
