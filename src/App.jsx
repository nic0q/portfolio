import "./App.css"
import { Navbar } from "./components/Navbar"
import { Home } from "./components/Home"
import { Projects } from "./components/Projects"
import { Footer } from "./components/Footer"
import { Contact } from "./components/Contact"
import { AboutMe } from "./components/AboutMe"
import Skills from "./components/Skills"
// Color Pallete: #10042D #160435 #04001E

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
