import React from "react";

class EnquiryForm extends React.Component {
  render() {
    return (
      <div className=".container-fluid">
        <div className="holder">
          <div style={{ float: "left" }}>
            <img
              src={require("../images/1.png")}
              className="img-fluid first"
              alt="QS Learning"
            ></img>
          </div>
          <div className="border" style={{ height:768+"px" }}></div>
          <div style={{ width: "60%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginLeft: 10 }}>
                <h4>Enquiry Form</h4>
                <h6>Hey there! Let's get started.</h6>
              </div>
              <img
                src={require("../images/QS Learning.png")}
                className="img-fluid "
                alt="QS Learning"
                style={{ marginRight: 20 }}
              ></img>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                // alignItems: "center",
                width: "100%",
                height: "100%",
                marginTop: 30,
                // borderStyle: "solid",
                // borderWidth: 1,
              }}
            >
              <div
                className="card"
                style={{
                  width: "90%",
                  height: "90%",
                  padding: 3,
                  backgroundColor: "rgb(250, 250,250)",
                  //borderStyle: "solid",
                  //borderWidth: 1,
                }}
              >
                <div style={{ padding: 20 }}>
                  <h6>How would child like to take tuition?</h6>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 15,
                    }}
                  >
                    <div class="form-check" style={{ display: "flex" }}>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                        checked
                      />
                      <label
                        class="form-check-label"
                        for="exampleRadios1"
                        style={{ marginRight: 100, fontSize: 0.9 + "vw" }}
                      >
                        Online
                      </label>
                    </div>
                    <div class="form-check" style={{ display: "flex" }}>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="option2"
                      />
                      <label
                        class="form-check-label"
                        for="exampleRadios2"
                        style={{ fontSize: 0.9 + "vw" }}
                      >
                        In Center Tution
                      </label>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    borderStyle: "dashed",
                    borderWidth: 0,
                    borderTopWidth: 1,
                  }}
                ></div>

                <div style={{ padding: 20 }}>
                  <h5 style={{ color: "#9333BB" }}>Guardian Detail</h5>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div class="form-group" style={{ width: "45%" }}>
                      <label
                        for="exampleInputEmail1"
                        style={{ fontWeight: "bold" }}
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        class="form-control inputfeild"
                        id="exampleInputEmail1"
                        placeholder="First Name"
                      />
                    </div>
                    <div class="form-group" style={{ width: "45%" }}>
                      <label
                        for="exampleInputPassword1"
                        style={{ fontWeight: "bold" }}
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        class="form-control inputfeild"
                        id="exampleInputPassword1"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div class="form-group" style={{ width: "45%" }}>
                      <label
                        for="exampleInputEmail1"
                        style={{ fontWeight: "bold" }}
                      >
                        Email Address
                      </label>
                      <input
                        type="text"
                        class="form-control inputfeild"
                        id="exampleInputEmail1"
                        placeholder="Email Address"
                      />
                    </div>
                    <div class="form-group" style={{ width: "45%" }}>
                      <label
                        for="exampleInputPassword1"
                        style={{ fontWeight: "bold" }}
                      >
                        Contact Number
                      </label>
                      <input
                        type="text"
                        class="form-control inputfeild"
                        id="exampleInputPassword1"
                        placeholder="Contact Number"
                      />
                    </div>
                  </div>

                  <div style={{ marginTop: 12 }}>
                    <label htmlFor="selection1" style={{ fontWeight: "bold" }}>
                      Country
                    </label>
                    <select class="form-control inputfeild" id="selection1">
                      <option value="" disabled selected>
                        Choose Country
                      </option>
                      <option>Pakistan</option>
                      <option>India</option>
                      <option>America</option>
                      <option>China</option>
                      <option>Dubai</option>
                    </select>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: 20,
                    }}
                  >
                    <div style={{ width: "45%" }}>
                      <label
                        htmlFor="selection1"
                        style={{ fontWeight: "bold" }}
                      >
                        City
                      </label>
                      <select class="form-control inputfeild" id="selection1">
                        <option value="" disabled selected>
                          Choose City
                        </option>
                        <option>Lahore</option>
                        <option>Karachi</option>
                        <option>Islamabad</option>
                        <option>Rawalpindi</option>
                        <option>Faisalabad</option>
                      </select>
                    </div>

                    <div class="form-group" style={{ width: "45%" }}>
                      <label
                        for="exampleInputPassword1"
                        style={{ fontWeight: "bold" }}
                      >
                        Post Code
                      </label>
                      <input
                        type="text"
                        class="form-control inputfeild"
                        id="exampleInputPassword1"
                        placeholder="Post Code"
                      />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    borderStyle: "dashed",
                    borderWidth: 0,
                    borderTopWidth: 1,
                  }}
                ></div>

                <div style={{ padding: 20 }}>
                  <h5 style={{ color: "#9333BB" }}>Student Details</h5>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div class="form-group" style={{ width: "45%" }}>
                      <label
                        for="exampleInputEmail1"
                        style={{ fontWeight: "bold" }}
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        class="form-control inputfeild"
                        id="exampleInputEmail1"
                        placeholder="First Name"
                      />
                    </div>
                    <div class="form-group" style={{ width: "45%" }}>
                      <label
                        for="exampleInputPassword1"
                        style={{ fontWeight: "bold" }}
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        class="form-control inputfeild"
                        id="exampleInputPassword1"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ width: "45%" }}>
                      <label
                        htmlFor="selection1"
                        style={{ fontWeight: "bold" }}
                      >
                        Year at School
                      </label>
                      <select class="form-control inputfeild" id="selection1">
                        <option value="" disabled selected>
												Choose years
                        </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>

                    <div class="form-group" style={{ width: "45%" }}>
                      <label
                        for="exampleInputPassword1"
                        style={{ fontWeight: "bold" }}
                      >
                        Gender
                      </label>
                      <input
                        type="text"
                        class="form-control inputfeild"
                        id="exampleInputPassword1"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                </div>

                <div style={{ padding:20 }}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  // onClick={this.onFormSubmit}
                >
                  Submit
                </button>
								</div>	
              </div>
            </div>
          </div>
          <div className="border" style={{ height:768+"px" }}></div>
        </div>
      </div>
    );
  }
}

export default EnquiryForm;

// borderStyle: "solid",
// borderWidth: 1,
