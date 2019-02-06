import Link from 'next/link'


const MainContents_Left_Style = {
    display : 'flex',
    float : 'left',
    flexDirection : 'column',
    alignItems : 'left',
    height : '100%',
    minHeight : 'calc(100vh - 100px)',
    width : '49%',
    border : 'groove 1px',
}

const Title_Left_Style = {
  textAlign : 'center',
  padding : '15px 0px',
  backgroundColor : '#999',
}

const Content_Left_Style = {
  borderTop : 'groove 1px',
  padding : '2px',
  margin : '3px 0px',
  height : '150px',
}

const Transparent = {
  marginTop : '35px',
  marginBottom : '20px',
}


function MainContents_Left(){
  return(
    <div style={MainContents_Left_Style}>

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
        margin : 0px 20px;
      }

      .addTodo {
        text-decoration : none;
        color : red;
        font-size : 20px;
        padding : 5px;
        margin-top : 20px;
        display : flex;
        flex-direction : column;
        align-items : center;
        opacity : 0.5;

      }

      .addTodo:hover {
        opacity : 1;
      }
      `}</style>

      <div className="title_left" style={Title_Left_Style}>
        일상
      </div>

      <Link href="/">
        <a className="addTodo">+) 계획 추가하기</a>
      </Link>

      <div style={Transparent}>
        <Link href="/">
          <a className="today">오늘</a>
        </Link>
        <Link href="/">
          <a className="sevendays">앞으로의 7일</a>
        </Link>
      </div>

      <div className="content_left">
        <div style={Content_Left_Style}>
          <div style={{paddingBottom : '10px', fontSize : '12px',}}>오늘 4월 26일</div>
          <div>학원 가기</div>
        </div>
        <div style={Content_Left_Style}>
          <div style={{paddingBottom : '10px', fontSize : '12px',}}>목요일 5월 15일</div>
          <div>밥 먹기</div>
        </div>
      </div>

    </div>
  )
}


export default MainContents_Left
