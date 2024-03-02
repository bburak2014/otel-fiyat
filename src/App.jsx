import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import ContactUs from "./pages/contact-us/ContactUs"
import ErrorPages from "./pages/error-page/ErrorPages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact-us",
    element: <ContactUs />
  },
  {
    path: "*",
    element: <ErrorPages />
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
