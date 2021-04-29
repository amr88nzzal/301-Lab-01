import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class infoCard extends React.Component {

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.close} style={{ width: '25elm' }}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.imgUrl} alt ={this.props.title} className="infoImg"  />
          <p>{this.props.Description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
export default infoCard