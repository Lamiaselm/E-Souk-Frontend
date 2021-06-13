import React from "react";
import Table from "react-bootstrap/Table";
import NavBar from "./NavBar";

export default function Cart() {
  return (
    <div>
      <NavBar />
      <div className="cart-container">
        <Table striped bordered>
          <thead style={{ background: "white" }}>
            <tr>
              <th></th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tr></tr>
          <tbody>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
