import React, { useState } from "react";
import API from "../../../utils/API";
import keyGen from "../../../utils/keyGen";
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';
import "../CardStyle/cards.css";


function StaffCard() {

  const [firstName, setFirstName] = useState();
  const [email, setEmail] = useState();
  const [lastName, setLastName] = useState();
  const [role, setRole] = useState("Teacher");

  const handleSubmit = e => {
    e.preventDefault();
    var key = keyGen.generate()
    toast.notify ("Staff added successfully!");

    API.email({ firstName, lastName, email, role, key });
console.log(role)
    API.saveUser({
      role: role,
      email: email,
      first_name: firstName,
      last_name: lastName,
      school: "req.user.school,",
      key: key
    })
    document.getElementById("staffForm").reset();
  }
  
  return (

    <div id = "staffCard" className="card" style={{ width: "18rem", float: "left", border: "1px solid white", marginRight: "40px", marginTop: "50px", opacity: ".95", height: "320px" }}>
      <div className="card-header" style={{ backgroundColor: "#194d30", color: "white", fontSize: "28px", }}>
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
            <input style={{ marginTop: "35px", backgroundColor: "#194d30", color: "white", borderRadius: "6px", border: ".5px solid white" }} type="submit"></input>
          </li>
        </ul>
      </form>
    </div>

  )
}
export default StaffCard