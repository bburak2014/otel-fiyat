import { Link, useLocation } from "react-router-dom"
import "../header.css"

const links = [{
    name: "Home",
    path: "/"
},
{
    name: "About",
    path: "/about"
},
{
    name: "Contact Us",
    path: "/contact"
}]

export const Navlinks = () => {
    const { pathname } = useLocation()
    return (
        <nav>{links.map((link, index) =>
            <Link className={`nav-link  ${pathname === link.path ? "text-black font-medium" : "text-[#626262]"}`} key={index} to={link.path}>{link.name}</Link>)}
        </nav>
    )
}
