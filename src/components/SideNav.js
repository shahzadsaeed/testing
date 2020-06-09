import React from "react";

class SideNav extends React.Component {
  render() {
    return (
      <div style={{ width: "13%", height:'100%'}}>
        <div
          style={{ backgroundColor: "black", paddingTop: 20 }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 30,
            }}
          >
            <div
              style={{
                borderRadius: 5 + "px",
                backgroundColor: "white",
                width: "30%",
                padding: 10,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={require("../images/menu icons/Hover Icons/dashboard.png")}
                className="img-fluid"
                alt="QS Learning"
              ></img>
              <a
                href="https://www.w3schools.com"
                style={{ color: "inherit", fontSize: 9, marginTop:10 }}
              >
                Dashboard
              </a>
            </div>

            <div
              style={{
                borderRadius: 5 + "px",
                backgroundColor: "white",
                width: "30%",
                padding: 10,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={require("../images/menu icons/student.png")}
                className="img-fluid"
                alt="QS Learning"
              ></img>
              <a
                href="https://www.w3schools.com"
                style={{ color: "inherit", fontSize: 9, marginTop:10 }}
              >
                Students
              </a>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 30,
            }}
          >
            <div
              style={{
                borderRadius: 5 + "px",
                backgroundColor: "white",
                width: "30%",
                padding: 10,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={require("../images/menu icons/tutor.png")}
                className="img-fluid"
                alt="QS Learning"
              ></img>
              <a
                href="https://www.w3schools.com"
                style={{ color: "inherit", fontSize: 9, marginTop:10 }}
              >
                Tutors
              </a>
            </div>

            <div
              style={{
                borderRadius: 5 + "px",
                backgroundColor: "white",
                width: "30%",
                padding: 10,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={require("../images/menu icons/class.png")}
                className="img-fluid"
                alt="QS Learning"
              ></img>
              <a
                href="https://www.w3schools.com"
                style={{ color: "inherit", fontSize: 9, marginTop:10 }}
              >
                Classes
              </a>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 30,
            }}
          >
            <div
              style={{
                borderRadius: 5 + "px",
                backgroundColor: "white",
                width: "30%",
                padding: 10,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={require("../images/menu icons/catchup.png")}
                className="img-fluid"
                alt="QS Learning"
              ></img>
              <a
                href="https://www.w3schools.com"
                style={{ color: "inherit", fontSize: 9, marginTop:10 }}
              >
                Catch Up
              </a>
            </div>

            <div
              style={{
                borderRadius: 5 + "px",
                backgroundColor: "white",
                width: "30%",
                padding: 10,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={require("../images/menu icons/work.png")}
                className="img-fluid"
                alt="QS Learning"
              ></img>
              <a
                href="https://www.w3schools.com"
                style={{ color: "inherit", fontSize: 9, marginTop:10 }}
              >
                Work
              </a>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
							marginTop: 30,
							marginBottom:"52%"
            }}
          >
            <div
              style={{
                borderRadius: 5 + "px",
                backgroundColor: "white",
                width: "30%",
                padding: 10,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={require("../images/menu icons/Accounts.png")}
                className="img-fluid"
                alt="QS Learning"
              ></img>
              <a
                href="https://www.w3schools.com"
                style={{ color: "inherit", fontSize: 9, marginTop:10 }}
              >
                Accounts
              </a>
            </div>

            <div
              style={{
                borderRadius: 5 + "px",
                backgroundColor: "white",
                width: "30%",
                padding: 10,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={require("../images/menu icons/settings.png")}
                className="img-fluid"
                alt="QS Learning"
              ></img>
              <a
                href="https://www.w3schools.com"
                style={{ color: "inherit", fontSize: 9, marginTop:10 }}
              >
                Settings
              </a>
            </div>
          </div>

          <img
						src={require("../images/43122.png")}
						alt="QS Learning"
						style={{ width:"160%" }}
          ></img>
        </div>
      </div>
    );
  }
}

export default SideNav;

// <button
// class="button"
// style={{
// 	borderRadius: 5 + "px",
// 	backgroundColor: "white",
// 	borderColor: "white",
// 	width: "30%",
// 	padding: 10,
// }}
// >
// <div style={{ display: "flex", flexDirection: "column" }}>
// 	<i className="material-icons" style={{ fontSize: 18 }}>
// 		lock_outline
// 	</i>
// 	Dashboard
// </div>
// </button>

// <button
// class="button"
// style={{
// 	borderRadius: 5 + "px",
// 	backgroundColor: "white",
// 	borderColor: "white",
// 	width: "30%",
// 	padding: 10,
// }}
// >
// <div style={{ display: "flex", flexDirection: "column" }}>
// 	<i className="material-icons" style={{ fontSize: 18 }}>
// 		lock_outline
// 	</i>
// 	Dashboard
// </div>
// </button>
