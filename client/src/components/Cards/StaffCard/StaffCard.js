import React, { useState } from "react";
import API from "../../../utils/API";
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';

function StaffCard() {

  const [firstName, setFirstname] = useState();
  const [firstName, setFirstName] = useState();
  const [email, setEmail] = useState();
  const [lastName, setLastName] = useState();

  const handleSubmit = e => {
    e.preventDefault();

    toast.notify ("Staff added successfully!");

    API.email({ firstName, lastName, email });

    API.saveUser({
      role: "Teacher",
      email: email,
      first_name: firstName,
      last_name: lastName,
      school: "req.user.school,"
    })
    document.getElementById("staffForm").reset();
  }
  
  return (

    <div className="card" style={{ width: "18rem", float: "left", border: "1px solid white", marginLeft: "50px", marginTop: "50px", opacity: ".95" }}>
      <div className="card-header" style={{ backgroundColor: "darkslategray", color: "white" }}>
        Add Staff
      </div>
      <form id="staffForm" onSubmit={handleSubmit} type="submit">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <input onChange={e => setFirstName(e.target.value)} id="staffFirstName" required="true" placeholder="First Name">
            </input>
          </li>
          <li className="list-group-item">
            <input onChange={e => setLastName(e.target.value)} required="true" id="staffLastName" placeholder="Last Name">
            </input>
          </li>
          <li className="list-group-item">
            <input onChange={e => setEmail(e.target.value)} required="true" id="staffEmail" placeholder="Email" type="email">
            </input>
          </li>
          <li>
            <br />
            <br />
            <input style={{ marginTop: "20px", backgroundColor: "darkslategray", color: "white", borderRadius: "6px", border: ".5px solid white" }} type="submit"></input>
          </li>
        </ul>
      </form>
    </div>

  )
}
export default StaffCard