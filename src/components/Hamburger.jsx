import { useState } from "react"
import "../assets/Styles/Hamburger.css"

export default function Hamburger() {
  const [active, setActive] = useState(false)
  const handleClick = () => {
    setActive(!active)
  }
  return (
    <div className="rounded-xl bg-[#04001E] p-[6px] pb-[3px] mr-1">
      <button
        onClick={handleClick}
        className={
          active ? "hamburger--collapse is-active" : "hamburger--collapse "
        }
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
  )
}
