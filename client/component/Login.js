import React, {Component} from "react";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  login(e) {
    e.preventDefault();
    axios.post("/api/login", {
      email : this.state.email,
      password: this.state.password
    }).then((res) => {
      console.log("Login success: ", res);
      this.props.goto("/home");
    }).catch((err)=>{
      console.error("Error: Login failed: ", err);
      this.setState({
        email: "",
        password: ""
      });
    });
  };

  handleChange(what, event) {
    let data = {};
    data[what] = event.target.value;
    this.setState(data);
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.login.bind(this)}>
          <label for="email">Email</label>
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange.bind(this, "email")} required/><br />
          <label for="password">Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange.bind(this, "password")} required/><br />
          <button type="submit">로그인하기</button>
        </form>
      </div>

    );
  }

}

export default Login;