import axios from 'axios';


const BoxStyle = {
  width : '30px',
  height : '30px',
}


class Onclick extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        checkboxState: true,
      }
    }

  toggle(event) {
    this.setState({
      checkboxState: !this.state.checkboxState
    });
  }

  render() {
    const checkedOrNot = [];
    checkedOrNot.push(
      <div style={{color : 'red',}} key={checkedOrNot}>{this.state.checkboxState ? '미완료' : '완료!'}</div>
    );
    const checkbox = (
      <span>
        <input
        type="checkbox"
        style={BoxStyle}
        onClick={this.toggle.bind(this)}
        />

      </span>
    );

    const id = this.props;

//체크박스 체크하여 계획 완료 시, 해당 계획의 db checkboxState column의 값이 false로 전환됨
    if(this.state.checkboxState === false){
      console.log(id)
      axios.post('http://localhost:5000/checkstate' , id)
      .then((result) => {
      });
    }
//체크박스 체크를 해제하여 계획 미완료 상태로 바꿀 시, 해당 계획의 db checkboxState column의 값이 true로 전환됨
    if(this.state.checkboxState === true){
      console.log(id)
      axios.post('http://localhost:5000/uncheckstate' , id)
      .then((result) => {
      });
    }


    return (
      <div>
        <form >
          {checkbox}


        </form>
        {checkedOrNot}
      </div>
    );
  }
}


export default Onclick
