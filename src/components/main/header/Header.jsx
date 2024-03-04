import { useEffect, useState } from "react";
import { Navlinks } from "./header-components/NavLinks"
import { Link, useLocation } from "react-router-dom"
import "./header.css"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setIsOpen(false) }, [pathname])

  return (

    <div className="menu">
      <div className="logo"><Link to="/"><img src="logo.png" alt="logo" /> </Link></div>
      <div className="desktop-nav">
        <Navlinks pathname={pathname} />
      </div>
      <button onClick={() => setIsOpen(!isOpen)} className={`menu-button ${isOpen ? "close" : "open"}`}>
        <span>&#9776;</span>
      </button>
      <div className={`menu-overlay ${isOpen && "open"}`}>
        <button onClick={() => setIsOpen(!isOpen)} className={`menu-button ${isOpen ? "close" : "open"}`}>
          {isOpen && <span>&#10005;</span>}
        </button>

        <div className="overlay-links">
          <Navlinks pathname={pathname} />
        </div>
      </div>
    </div>
  )
}

