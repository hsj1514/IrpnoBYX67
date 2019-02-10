import axios from 'axios';

const BoxStyle = {
  width : '30px',
  height : '30px',

}

class Onclick extends React.Component {
  constructor(props) {
      super(props);
      /* set the initial checkboxState to true */
      this.state = {
        checkboxState: true,
      }
    }
    /* prevent form submission from reloading the page */
  onSubmit(event) {
      event.preventDefault();

      const { checkboxState } = this.state;

    axios.post('http://localhost:5000/check', { checkboxState })
    .then((result) => {
    });

    }
    /* callback to change the checkboxState to false when the checkbox is checked */
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
        <label>Checkbox</label>
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
// ReactDOM.render(<App />, document.getElementById("root"));
