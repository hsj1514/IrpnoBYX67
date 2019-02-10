
import axios from 'axios';

class SSRTest extends React.Component {
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

            <li style={{width : '300px', height : '150px', border : 'solid 1px',}}>
            <div>{todo.title}</div>
            <div>ㅈ</div>
            </li>
        )

        return (

                <ul style={{listStyleType : 'none',}}>

                  <div style={{}}>
                    {todoList}
                  </div>


                </ul>

        );
    }
}

export default SSRTest;



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
