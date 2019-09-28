import React from 'react';
import moment from 'moment'

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().format('MMMM Do YYYY, h:mm:ss a'),
      disableButton : false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  addInterval(count) {
    var c = count
    this.intervalID = setInterval(
      () => { this.tick(c)
        c = parseInt(c) + parseInt(count)
       },
      2000
    );
  }

  tick(count) {
    this.setState({
      time: moment().subtract(count, 'hours').format('MMMM Do YYYY, h:mm:ss a')
    });
  }

  handleChange(e) {
    this.setState({
      count: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.addInterval(this.state.count)
    this.setState({
      disableButton : true
    })
  }

  render() {
  return (
    <div className="section">
      <form className="form-inline">
        <div className="form-group">
          <label className="control-label" htmlFor="inputCounter">Enter number</label>
          <input type="number" className="form-control" id="inputCounter" placeholder="Enter number" onChange={this.handleChange} />
        </div>
        <button disabled= {this.state.disableButton } type="submit" className="btn btn-primary" onClick ={  this.handleSubmit }>Submit</button>
      </form>
      <p className="section">
        The time is {this.state.time}.
      </p>
    </div>
  );
}
}