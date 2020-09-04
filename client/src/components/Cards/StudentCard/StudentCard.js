import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';
import React, {useState} from "react";
import API from "../../../utils/API";
import "../CardStyle/cards.css";


function StudentCard() {
  const [firstName, setFirstName] = useState();
  const [hours, setHours] = useState();
  const [lastName, setLastName] = useState();
  const [start, setStart] = useState();

  const handleSubmit = e => {
    e.preventDefault();

    API.createStudent({ firstName, lastName, hours, start });
    // console.log(firstName);
    // console.log(lastname);
    // console.log(hours);
    // console.log(start); 
    toast.notify ("Student added successfully!");
    document.getElementById("studentForm").reset();
  }



  return (
    <div id = "studentCard" className="card" style={{ width: "18rem", float: "left", border: "1px solid white",marginTop: "50px", opacity: ".95", height: "320px" }}>
      <div className="card-header" style={{ backgroundColor: "#194d30", color: "white", fontSize: "28px", }}>
        Add Student
      </div>
      <form id="studentForm" onSubmit={handleSubmit} type="submit">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <input onChange={e => setFirstName(e.target.value)} placeholder="First Name">
            </input>
          </li>
          <li className="list-group-item">
            <input onChange={e => setLastName(e.target.value)} placeholder="Last Name">
            </input>
          </li>
          <li className="list-group-item">
            <input onChange={e => setHours(e.target.value)} placeholder="Hours">
            </input>
          </li>
          <li className="list-group-item">
            <input onChange={e => setStart(e.target.value)} placeholder="Start">
            </input>
            <br />
            <input style={{ marginTop: "20px", backgroundColor: "#194d30", color: "white", borderRadius: "6px", border: ".5px solid white" }} type="submit"></input>
          </li>
        </ul>

      </form>
    </div>
  )
}
export default StudentCard