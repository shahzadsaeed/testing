import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "20%",
          display: "flex",
					flexDirection: "row",
					// borderWidth:1,
					// borderStyle:"solid"
        }}
      >
        <div style={{ padding: 10, marginTop:30}}>
          <img
            src={require("../images/QS Learning.png")}
            className="img-fluid "
            alt="QS Learning"
          ></img>
        </div>

				<div style={{ display: "flex", justifyContent:'space-between', width:"100%" }} >
        <div style={{ padding: 30, marginLeft:5 + "vw" }}>
          <div
            style={{ display: "flex", flexDirection: "row", marginBottom: 0 }}
          >
            <img
              src={require("../images/menu icons/dashboard.png")}
              className="img-fluid"
              alt="QS Learning"
              style={{ width: 30, height: 30 }}
            ></img>
            <h5 style={{ color: "#3F475D", marginLeft: 10, marginTop: 5 }}>
              Dashboard
            </h5>
          </div>
          <small
            style={{ fontSize: 10, color: "#B8B8B8", position: "absolute" }}
          >
            Welcome to QS Learning dashboard
          </small>
        </div>

        <div style={{ paddingTop: 30, marginRight: 50 }}>
          <i class="far fa-bell" style={{ marginRight: 10 }}></i>
          <img
            src={require("../images/pf.jpg")}
            className="img-fluid"
            alt="QS Learning"
            style={{ width: 25, height: 25, borderRadius: 25, marginRight: 5 }}
          ></img>
          <small style={{ color: "#6A158E", fontWeight: "bold" }}>
            Quratulain Saqib
          </small>
        </div>
				</div>
      </div>
    );
  }
}

// borderStyle: "solid",
// borderWidth: 1,

export default Header;
