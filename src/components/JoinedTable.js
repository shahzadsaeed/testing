import React from "react";
import { Button, Modal } from "react-bootstrap";

class JoinedTable extends React.Component {
  constructor() {
    super();
    this.state = {
      showHide: false,
    };
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  render() {
    return (
      <div className="tablediv">
        <table
          className="table table-striped"
          style={{ marginTop: 5, width: "100%" }}
        >
          <thead>
            <tr>
              <td scope="col" style={{ fontSize: 13 + "px", color: "#8898AA" }}>
                SrNo.
              </td>
              <td scope="col" style={{ fontSize: 13 + "px", color: "#8898AA" }}>
                Name
              </td>
              <td scope="col" style={{ fontSize: 13 + "px", color: "#8898AA" }}>
                Father Name
              </td>
              <td scope="col" style={{ fontSize: 13 + "px", color: "#8898AA" }}>
                Phone Number
              </td>
              <td scope="col" style={{ fontSize: 13 + "px", color: "#8898AA" }}>
                Class
              </td>
              <td scope="col" style={{ fontSize: 13 + "px", color: "#8898AA" }}>
                Assessment
              </td>
              <td scope="col" style={{ fontSize: 13 + "px", color: "#8898AA" }}>
                Discount
              </td>
              <td scope="col" style={{ fontSize: 13 + "px", color: "#8898AA" }}>
                Class and Tutor Assigned
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontSize: 13 + "px" }}>01</td>
              <td>
                <a
                  href="https://www.w3schools.com"
                  style={{
                    color: "#6A158E",
                    fontWeight: "bold",
                    fontSize: 13 + "px",
                  }}
                >
                  Quratulain Saqib
                </a>
              </td>
              <td style={{ fontSize: 13 + "px" }}>John Smith</td>
              <td style={{ fontSize: 13 + "px" }}>+9203401234567</td>
              <td style={{ fontSize: 13 + "px" }}>A Level</td>
              <td style={{ color: "blue", fontSize: 13 + "px" }}>Open</td>
              <td style={{ fontSize: 13 + "px" }}>
                <button
                  className="btn"
                  onClick={() => this.handleModalShowHide()}
                  style={{
                    backgroundColor: "#0EBDDFF7",
                    color: "white",
                    fontSize: 13,
                  }}
                >
                  <i
                    className="fa fa-tag"
                    style={{ marginRight: 5, fontSize: 13 }}
                  ></i>
                  Discount
                </button>
              </td>
              <td>
                <button
                  className="btn"
                  style={{
                    backgroundColor: "#F0CB00",
                    fontSize: 13,
                  }}
                >
                  Class and Tutor Assigned
                </button>
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: 13 + "px" }}>01</td>
              <td>
                <a
                  href="https://www.w3schools.com"
                  style={{
                    color: "#6A158E",
                    fontWeight: "bold",
                    fontSize: 13 + "px",
                  }}
                >
                  Quratulain Saqib
                </a>
              </td>
              <td style={{ fontSize: 13 + "px" }}>John Smith</td>
              <td style={{ fontSize: 13 + "px" }}>+9203401234567</td>
              <td style={{ fontSize: 13 + "px" }}>A Level</td>
              <td style={{ color: "blue", fontSize: 13 + "px" }}>Open</td>
              <td style={{ fontSize: 13 + "px" }}>
                <button
									className="btn"
									onClick={() => this.handleModalShowHide()}
                  style={{
                    backgroundColor: "#0EBDDFF7",
                    color: "white",
                    fontSize: 12,
                  }}
                >
                  <i
                    className="fa fa-tag"
                    style={{ marginRight: 5, fontSize: 12 }}
                  ></i>
                  Discount
                </button>
              </td>
              <td>
                <button
                  className="btn"
                  style={{
                    backgroundColor: "#F0CB00",
                    fontSize: 12,
                  }}
                >
                  Class and Tutor Assigned
                </button>
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: 13 + "px" }}>01</td>
              <td>
                <a
                  href="https://www.w3schools.com"
                  style={{
                    color: "#6A158E",
                    fontWeight: "bold",
                    fontSize: 13 + "px",
                  }}
                >
                  Quratulain Saqib
                </a>
              </td>
              <td style={{ fontSize: 13 + "px" }}>John Smith</td>
              <td style={{ fontSize: 13 + "px" }}>+9203401234567</td>
              <td style={{ fontSize: 13 + "px" }}>A Level</td>
              <td style={{ color: "blue", fontSize: 13 + "px" }}>Open</td>
              <td style={{ fontSize: 13 + "px" }}>
                <button
									className="btn"
									onClick={() => this.handleModalShowHide()}
                  style={{
                    backgroundColor: "#0EBDDFF7",
                    color: "white",
                    fontSize: 13,
                  }}
                >
                  <i
                    className="fa fa-tag"
                    style={{ marginRight: 5, fontSize: 13 }}
                  ></i>
                  Discount
                </button>
              </td>
              <td>
                <button
                  className="btn"
                  style={{
                    backgroundColor: "#F0CB00",
                    fontSize: 13,
                  }}
                >
                  Class and Tutor Assigned
                </button>
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: 13 + "px" }}>01</td>
              <td>
                <a
                  href="https://www.w3schools.com"
                  style={{
                    color: "#6A158E",
                    fontWeight: "bold",
                    fontSize: 13 + "px",
                  }}
                >
                  Quratulain Saqib
                </a>
              </td>
              <td style={{ fontSize: 13 + "px" }}>John Smith</td>
              <td style={{ fontSize: 13 + "px" }}>+9203401234567</td>
              <td style={{ fontSize: 13 + "px" }}>A Level</td>
              <td style={{ color: "blue", fontSize: 13 + "px" }}>Open</td>
              <td style={{ fontSize: 13 + "px" }}>
                <button
									className="btn"
									onClick={() => this.handleModalShowHide()}
                  style={{
                    backgroundColor: "#0EBDDFF7",
                    color: "white",
                    fontSize: 13,
                  }}
                >
                  <i
                    className="fa fa-tag"
                    style={{ marginRight: 5, fontSize: 13 }}
                  ></i>
                  Discount
                </button>
              </td>
              <td>
                <button
                  className="btn"
                  style={{
                    backgroundColor: "#F0CB00",
                    fontSize: 13,
                  }}
                >
                  Class and Tutor Assigned
                </button>
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: 13 + "px" }}>01</td>
              <td>
                <a
                  href="https://www.w3schools.com"
                  style={{
                    color: "#6A158E",
                    fontWeight: "bold",
                    fontSize: 13 + "px",
                  }}
                >
                  Quratulain Saqib
                </a>
              </td>
              <td style={{ fontSize: 13 + "px" }}>John Smith</td>
              <td style={{ fontSize: 13 + "px" }}>+9203401234567</td>
              <td style={{ fontSize: 13 + "px" }}>A Level</td>
              <td style={{ color: "blue", fontSize: 13 + "px" }}>Open</td>
              <td style={{ fontSize: 13 + "px" }}>
                <button
									className="btn"
									onClick={() => this.handleModalShowHide()}
                  style={{
                    backgroundColor: "#0EBDDFF7",
                    color: "white",
                    fontSize: 13,
                  }}
                >
                  <i
                    className="fa fa-tag"
                    style={{ marginRight: 5, fontSize: 13 }}
                  ></i>
                  Discount
                </button>
              </td>
              <td>
                <button
                  className="btn"
                  style={{
                    backgroundColor: "#F0CB00",
                    fontSize: 13,
                  }}
                >
                  Class and Tutor Assigned
                </button>
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: 13 + "px" }}>01</td>
              <td>
                <a
                  href="https://www.w3schools.com"
                  style={{
                    color: "#6A158E",
                    fontWeight: "bold",
                    fontSize: 13 + "px",
                  }}
                >
                  Quratulain Saqib
                </a>
              </td>
              <td style={{ fontSize: 13 + "px" }}>John Smith</td>
              <td style={{ fontSize: 13 + "px" }}>+9203401234567</td>
              <td style={{ fontSize: 13 + "px" }}>A Level</td>
              <td style={{ color: "blue", fontSize: 13 + "px" }}>Open</td>
              <td style={{ fontSize: 13 + "px" }}>
                <button
									className="btn"
									onClick={() => this.handleModalShowHide()}
                  style={{
                    backgroundColor: "#0EBDDFF7",
                    color: "white",
                    fontSize: 13,
                  }}
                >
                  <i
                    className="fa fa-tag"
                    style={{ marginRight: 5, fontSize: 13 }}
                  ></i>
                  Discount
                </button>
              </td>
              <td>
                <button
                  className="btn"
                  style={{
                    backgroundColor: "#F0CB00",
                    fontSize: 13,
                  }}
                >
                  Class and Tutor Assigned
                </button>
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: 13 + "px" }}>01</td>
              <td>
                <a
                  href="https://www.w3schools.com"
                  style={{
                    color: "#6A158E",
                    fontWeight: "bold",
                    fontSize: 13 + "px",
                  }}
                >
                  Quratulain Saqib
                </a>
              </td>
              <td style={{ fontSize: 13 + "px" }}>John Smith</td>
              <td style={{ fontSize: 13 + "px" }}>+9203401234567</td>
              <td style={{ fontSize: 13 + "px" }}>A Level</td>
              <td style={{ color: "blue", fontSize: 13 + "px" }}>Open</td>
              <td style={{ fontSize: 13 + "px" }}>
                <button
									className="btn"
									onClick={() => this.handleModalShowHide()}
                  style={{
                    backgroundColor: "#0EBDDFF7",
                    color: "white",
                    fontSize: 13,
                  }}
                >
                  <i
                    className="fa fa-tag"
                    style={{ marginRight: 5, fontSize: 13 }}
                  ></i>
                  Discount
                </button>
              </td>
              <td>
                <button
                  className="btn"
                  style={{
                    backgroundColor: "#F0CB00",
                    fontSize: 13,
                  }}
                >
                  Class and Tutor Assigned
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div
          style={{
            padding: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p>Total Enqries</p>
            <b style={{ color: "#6A158E", marginLeft: 5 }}>35</b>
          </div>
          <div className="pagination">
            <a href="#">&laquo;</a>
            <a href="#">1</a>
            <a href="#" className="active">
              2
            </a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#">&raquo;</a>
          </div>
        </div>

        <div>
          <Modal
            show={this.state.showHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header
              closeButton
              onClick={() => this.handleModalShowHide()}
            >
              <Modal.Title style={{ marginLeft: "40%", color: "#6A158E" }}>
                Discount Offers
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                      id="button-addon2"
                      style={{ backgroundColor: "#9333BB", color: "white" }}
                    >
                      Add
                    </button>
                  </div>
                </div>

                <div  className="modalBody" style={{ display: "flex", flexDirection: "row", marginBottom:10 }}>
                  <div style={{ paddingTop:10,paddingLeft:5,paddingRight:5, backgroundColor:'#F9F9F9',display: "flex" }}>
                    <b style={{ marginTop:5 }}>10%</b>
                  </div>
                  <div style={{ paddingTop:14,paddingLeft:5,paddingRight:5, }}>
                    <p>Discount on student first registration</p>
                  </div>
                  <div style={{ marginLeft:"44%", paddingTop:10,paddingLeft:5,paddingRight:5, }}>
                    <div style={{ padding:6, backgroundColor:'#F1EFEF' }}>12345</div>
                  </div>
                </div>

								<div  className="modalBody" style={{ display: "flex", flexDirection: "row", marginBottom:10 }}>
                  <div style={{ paddingTop:10,paddingLeft:5,paddingRight:5, backgroundColor:'#F9F9F9',display: "flex" }}>
                    <b style={{ marginTop:5 }}>10%</b>
                  </div>
                  <div style={{ paddingTop:14,paddingLeft:5,paddingRight:5, }}>
                    <p>Discount on student first registration</p>
                  </div>
                  <div style={{ marginLeft:"44%", paddingTop:10,paddingLeft:5,paddingRight:5, }}>
                    <div style={{ padding:6, backgroundColor:'#F1EFEF' }}>12345</div>
                  </div>
                </div>

								<div  className="modalBody" style={{ display: "flex", flexDirection: "row", marginBottom:10 }}>
                  <div style={{ paddingTop:10,paddingLeft:5,paddingRight:5, backgroundColor:'#F9F9F9',display: "flex" }}>
                    <b style={{ marginTop:5 }}>10%</b>
                  </div>
                  <div style={{ paddingTop:14,paddingLeft:5,paddingRight:5, }}>
                    <p>Discount on student first registration</p>
                  </div>
                  <div style={{ marginLeft:"44%", paddingTop:10,paddingLeft:5,paddingRight:5, }}>
                    <div style={{ padding:6, backgroundColor:'#F1EFEF' }}>12345</div>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    );
  }
}

export default JoinedTable;
