import fetch from 'isomorphic-unfetch'
import App from './App.js';
import axios from 'axios';

const Index = () => (
  <App />
)


Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:5000/list')
  const data = await res.json()

  return {
    shows: data
  }
}


export default Index
