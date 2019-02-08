import Link from 'next/link'
import Popup_Right from "../components/Popup_Right.js"


const Main_Right_Layout_Style = {
  display : 'flex',
  float : 'right',
  flexDirection : 'column',
  alignItems: 'left',
  height : '100%',
  minHeight : 'calc(100vh - 100px)',
  width : '49%',
  border : 'groove 1px',
}

const Title_Right_Style = {
  textAlign : 'center',
  padding : '15px 0px',
  backgroundColor : '#999',
}

const Content_Right_Style = {
  marginTop : '20px',
  marginLeft : '10px',
}



function Main_Right_Layout(props){
  return(
    <div style={Main_Right_Layout_Style}>
      <div className="title_right" style={Title_Right_Style}>
        프로젝트
      </div>

      <style jsx>{`
        .addProject {
          color : red;
          font-size : 20px;
          padding : 5px;
          margin-top : 20px;
          margin-left : 10px;
          margin-right : 10px;
          display : flex;
          flex-direction : column;
          align-items : center;
          opacity : 0.7;

        }

        .addProject:hover {
          opacity : 1;
        }
      `}</style>

      <Popup_Right />

      {props.children}

    </div>
  )
}


export default Main_Right_Layout
