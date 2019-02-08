import fetch from 'isomorphic-unfetch'
import App from './App.js';


const Index = () => (
  <App />
)


Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:5000/list')
  const data = await res.json()



  // console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}


export default Index
