import fetch from 'isomorphic-unfetch'
import App from './App.js';
import axios from 'axios';

const Index = () => (
  <App />
)


// axios.post('http://localhost:5000/add', {
//   title : '과제 ㅈ댐',
//   description : '못할듯'
// })


Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:5000/list')
  const data = await res.json()
  // console.log(data)

  return {
    shows: data
  }
}


export default Index
