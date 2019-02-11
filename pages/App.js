import Link from 'next/link'
import Header from "../components/Header.js"
import Main_Left_Layout from "../components/Main_Left_Layout.js"


function App(props){
  return (
  <div>

  <Header />

  <Main_Left_Layout>
  {props.children}
  </Main_Left_Layout>


  </div>
 )
}


export default App
