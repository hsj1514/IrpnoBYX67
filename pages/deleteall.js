import App from "../pages/App.js"
import axios from 'axios';
import Link from 'next/link'


class DeleteAll extends React.Component {

    render() {

      return (
        <App>
          <div style={{fontSize : '20px', paddingTop : '30px', paddingBottom : '30px', textAlign : 'center'}}>계획이 초기화되었습니다.</div>
          <style jsx>{`
            .home:hover {
              opacity : 0.5;
            }
          `}</style>
          <Link href="/">
            <a className="home" style={{fontSize : '30px',
            textDecoration : 'none',
            color : 'black', textAlign : 'center',}}>홈으로</a>
          </Link>
        </App>
      );
    }
}


DeleteAll.getInitialProps = async function() {
  const res = await fetch('http://localhost:5000/delete')
  const data = await res.json()
  console.log(data)

  return {
    shows: data
  }
}


export default DeleteAll
