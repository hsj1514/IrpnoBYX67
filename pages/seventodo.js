import App from "../pages/App.js"
import axios from 'axios';
import Onclick from "../components/onclick.js"
import RepairButton from "../components/repairbutton.js"
import RemoveButton from "../components/removebutton.js"

const today = new Date();
console.log(today)

const date = today.toISOString().substring(0, 10)
console.log(date)

const year = Number(date.substring(0,4))

const month = Number(date.substring(5,7))

const day = Number(date.substring(8,10)) + 15
console.log(day)


const Todo_Style = {
  borderTop : 'groove 1px',
  padding : '2px',
  margin : '3px 0px',
  height : '250px',
}


class SevenTodo extends React.Component {
    static async getInitialProps ({req}) {
        const response = await axios.get('http://localhost:5000/list');
        return {
            todos : response.data
        }
    }


    render() {

        const { todos } = this.props;



    function month_Day_Calculator(month){
      if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
        return 31
      } else if(month === 2){
        return 29
      } else {
        return 30
      }
    }

    console.log(month_Day_Calculator(month))


    function select_After_Nthday_Todo_Id(todos , month , n  , day){
      var i = 0;
      var list = [];

      if(todos[i].month === month){
        while(i < todos.length){
          if(todos[i].day === day+n && todos[i].month === month){
            list.push(todos[i].id)
          }
          i = i + 1;
        }
      }

      return list;
    }


    function new_select_After_Nthday_Todo_Id(todos , month , n  , day){
      var i = 0;
      var list = [];

      if(todos[i].month === month){
        while(i < todos.length){
          if(todos[i].day === day+n && todos[i].month === month + 1 ){
            list.push(todos[i].id)
          }
          i = i + 1;
        }
      }

      return list;
    }


    function sortingTodoId(){

      if(day + 7 > month_Day_Calculator(month)){


        var i = 1;
        var start = select_After_Nthday_Todo_Id(todos , month , 0 , day)

        while(i < month_Day_Calculator(month) - day + 1){
          start = start.concat(select_After_Nthday_Todo_Id(todos , month , i , day))
          i = i + 1;
        }



        var a = 1;
        while(a < 7 - month_Day_Calculator(month) + day + 1){
          start = start.concat(new_select_After_Nthday_Todo_Id(todos , month  , a-1 , 1))
          console.log(select_After_Nthday_Todo_Id(todos , month+1 , a-1 , 1))
          console.log(start)


          a = a + 1;


        }

        return start;

      } else{

        var i = 1;
        var start = select_After_Nthday_Todo_Id(todos , month , 0 , day)
        while(i < 8){
          start = start.concat(select_After_Nthday_Todo_Id(todos , month , i , day))
          i = i + 1;
        }
        return start;
      }

    }


    function make_Seven_Todo_List(){
      var i = 0;
      var todo = [];
      while(i < sortingTodoId().length){
        todo.push(todos[sortingTodoId()[i]-1]);
        i = i + 1;
      }
      return todo;
    }

    function Click(){

      console.log({id:this.id})

      const id = {id : this.id}
      axios.post('http://localhost:5000/delete',  id )
    }



    const seven_todo = make_Seven_Todo_List()
    console.log(seven_todo)


    const todoList = seven_todo.map(
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
        `}</style>
        <div style={{fontSize : '12px', paddingBottom : '5px', color : '#999',}}>{todo.year}/{todo.month}/{todo.day}</div>
        <div>{todo.title}</div>
        <p></p>
        <div style={{fontSize : '13px'}}>-{todo.description}</div>
        <button onClick={Click.bind(todo)}>삭제</button>
        <RemoveButton />
        <RepairButton />
        <Onclick />
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


export default SevenTodo;
