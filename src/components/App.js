import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false, // whether to show the ball or not
      posi: 0, // x position in pixels
      ballPosition: { left: "0px" }
    };
    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  // ✅ Called when "Start" button is clicked
  buttonClickHandler() {
    this.setState({ renderBall: true });
  }

  // ✅ Handle Right Arrow key (move ball 5px right)
  handleKeyDown(event) {
    if (event.keyCode === 39) { // ArrowRight
      this.setState((prevState) => {
        const newPos = prevState.posi + 5;
        return {
          posi: newPos,
          ballPosition: { left: `${newPos}px` }
        };
      });
    }
  }

  // ✅ Add event listener after mounting
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  // ✅ Remove event listener when unmounting (best practice)
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  // ✅ Renders button or ball
  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;
