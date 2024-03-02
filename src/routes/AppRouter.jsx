import { Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home"
import About from "../pages/about/About"
import ContactUs from "../pages/contact-us/ContactUs"
import ErrorPages from "../pages/error-page/ErrorPages"
import Layout from "../Layout"

export const AppRouter = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="*" element={<ErrorPages />} />
            </Routes>
        </Layout>

    )
}
