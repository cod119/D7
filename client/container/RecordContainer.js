import React, {Component, cloneElement} from "react";
import {Router, Route, Link, browserHistory, hashHistory, IndexRoute} from "react-router";
import axios from "axios";

class RecordContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {data: null}
  };

  componentDidMount() {
    console.log("RecordContainer Mounted :)");
  }

  fetchOngoingProjects() {
    axios.get("/api/projects", {
      params: {
          type: "ongoing"
      }
    })
    .then((res) => {
      this.setState({data: res.data});
    })
  };

  _save(dataObject) {
    // dataObject should be below
    // {<keyname>: <value>}
    console.log("data in _save is ", dataObject);
    this.setState(dataObject);
  }

  saveDayDetail(id, onDay, text) {
    axios.post("/api/record", {
      id: id,
      onDay: onDay,
      text: text
    })
    .then((res) => {
      console.log("saveDayDetail success: ", res);
      this.goto("/record/complete")
    })
    .catch((err) => {
      console.error("Error occured while saving DayDetail");
    })
  };

  goto(url) {
    url = url !== undefined ? String(url) : "/";
    this.context.router.push(url);
  };

  render() {
    let injection = {};
    injection.goto = this.goto.bind(this);
    injection.state = this.state;
    injection._save = this._save.bind(this);
    injection.fetchOngoingProjects = this.fetchOngoingProjects.bind(this);
    injection.saveDayDetail = this.saveDayDetail.bind(this);



    let child = this.props.children && React.cloneElement(this.props.children, injection);

    return child;
  };
};

RecordContainer.contextTypes = {
  router: () => React.PropTypes.func.isRequired
};

export default RecordContainer
