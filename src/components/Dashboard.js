import React from "react";
import SideNav from "./SideNav";
import Header from "./Header";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#FAFAFA",
          }}
        >
          <SideNav />
          <div
            style={{
              paddingLeft: 7 + "vw",
              width: "87%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                paddingTop: 1 + "vw",
                paddingRight: 2 + "vw",
                height: "8%",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: 9 + "vw" }}
              >
                Submit
              </button>

              <small style={{ color: "#B8B8B8" }}>Home > Tutor</small>
            </div>

            <div
              style={{
                paddingTop: 2 + "vw",
                paddingRight: 2 + "vw",
                height: "25%",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                className="boxEmpty"
                style={{ width: "20%", height: "100%" }}
              ></div>

              <div
                className="boxEmpty"
                style={{ width: "20%", height: "100%" }}
              ></div>

              <div
                className="boxEmpty"
                style={{ width: "20%", height: "100%" }}
              ></div>

              <div
                className="boxEmpty"
                style={{ width: "20%", height: "100%" }}
              ></div>
            </div>

            <div
              style={{
                paddingTop: 2 + "vw",
                paddingRight: 2 + "vw",
                height: "65%",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                className="boxEmpty"
                style={{
                  width: "65%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Dashboard Statistics
              </div>
              <div
                className="boxEmpty"
                style={{ width: "30%", height: "100%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
