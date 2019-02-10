import App from "../pages/App.js"
import axios from 'axios';




const today = new Date();
const date = today.toISOString().substring(0, 10)

const year = Number(date.substring(0,4))
// console.log(year)

const month = Number(date.substring(5,7))
// console.log(month)

const day = Number(date.substring(8,10))
// console.log(day)




const Todo_Style = {
  borderTop : 'groove 1px',
  padding : '2px',
  margin : '3px 0px',
  height : '150px',
}

class TodayTodo extends React.Component {
    static async getInitialProps ({req}) {
        const response = await axios.get('http://localhost:5000/list');
        // console.log(response.data)
        return {
            todos : response.data
        }
    }

    render() {
        const { todos } = this.props;



        function select_Today_Todo_Id(todos){
          var i = 0;
          var list = [];
          while(i < todos.length){
            if(todos[i].day === day){
              list.push(todos[i].id)
            }
            i = i + 1;
          }
          return list;
        }

        function make_Today_Todo_List(){
          var i = 0;
          var todo = [];
          while(i < select_Today_Todo_Id(todos).length){
            todo.push(todos[select_Today_Todo_Id(todos)[i]-1]);
            i = i + 1;
          }
          return todo;
        }


        const today_todo = make_Today_Todo_List()
        console.log(today_todo)



        const todoList = today_todo.map(
            todo =>


            <li style={Todo_Style} className="list">
            <style jsx>{`
              .list:hover {
                background-color : #f2f2f2;
              }
            `}</style>
            <div style={{fontSize : '12px', paddingBottom : '5px', color : '#999',}}>{todo.year}/{todo.month}/{todo.day}</div>
            <div>{todo.title}</div>
            <p></p>
            <div style={{fontSize : '13px'}}>-{todo.description}</div>
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
