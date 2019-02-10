import App from "../pages/App.js"
import axios from 'axios';


const today = new Date();

const date = today.toISOString().substring(0, 10)

const year = Number(date.substring(0,4))

const month = Number(date.substring(5,7))

const day = Number(date.substring(8,10))


const Todo_Style = {
  borderTop : 'groove 1px',
  padding : '2px',
  margin : '3px 0px',
  height : '150px',
}


class AllTodo extends React.Component {
    static async getInitialProps ({req}) {
        const response = await axios.get('http://localhost:5000/list');
        return {
            todos : response.data
        }
    }

    render() {
        const { todos } = this.props;


    function select_After_Nthday_Todo_Id(todos , n){
      var i = 0;
      var list = [];
      while(i < todos.length){
        if(todos[i].day === day+n){
          list.push(todos[i].id)
        }
        i = i + 1;
      }
      return list;
    }


    function sortingTodoId(){
      var i = 1;
      var start = select_After_Nthday_Todo_Id(todos , 0)
      while(i < 365000){
        start = start.concat(select_After_Nthday_Todo_Id(todos , i))
        i = i + 1;
      }
      return start;
    }

    console.log(sortingTodoId())



    function make_All_Todo_List(){
      var i = 0;
      var todo = [];
      while(i < sortingTodoId().length){
        todo.push(todos[sortingTodoId()[i]-1]);
        i = i + 1;
      }
      return todo;
    }



    const all_todo = make_All_Todo_List()
    console.log(all_todo)



    const todoList = all_todo.map(
        todo =>


        <li style={Todo_Style}>
        <div style={{fontSize : '12px',}}>{todo.year}/{todo.month}/{todo.day}</div>
        <div>{todo.title}</div>
        <div>{todo.description}</div>
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


export default AllTodo;
