import React from "react";

const loginForm = () => {
  return (
    <div className=".container-fluid">
      <div className="holder">
        <div style={{ float: "left" }}>
          <img
            src={require("../images/boys-286245_1920.png")}
            className="img-fluid first"
            alt="Responsive image"
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
            class="card"
            style={{
              width: "45%",
              padding: 3,
              backgroundColor: "rgb(250, 250,250)",
            }}
          >
            <div class="card-body">
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
                  alt="Responsive image"
                ></img>
              </div>
              <h6
                class="card-subtitle mb-2 text-muted"
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
                  <div class="form-group" style={{ marginTop: 20 }}>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Username or Email"
                    />
                  </div>
                </div>
                <div class="form-group" style={{ marginTop: 20 }}>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div
                  class="form-group form-check"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                    style={{ marginTop: 0 }}
                  />
                  <label
                    class="form-check-label"
                    for="exampleCheck1"
                    style={{ fontSize: 1.1 + "vw" }}
                  >
                    Remember Me
                  </label>
                  <a
                    href="https://www.w3schools.com"
                    className="anchor"
                    style={{ color: "inherit" }}
                  >
                    Forget Password?
                  </a>
                </div>
                <button type="submit" class="btn btn-primary">
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
            <a
              href="https://www.w3schools.com"
              className="anchor"
              style={{ color: "rgb(106, 21, 142)" }}
            >
              Are you student?assesment form
            </a>
          </div>
        </div>
				<div className="border"></div>
      </div>
    </div>
  );
};

export default loginForm;
