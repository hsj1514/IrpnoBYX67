import App from "../pages/App.js"
import axios from 'axios';
import Onclick from "../components/onclick.js"
import RepairButton from "../components/repairbutton.js"
import RemoveButton from "../components/removebutton.js"


const today = new Date();

const date = today.toISOString().substring(0, 10)

const year = Number(date.substring(0,4))

const month = Number(date.substring(5,7))

const day = Number(date.substring(8,10))

const Todo_Style = {
  borderTop : 'groove 1px',
  padding : '2px',
  margin : '3px 0px',
  height : '250px',
}


class TodayTodo extends React.Component {
    static async getInitialProps ({req}) {
        const response = await axios.get('http://localhost:5000/list');

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

        function Click(){
          const id = {id : this.id}
          axios.post('http://localhost:5000/delete',  id )
        }


        const today_todo = make_Today_Todo_List()
        console.log(today_todo)


        const todoList = today_todo.map(
            todo =>

            <li style={Todo_Style} className="list" key={todo.id}>
            <style jsx>{`
              .list:hover {
                background-color : #f2f2f2;
              }

              .remove {
                margin-left : 90%;
                margin-bottom : 10px;
              }

              .removebutton {
                width : 50px;
                color : black;
                font-size : 12px;
                padding : 5px;
                margin-left : 90%;
                margin-right : 20px;
                display : flex;
                flex-direction : column;
                align-items : center;
              }
            `}</style>
            <div style={{fontSize : '12px', paddingBottom : '5px', color : '#999',}}>{todo.year}/{todo.month}/{todo.day}</div>
            <div>{todo.title}</div>
            <p></p>
            <div style={{fontSize : '13px'}}>-{todo.description}</div>
            <button className="removebutton" onClick={Click.bind(todo)}>삭제</button>
            <p></p>
            <RepairButton />
            <Onclick id={todo.id} />
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
