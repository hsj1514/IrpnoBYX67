import fetch from 'isomorphic-unfetch'
import App from './App.js';
// import fetch from 'isomorphic-unfetch';
// import Topics from "../db/mysql.js";
// import Data from "../nodejs/main.js"

const Index = () => (
  <App />
)

// Index.getInitialProps = async function() {
//   const res = await fetch('https://localhost:4000')
//   const data = await res.json()
//
//   console.log(` Show data fetched. Count: ${data.length}`)
//
//   return {
//     shows: data
//   }
// }




export default Index
