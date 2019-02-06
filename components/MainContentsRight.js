import Link from 'next/link'

const MainContents_Right_Style = {
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



function MainContents_Right(){
  const projects = ['Project 1' , 'Project 2' , 'Project 3' , 'Project 4' , 'Project 5' , 'Project 6']
  var list = '<ul>';
  var i = 0;
  while(i < projects.length){
    list = list + `<li style="list-style-type : none;"><a style="background-color : #f7f7f7; text-decoration : none; font-size : 20px; color : black; padding : 5px; border-radius : 2px;" class="projects" href="/id=${projects[i]}">${projects[i]}</a></li><br><br>`;
    i = i + 1;
  }
  list = list+'</ul>';
  console.log(list);
  return(
    <div style={MainContents_Right_Style}>
      <div className="title_right" style={Title_Right_Style}>
        프로젝트
      </div>

      <style jsx>{`
        .addProject {
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

        .addProject:hover {
          opacity : 1;
        }
      `}</style>

      <Link href="/">
        <a className="addProject">+) 프로젝트 추가하기</a>
      </Link>

      <div className="content_right" style={Content_Right_Style}>
        <div dangerouslySetInnerHTML={ {__html: list} }>
        </div>
      </div>
    </div>
  )
}


export default MainContents_Right
