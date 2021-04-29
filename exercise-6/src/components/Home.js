import React from "react";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
    };
  }
  inputChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  addDate = (event) => {
    event.preventDefault();
    let data = [...this.state.data];
    data.push({
      day: this.state.day,
      month: this.state.month,
      year: this.state.year,
    });

    this.setState({
      data,
      day: 1,
      month: "January",
      year: 1900,
    });
    event.target.reset();
  };
  removeItem = (itemToRemove) => {
    var newItems = this.state.data.filter((_date) => {
      return _date !== itemToRemove;
    });
    this.setState({
      data: newItems,
    });
  };
  render() {
    console.log(this.state);
    return (
      <div id="home">
        <hr />
        <form onSubmit={this.addDate}>
          <label>Day:</label>
          <input
            name="day"
            type="number"
            onChange={this.inputChangeHandler}
            min="1"
            max="31"
          />
          <br />
          <br />
          <label>Month:</label>
          <select name="month" onChange={this.inputChangeHandler}>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="Augusy">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
          <br />
          <br />
          <label>Year:</label>
          <input
            name="year"
            type="number"
            onChange={this.inputChangeHandler}
            min="1900"
            max="2020"
          />
          <br />
          <br />
          <button>Add date</button>
        </form>
        <br />
        {
          <table border="1">
            <thead>
              <tr>
                <td>Day</td>
                <td>Month</td>
                <td>Year</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((date, i) => {
                return (
                  <tr key={i}>
                    <td>{date.day}</td>
                    <td>{date.month}</td>
                    <td>{date.year}</td>
                    <td onClick={this.removeItem.bind(null, date)}>Delete</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        }
      </div>
    );
  }
}
