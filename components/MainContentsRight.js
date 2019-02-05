import Link from 'next/link'

const MainContents_Right_Style = {
    display : 'flex',
    float : 'right',
    flexDirection : 'column',
    // justifyContent: 'center',
    alignItems: 'left',
    height : '100%',
    minHeight : 'calc(100vh - 100px)',
    width : '49%',
    border : 'solid 1px',
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

function MainContents_Right(){
  return(
    <div style={MainContents_Right_Style}>
      <div className="title_right" style={Title_Right_Style}>프로젝트</div>
      <div className="content_right" style={Content_Right_Style}>
        <ProjectList />
      </div>
    </div>
  )
}

export default MainContents_Right
