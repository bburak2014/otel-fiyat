import { Header } from "./components/main/header/Header"
import Footer from "./components/main/footer/Footer"

 const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <main>{children}</main>
    <Footer/>

    </>
  )
}

export default Layout