import React from "react";
import { Link } from 'react-router-dom';
import history from '../history';

class loginForm extends React.Component {
	state = { email: '', password:'', checkbox:null };

  onFormSubmit = event => {
    event.preventDefault();

		// console.log("sdasd")
		//console.log(this.state.email,this.state.password)
		//this.props.onSubmit(this.state.term);
		history.push('/');
  };

  render() {
  return (
    <div className=".container-fluid">
      <div className="holder">
        <div style={{ float: "left" }}>
          <img
            src={require("../images/boys-286245_1920.png")}
            className="img-fluid first"
            alt="QS Learning"
          ></img>
        </div>
				<div className="border"></div>
        <div
          className="notholder"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "60%",
          }}
        >
          <div
            className="card"
            style={{
              width: "45%",
              padding: 3,
              backgroundColor: "rgb(250, 250,250)",
            }}
          >
            <div className="card-body">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={require("../images/QS Learning.png")}
                  className="img-fluid "
                  alt="QS Learning"
                ></img>
              </div>
              <h6
                className="card-subtitle mb-2 text-muted"
                style={{
                  margin: 7,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Welcome! Please login to continue.
              </h6>
              <form>
                <div>
                  <div className="input-group email" style={{ marginTop: 20 }}>
                    <div
                      className="input-group-prepend"
                      style={{ backgroundColor: "white", borderWidth: 0 }}
                    >
                      <span
                        className="input-group-text"
                        style={{ backgroundColor: "white", borderWidth: 0 }}
                      >
                        <i className="material-icons" style={{ fontSize: 18 }}>
                          mail_outline
                        </i>
                      </span>
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Username or Email"
                      style={{ borderWidth: 0 }}
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="input-group password" style={{ marginTop: 20 }}>
                  <div
                    className="input-group-prepend"
                    style={{ backgroundColor: "white", borderWidth: 0 }}
                  >
                    <span
                      className="input-group-text"
                      style={{ backgroundColor: "white", borderWidth: 0 }}
                    >
                      <i className="material-icons" style={{ fontSize: 18 }}>
                        lock_outline
                      </i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    style={{ borderWidth: 0 }}
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  />
                </div>

                <div
                  className="form-group form-check"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
										marginTop: 20,
                  }}
                >
                  <input
                    type="checkbox"
                    className="form-check-input checkbox1"
                    id="exampleCheck1"
                    style={{ marginTop: 0, borderWidth: 0 }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="exampleCheck1"
                    style={{ fontSize: 1 + "vw" }}
                  >
                    Remember Me
                  </label>
                  <a
                    href="https://www.w3schools.com"
                    className="anchor"
                    style={{ color: "inherit", fontSize: 0.9 + "vw" }}
                  >
                    Forget Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.onFormSubmit}
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "30%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ color: "#172B4D", fontSize: 1 + "vw", margin: 5 }}>
              or
            </div>

            <Link
              to="/"
              className="item"
              style={{ color: "rgb(106, 21, 142)" }}
            >
              Are you student?assesment form
            </Link>
          </div>
        </div>
        <div className="border"></div>
      </div>
    </div>
  );
}
}

export default loginForm;
