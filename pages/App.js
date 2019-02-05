import Header from "../components/Header.js"
import MainContents_Left from "../components/MainContentsLeft.js"
import MainContents_Right from "../components/MainContentsRight.js"
// import Footer from "../components/Footer.js"
// import Database from "../server/db.js"
// import Data from "../components/Data.js"

function App(){
  return(
    <div id="wrap">
      <Header />
      <MainContents_Left />
      <MainContents_Right />
    </div>
  )
}

export default App;
