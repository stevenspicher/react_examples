import Toast from 'react-bootstrap/Toast';
import React from 'react';

function List() {
    let infoObj = {
      fname: "bill",
      lname: "danza",
      role: "boss",
    }
    return (
  <Toast>
    <Toast.Body>{infoObj.fname} {infoObj.lname} is the {infoObj.role}.</Toast.Body>
  </Toast>
    )
  }

  export default List