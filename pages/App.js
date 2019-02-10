import Link from 'next/link'
import Header from "../components/Header.js"
import Main_Left_Layout from "../components/Main_Left_Layout.js"
import Main_Right_Layout from "../components/Main_Right_Layout.js"
// import Main_Left_Content from "../components/Main_Left_Content.js"
import Main_Right_Content from "../components/Main_Right_Content.js"





function App(props){
  return (
  <div>

  <Header />

  <Main_Left_Layout>
  {props.children}
  </Main_Left_Layout>

  <Main_Right_Layout>
    <Main_Right_Content />
  </Main_Right_Layout>


  </div>
 )
}


export default App
