const MainContents_Left_Style = {
    display : 'flex',
    float : 'left',
    flexDirection : 'column',
    // justifyContent: 'center',
    alignItems: 'left',
    height : '100%',
    minHeight : 'calc(100vh - 100px)',
    width : '49%',
    border : 'solid 1px',
}

const Title_Left_Style = {
  textAlign : 'center',
  padding : '15px 0px',
  backgroundColor : '#999',
}

const Content_Left_Style = {
  marginTop : '20px',
  marginLeft : '10px',
}

function MainContents_Left(){
  return(
    <div style={MainContents_Left_Style}>
      <div className="title_left" style={Title_Left_Style}>일상</div>
      <div className="content_left" style={Content_Left_Style}>본문</div>
    </div>
  )
}

function Spreader(){

}

function Folder(){

}

export default MainContents_Left
