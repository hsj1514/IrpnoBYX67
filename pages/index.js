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

function MyFunction() {
  var tempDate = new Date();
  var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
  const currDate = "Current Date= "+date;

  return (
    <p>{currDate}</p>
  );
}

console.log(MyFunction())



Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:5000/list')
  const data = await res.json()
  // console.log(data)
  // console.log(data[2].title)

  return {
    shows: data
  }
}


export default Index
