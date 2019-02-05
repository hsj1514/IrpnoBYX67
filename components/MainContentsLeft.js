import Link from 'next/link'

const MainContents_Left_Style = {
    display : 'flex',
    float : 'left',
    flexDirection : 'column',
    alignItems : 'left',
    height : '100%',
    minHeight : 'calc(100vh - 100px)',
    width : '49%',
    border : 'solid 1px',
}

const Title_Left_Style = {
  textAlign : 'center',
  padding : '15px 0px',
  marginBottom : '20px',
  backgroundColor : '#999',
}

const Today = {
  fontSize : '20px',
  textDecoration : 'none',
  color : 'black',
  backgroundColor : '#999',
  borderRadius : '4px',
  padding : '3px',
  border : 'solid 1px',
  margin : '0px 20px',
}

const SevenDays = {
  fontSize : '20px',
  textDecoration : 'none',
  color : 'black',
  backgroundColor : '#999',
  borderRadius : '4px',
  padding : '3px',
  border : 'solid 1px',
  margin : '0px 20px',
}

const Content_Left_Style = {
  marginTop : '20px',
  marginLeft : '10px',
}

function Hover(){
  on.mouse
}

function MainContents_Left(){
  return(
    <div style={MainContents_Left_Style}>
      <div className="title_left" style={Title_Left_Style}>일상</div>
      <div>
        <Link href="/">
          <a className="today" style={Today}>오늘</a>
        </Link>
        <Link href="/">
          <a className="sevendays" style={SevenDays}>앞으로의 7일</a>
        </Link>
      </div>
      <div className="content_left" style={Content_Left_Style}>
        <p>dfaefa</p>
      </div>
    </div>
  )
}

function Spreader(){

}

function Folder(){

}

export default MainContents_Left
