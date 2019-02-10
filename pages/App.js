import Link from 'next/link'
import Header from "../components/Header.js"
import Main_Left_Layout from "../components/Main_Left_Layout.js"
import Main_Right_Layout from "../components/Main_Right_Layout.js"
import Main_Left_Content from "../components/Main_Left_Content.js"
import Main_Right_Content from "../components/Main_Right_Content.js"

import Todo from "../components/todo.js"




function App(){
  return (
  <div>

  <Header />

  <Main_Left_Layout>
    <Main_Left_Content>
      <Todo />
    </Main_Left_Content>
  </Main_Left_Layout>

  <Main_Right_Layout>
    <Main_Right_Content />
  </Main_Right_Layout>


  </div>
 )
}


export default App
