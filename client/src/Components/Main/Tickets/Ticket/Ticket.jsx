import React, { Component } from "react";

class Ticket extends Component {
  render() {
    return ( <>
    <div className="tikets__tiket">
    <p className="tikets__tiket-title">Información</p>
    <p className="tikets__tiket-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quaerat debitis</p>
    <div className="tikets__tiket-status-approved" name="status" id="status">Status</div>
    </div>
    <div className="tikets__tiket">
    <p className="tikets__tiket-title">Información</p>
    <p className="tikets__tiket-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quaerat debitis</p>
    <div className="tikets__tiket-status-denied" name="status" id="status">Status</div>
    </div>
    <div className="tikets__tiket">
    <p className="tikets__tiket-title">Información</p>
    <p className="tikets__tiket-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quaerat debitis</p>
    <div className="tikets__tiket-status-processing" name="status" id="status">Status</div>
    </div>
    </>
    )
  }
}

export default Ticket;
