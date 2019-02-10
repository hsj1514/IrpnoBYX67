import axios from 'axios';
import fetch from 'isomorphic-unfetch'


axios.get('http://localhost:5000/list')
.then(function(response){
  console.log(response.data[1].title)
  let list = response.data
  console.log(list)
})

function Todo(){


  return (
    <div>지나죽고싶다</div>
  )
}





export default Todo




// import Layout from '../components/Layout';
// import axios from 'axios';
//
// class SSRTest extends React.Component {
//     static async getInitialProps ({req}) {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//         return {
//             users: response.data
//         }
//     }
//
//     render() {
//         const { users } = this.props;
//
//         const userList = users.map(
//             user => <li key={user.id}>{user.username}</li>
//         )
//
//         return (
//             <Layout>
//                 <ul>
//                     {userList}
//                 </ul>
//             </Layout>
//         );
//     }
// }
//
// export default SSRTest;
