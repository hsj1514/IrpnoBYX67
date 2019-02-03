const MainContentsStyle = {
    display : 'flex',
    flexDirection : 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height : '100%',
    minHeight : 'calc(100vh - 200px)'
}

function MainContents(){
  return(
    <div className="body" style={MainContentsStyle}>
      <div>main</div>
    </div>
  )
}

export default MainContents
