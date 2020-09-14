import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
import keyGen from "../../../utils/keyGen";
import "../CardStyle/cards.css";
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';

function GuardianCard() {

  const [firstName, setFirstname] = useState();
  const [email, setEmail] = useState();
  const [lastName, setLastName] = useState();
  const [student, setStudent] = useState();
  const [studentData, setStudentData] = useState();
  const role = "Guardian";

  async function getStudents(){
    let studentPlaceholder = await API.getStudents();
    if(studentPlaceholder && studentPlaceholder.data){
        setStudentData(studentPlaceholder.data)
        console.log(studentPlaceholder.data)
    }
}

//Sets currently selected students ID as 'student'
function studentSelect (e) {
  // console.log(studentData);
  let filtered = studentData.filter(student => {
    let name = student.name.firstName + " " + student.name.lastName
    return name === e.currentTarget.value
  })
  // console.log(filtered)
  let studentDataSave = {
    firstName: filtered[0].name.firstName,
    lastName: filtered[0].name.lastName,
    id: filtered[0]._id
  }
  setStudent(studentDataSave);
}

useEffect(() => {
    getStudents();
  },[])

  useEffect(() => {
    console.log("STUDNET DATA: " + student)
    // setStudent(studentData[0]._id)
    // console.log("CURRENT STUDENT: " + student)
  },[student])

  const handleSubmit = e => {

    e.preventDefault();
    if (student) {
      toast.notify("Guardian added successfully!");
      var key = keyGen.generate();
      API.email({ firstName, lastName, email, student, role, key });
  
      API.saveUser({
        role: role,
        email: email,
        first_name: firstName,
        last_name: lastName,
        students: [student],
        key: key
      });
  
      // console.log(student);
      document.getElementById("guardianForm").reset();
    }
    else {
      toast.notify("Please select a student from the dropdown menu.")
    }
  }

  return (
    <div id = "guardianCard" className="card" style={{ width: "18rem", float: "left", border: "1px solid white", marginLeft: "40px", marginTop: "50px", opacity: ".95", height: "320px" }}>
      <div className="card-header" style={{ backgroundColor: "#194d30", color: "white", fontSize: "28px", }}>
        Add Guardian
      </div>
      <form id="guardianForm" onSubmit={handleSubmit} type="submit">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <input onChange={e => {setFirstname(e.target.value); console.log(e.target.value)}} name="firstName" id="guardianFirstName" required="true" placeholder="First Name">
            </input>
          </li>
          <li className="list-group-item">
            <input onChange={e => setLastName(e.target.value)} required="true" id="guardianLastName" placeholder="Last Name" name="lastName">
            </input>
          </li>
          <li className="list-group-item">
            <input onChange={e => setEmail(e.target.value)} required="true" id="guardianEmail" placeholder="Email" type="email">
            </input>
          </li>
          <li className="list-group-item">
            <label for="students">Select a student: </label>
            {(studentData && studentData[0]) ? (
            <select id="students" onChange={studentSelect} style={{ backgroundColor: "white", color: "#194d30", borderRadius: "6px", border: ".5px solid #194d30", marginLeft: "5px" }}>
              {studentData.map(result => (
                <option id={result._id}>
                  {result.name.firstName} {result.name.lastName}
                </option>
              ))
              }
            </select> ): (<select>No Students</select>)}
            <br />
            <input style={{ marginTop: "20px", backgroundColor: "#194d30", color: "white", borderRadius: "6px", border: ".5px solid white" }} type="submit"></input>
          </li>
        </ul>
      </form >
    </div>
  )
}
export default GuardianCard