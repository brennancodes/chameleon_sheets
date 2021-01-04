import React, { useState, useEffect } from "react";
import API from '../../../utils/API';
import { ExportToCsv } from 'export-to-csv';
import 'moment-timezone';
import studentSearch from '../../StudentSearch/StudentSearch';
// import router from "../../../../../routes/api/user";

function GoalsCard(props) {

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;

const [logs, setLogs] = useState();

let student=props.value;
  async function getLogs(id){
    let logPlaceholder = await API.getLogs(id);
    if(logPlaceholder && logPlaceholder.data){
    setLogs(logPlaceholder.data)
    }
  }

  return (
    <div className="card" style={{ width: "18rem", float: "left", border: "1px solid white", marginLeft: "50px", marginBottom: "50px", opacity: ".95" }}>
      <div className="card-header" style={{ backgroundColor: "#267347", color: "white" }}>
        <div className="row">
          <div className="col-md-12">{(student && student.id) ? (<div>{student.firstName} {student.lastName}</div>):(<div>No Name</div>)}</div>
        </div>
      </div>
      <div className="card-block overflow-auto">
      </div>
    </div>    
    )

}


export default GoalsCard