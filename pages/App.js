import Header from "../components/Header.js"
import MainContents from "../components/MainContents.js"
import Footer from "../components/Footer.js"
// import Database from "../server/db.js"
// import Data from "../components/Data.js"

function App(){
  return(
    <div id="wrap">
      <Header />
      <MainContents />
      <Footer />
    </div>
  )
}

export default App;
