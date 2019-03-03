import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import "./index.css";

function reducer(state = initState, action) {
  switch (action.type) {
    case "FLIP":
      return {
        isLightOn: !state.isLightOn
      };
    default:
      return state;
  }
}

const initState = { isLightOn: true };
const store = createStore(reducer);

class Room extends React.Component {
  flipLight = () => {
    this.props.dispatch({ type: "FLIP" });
  };

  render() {
    const lightedness = this.props.isLightOn ? "lit" : "dark";
    return (
      <div className={`room ${lightedness}`}>
        the room is {lightedness}
        <br />
        <button onClick={this.flipLight}>flip</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLightOn: state.isLightOn
  };
};
const ConnectedRoom = connect(mapStateToProps)(Room);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRoom />
  </Provider>,
  document.getElementById("root")
);
