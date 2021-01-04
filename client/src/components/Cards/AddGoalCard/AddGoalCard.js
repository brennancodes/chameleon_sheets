import React, { useState, useEffect } from "react";
import API from '../../../utils/API';
import 'moment-timezone';
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';
// import router from "../../../../../routes/api/user";

function AddGoalCard() {

const [student, setStudent] = useState();
const [studentData, setStudentData] = useState();

//Variables for Add Goal Form
const [type, setType] = useState("Binary");
const [label, setLabel] = useState();
const [description, setDescription] = useState();
const [binary1, setBinary1] = useState();
const [binary2, setBinary2] = useState();
const [success, setSuccess] = useState();
const [opportunity, setOpportunity] = useState();
const [options, setOptions] = useState([]);
 
const role = "Guardian";

let newGoal;

  async function getStudents(){
    let studentPlaceholder = await API.getStudents();
    if(studentPlaceholder && studentPlaceholder.data){
        setStudentData(studentPlaceholder.data)
        console.log(studentPlaceholder.data)
    }
}

useEffect(() => { //Checking states
    if (student) {
        console.log("student is... " + student.id)
    }
    if (label) {    
        console.log("label is... " + label)
    }
    if (description) {
        console.log("description is... " + description)
    }
    if (binary1) {
        console.log("binary 1 is... " + binary1)
    }
    if (binary2) {
        console.log("binary 2 is... " + binary2)
    }
    if (success) {
        console.log("success is... " + success)
    }
    if (opportunity) {
        console.log("opportunity is... " + opportunity)
    }
    if (type) {
        console.log("type is... " + type)
    }
},[student, label, description, binary1, binary2, success, opportunity, type])

useEffect(()=>{
    if (binary1 || binary2){
        setOptions([binary1, binary2])
        console.log(options)
    }
    if (success || opportunity){
        setOptions([success,opportunity])
        console.log(options)
    }
},[binary1, binary2, success, opportunity])


const handleSubmit = e => {
  e.preventDefault();
  let studentId = student.id
  console.log(studentId)
      newGoal = {
          studentId: studentId,
          goal:{
              label: label, 
              description: description, 
              type: type, 
              options: options
          }
      }
    try {
        API.addStudentGoal({newGoal})
    } catch (err) { console.log(err) }
  console.log("NEW GOAL " + JSON.stringify(newGoal) + " NEW GOAL")
  toast.notify ("Goal added successfully!");
  document.getElementById("add-goal-form").reset();
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
 
// function typeSelect () {
//     if (type !== "Binary") {
//         setShowBinary(false)
//     } 
//     else { 
//         setShowBinary(true) 
//     }
//     if (type !== "Successes/Opportunities") {
//         setShowSuccessOpp(false)
//     }
//     else {
//         setShowSuccessOpp(true)
//     }
// }

useEffect(() => {
    getStudents();
  },[])

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;

    return (
        <div>
        <div className="row add-goal-card-row">
            <div className="col-md-12 add-goal-card-col">
                <div className="card add-goal-card">
                    <div className="card-header" style={{ backgroundColor: "#194d30", color: "white", fontSize: "28px", }}>
                        Add Goal
                    </div>
                    <div className="card-body text-left">
                        <form id="add-goal-form">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                <label for="studentSelect">Select a Student to Create a Goal For</label>
                                    {(studentData && studentData[0]) ? (
                                    <select className="form-control" id="students" onChange={studentSelect}>
                                        <option value="" disabled selected>Select</option>
                                    {studentData.map(result => (
                                        <option id={result._id}>
                                        {result.name.firstName} {result.name.lastName}
                                        </option>
                                    ))}
                                    </select> ) : (<select>No Students</select>)}
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="typeSelect">Select a Goal Type <i className="fas fa-info-circle" data-target="#goalTypeModal" data-toggle="modal"></i></label>
                                    <select className="form-control" onChange={e => setType(e.target.value)}>
                                        <option>Binary</option>
                                        <option>Successes/Opportunities</option>
                                        <option>Raw Percent</option>
                                        <option>Note Only</option>
                                    </select>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label for="goalTitle">Enter a Short Description or Label for the Goal</label>
                                    <input type="text" className="form-control" id="goalTitleInput" placeholder="Goal Label" onChange={e => setLabel(e.target.value)}></input>
                                </div>
                            </div>
                            <label for="goalDescription">Enter a Complete Description of the Goal</label>
                            <textarea type="text" className="form-control" id="goalDescriptionTextArea" placeholder="Goal Description" onChange={e => setDescription(e.target.value)}></textarea>
                            <hr></hr>
                                { type==="Binary" ? (
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="binaryOption1">Input a primary binary option:</label>
                                            <input className="form-control" id="binaryOption1" placeholder="ex: Yes" onChange={e => setBinary1(e.target.value)}></input>
                                        </div>
                                        <div className="form-group col-md-6">
                                        <label for="binaryOption2">Input a secondary binary option:</label>
                                            <input className="form-control" id="binaryOption2" placeholder="ex: No" onChange={e => setBinary2(e.target.value)}></input>
                                        </div>
                                    </div>
                                ) : null }
                                { type==="Successes/Opportunities" ? (
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="successLabel">Input a success label:</label>
                                            <input className="form-control" id="successLabel" placeholder="ex: Successes" onChange={e => setSuccess(e.target.value)}></input>
                                        </div>
                                        <div className="form-group col-md-6">
                                        <label for="opportunityLabel">Input an opportunity label:</label>
                                            <input className="form-control" id="opportunityLabel" placeholder="ex: Opportunities" onChange={e => setOpportunity(e.target.value)}></input>
                                        </div>
                                    </div>
                                ): null}
                        </form>
                        <a href="#" className="btn btn-primary float-right" type="submit" onClick={handleSubmit} style={{ backgroundColor: "#194d30"}}>Submit</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal fade" id="goalTypeModal" tabindex="-1" role="dialog" aria-labelledby="goalTypeModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content goalTypeModalContent">
                <div className="modal-header goalTypeModalHeader" style={{ backgroundColor: "#194d30", color: "white", fontSize: "28px"}}>
                    <div className="modal-title" id="goalTypeModalTitle">Goal Types</div>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span className="goalTypeClose" aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body goalTypeModalBody">
                    <h5>Binary</h5>
                    <p>Use this for goals recorded with only two possible outcomes. Yes/No and True/False are common binary options. It is generally recommended to put the affirmative option first.</p>
                    <hr></hr>
                    <h5>Successes/Opportunities</h5>
                    <p>Use this for goals that will be recorded as a percent. The staff user will input the number of successful instances and the total number of opportunities the student had to successfully complete the given task.</p>
                    <hr></hr>
                    <h5>Raw Percent</h5>
                    <p>Use this to bypass the successes/opportunities step if you already know the percent. This is generally recommended for easily calculable outcomes on goals that won’t change - for example, if a student attempts 5 math problems each day.</p>
                    <hr></hr>
                    <h5>Note Only</h5>
                    <p>Use this for more qualitative goals that are difficult to track mathematically. Evergreen cannot make any calculations based on Note Only entries.</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AddGoalCard