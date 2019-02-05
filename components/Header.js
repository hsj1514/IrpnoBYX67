import Link from 'next/link'

const Header_Style = {
    display : 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    backgroundColor : '#999',
    height : '80px',
    minWidth : '600px',
    marginBottom : '20px',
}

const Logo_Style = {
  fontSize : '30px',
  marginLeft : '15px',
  textDecoration : 'none',
  color : 'black',
}

const Achievement_Style = {
  marginLeft : '40%',
  textDecoration : 'none',
  color : 'black',
}

function Header(){
  return(
    <header className="header" style={Header_Style}>
      <Link href="/">
        <a className="logo" style={Logo_Style}>Todo Application</a>
      </Link>
      <Link href="/">
        <a className=" achievement" style={Achievement_Style}>나의 성취 보기</a>
      </Link>
    </header>
  )
}

export default Header
