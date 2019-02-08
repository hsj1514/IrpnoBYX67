const Main_Right_Content_Style = {
  marginTop : '20px',
  marginLeft : '10px',
}

const projects = ['Project 1' , 'Project 2' , 'Project 3' , 'Project 4' , 'Project 5' , 'Project 6']
var list = '<ul>';
var i = 0;
while(i < projects.length){
  list = list + `<li style="list-style-type : none;"><a style="background-color : #f7f7f7; text-decoration : none; font-size : 20px; color : black; padding : 5px; border-radius : 2px;" href="/id=${projects[i]}">${projects[i]}</a></li><br><br>`;
  i = i + 1;
}
list = list+'</ul>';

function Main_Right_Content(){
  return(
    <div className="content_right" style={Main_Right_Content_Style}>
      <div dangerouslySetInnerHTML={ {__html: list} }>
      </div>
    </div>
  )
}

export default Main_Right_Content
