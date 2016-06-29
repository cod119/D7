import React, {Component} from "react";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
  }

  render() {

    const buttonStyle = {
      display: "inline",
      marginRight: "25%"
    }

    const navigationStyle = {
      background: "#BF8C6F"
    }

    return (
      <div>
        <div style={navigationStyle}>
          <button style={buttonStyle}>side</button>
          <button style={buttonStyle} onClick={() => this.props.data.goto("/")}>D7</button>
          <button style={buttonStyle} onClick={() => this.props.data.goto("/write")}>write</button>
        </div>
        <div style={{display:"none"}}>
          Save Complete!
        </div>
      </div>
    );
  }
}

export default Navigation;