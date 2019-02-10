import App from "../pages/App.js"
import axios from 'axios';

const Todo_Style = {
  borderTop : 'groove 1px',
  padding : '2px',
  margin : '3px 0px',
  height : '150px',
}

class TodayTodo extends React.Component {
    static async getInitialProps ({req}) {
        const response = await axios.get('http://localhost:5000/list');
        console.log(response.data)
        return {
            todos : response.data
        }
    }

    render() {
        const { todos } = this.props;

        const todoList = todos.map(
            todo =>

            <li style={Todo_Style}>
            <div>{todo.title}</div>
            </li>
        )

        return (
          <App>
                <ul style={{listStyleType : 'none', paddingLeft : '0',}}>

                  <div style={{}}>
                    {todoList}
                  </div>


                </ul>
          </App>

        );
    }
}

export default TodayTodo;



// class SSRTest extends React.Component {
//     static async getInitialProps ({req}) {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//         console.log(response.data)
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
