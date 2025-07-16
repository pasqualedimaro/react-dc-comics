import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import Logo from './components/Logo.jsx'
import Jumbotron from "./components/Jumbotron.jsx"

const menuHeader = ["CHARACTER", "COMICS", "MOVIES", "TV", "GAMES", "COLLECTIBLES", "VIDEOS", "FANS", "NEWS", "SHOP"]
function App() {
 

  return (
    <>
     <Header menuHeader={menuHeader} />
     <Jumbotron />
     <Main />
     <Footer />
    </>
  )
}

export default App
