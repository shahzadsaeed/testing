import React from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const Modall = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={showModal}>Display Modal</button>
			<Modal 
			show={isOpen} 
			onHide={hideModal}
			size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
			>
        <Modal.Header>
          <Modal.Title  style={{ marginLeft:"40%", color:"#6A158E" }}>Discount Offers</Modal.Title>
        </Modal.Header>
				<Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      </Modal>
    </>
  );
};

export default Modall;