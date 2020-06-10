import React from "react";
import SideNav from "./SideNav";
import Header from "./Header";
import EnquiryTable from "./EnquiryTable";
import JoinedTable from "./JoinedTable";


class Students extends React.Component {
  state = {
    backgroundColor1: "white",
    backgroundColor2: "#F1EFEF",
    textcolor1: "#6A158E",
    textcolor2: "#172B4D",
  };

  onButton1 = (event) => {
    this.setState({
      backgroundColor1: "white",
      backgroundColor2: "#F1EFEF",
      textcolor1: "#6A158E",
      textcolor2: "#172B4D",
    });
  };

  onButton2 = (event) => {
    this.setState({
      backgroundColor1: "#F1EFEF",
      backgroundColor2: "white",
      textcolor1: "#172B4D",
      textcolor2: "#6A158E",
    });
	};
	
	renderContent = () => {
		if(this.state.backgroundColor1 === "white"){
			return <EnquiryTable/>
		}else{
		return	<JoinedTable/>
		}
	}


  render() {
    return (
      <div>
        <Header
          image={require("../images/menu icons/student.png")}
          title="Students"
          sub_title="Welcome to QS Learning Students"
        />
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
                marginTop: 3 + "vw",
                paddingRight: 2 + "vw",
                height: "8%",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <button
                  type="submit"
                  className="btn"
                  style={{
                    width: 7 + "vw",
                    height: 3 + "vw",
                    marginLeft: 2 + "vw",
                    backgroundColor: this.state.backgroundColor1,
                    borderRadius: 5,
                    color: this.state.textcolor1,
                  }}
                  onClick={this.onButton1}
                >
                  Enquiry
                </button>
                <button
                  type="submit"
                  className="btn"
                  style={{
                    width: 7 + "vw",
                    height: 3 + "vw",
                    backgroundColor: this.state.backgroundColor2,
                    borderRadius: 5,
                    color: this.state.textcolor2,
                  }}
                  onClick={this.onButton2}
                >
                  Joined
                </button>
              </div>
              <small style={{ color: "#B8B8B8" }}>Home > Student</small>
            </div>
						{this.renderContent()}
          </div>
        </div>
      </div>
    );
  }
}

export default Students;
