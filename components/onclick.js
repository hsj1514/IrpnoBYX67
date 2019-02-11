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
  onSubmit(event) {
      event.preventDefault();

      const { checkboxState } = this.state;

    axios.post('http://localhost:5000/check', { checkboxState })
    .then((result) => {
    });

    }
  toggle(event) {
    this.setState({
      checkboxState: !this.state.checkboxState
    });
  }
  render() {
    const checkedOrNot = [];
    checkedOrNot.push(
      <p>{this.state.checkboxState ? '미완료' : '완료!'}</p>
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

    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          {checkbox}
          <button type="submit">(미)완료상태 저장</button>
        </form>
        {checkedOrNot}
      </div>
    );
  }
}

export default Onclick
