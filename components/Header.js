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


function Header(){
  return(
    <header className="header" style={Header_Style}>

    <style jsx>{`
      .logo {
        font-size : 30px;
        margin-left : 15px;
        text-decoration : none;
        color : black;
      }

      .logo:hover {
        opacity : 0.5;
      }

      .achievement {
        font-size : 15px;
        margin-left : 40%;
        text-decoration : none;
        color : black;
      }

      .achievement:hover {
        opacity : 0.5;
      }
    `}</style>

      <Link href="/">
        <a className="logo">Todo Application</a>
      </Link>
      <Link href="/">
        <a className=" achievement" >완료목록 보기</a>
      </Link>
    </header>
  )
}

export default Header
