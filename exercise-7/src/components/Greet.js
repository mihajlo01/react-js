import React from "react";
import { connect } from "react-redux";
import { Course, When } from "./../actions/GreetAction";

class Greet extends React.Component {
  componentDidMount() {
    this.props.whatCourse();
    this.props.timeWhenTheCourseStarts();
  }
  render() {
    return (
      <div id="greet">
        <h2>
          I'm taking a course for {this.props.which} at {this.props.time}
        </h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    which: state.GreetReducer.which,
    time: state.GreetReducer.time,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    whatCourse: () => {
      dispatch(Course());
    },
    timeWhenTheCourseStarts: () => {
      dispatch(When());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Greet);
