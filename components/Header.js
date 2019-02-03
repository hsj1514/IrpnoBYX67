const HeaderStyle = {
    display : 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#666',
    height : '100px'
}

function Header(){
  return(
    <header className="header" style={HeaderStyle}><div>header</div></header>
  )
}

export default Header
