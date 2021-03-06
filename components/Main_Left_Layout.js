import Link from 'next/link'
import Popup_Left from "../components/Popup_Left.js"


const Main_Left_Layout_Style = {
    display : 'flex',
    float : 'left',
    flexDirection : 'column',
    alignItems : 'left',
    height : '100%',
    minHeight : 'calc(100vh - 100px)',
    width : '99%',
    border : 'groove 1px',
}

const Title_Left_Style = {
  textAlign : 'center',
  padding : '15px 0px',
  backgroundColor : '#999',
}

const Transparent = {
  marginTop : '35px',
  marginBottom : '20px',
}


function Main_Left_Layout(props){
  return(
    <div style={Main_Left_Layout_Style}>

      <style jsx>{`
      .today:hover {
        background-color : #999;
      }

      .today {
        font-size : 20px;
        text-decoration : none;
        color : black;
        background-color : #f7f7f7;
        border-radius : 2px;
        padding : 5px;
        margin : 0px 20px;
      }

      .sevendays:hover {
        background-color : #999;
      }

      .sevendays {
        font-size : 20px;
        text-decoration : none;
        color : black;
        background-color : #f7f7f7;
        border-radius : 2px;
        padding : 5px;
        margin : 0px 15px;
      }
      `}</style>

      <div className="title_left" style={Title_Left_Style}>
        일상
      </div>

      <Popup_Left />

      <div style={Transparent}>
        <Link href="/todaytodo">
          <a className="today">오늘</a>
        </Link>
        <Link href="/seventodo">
          <a className="sevendays">7일의 계획</a>
        </Link>
      </div>

      {props.children}

    </div>
  )
}


export default Main_Left_Layout
