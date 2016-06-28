import React, {Component, cloneElement} from "react";
import Navigation from "./Navigation";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { list: null };
  }

  componentDidMount() {
    // fetch all projects
    console.log("App Mounted");
  }

  componentWillUpdate() {
    console.log("App rerenderd");
    console.log("Current State: ", this.state);
  }



  render() {
    const injection = {};
    Object.assign(injection, this.props);

    const child = this.props.children && React.cloneElement(this.props.children, injection);

    return (
      <div>
        <Navigation />
        {child}
      </div>
    );
  }
}

export default App;
