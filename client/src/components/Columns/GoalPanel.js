import React, { useState, useEffect } from "react";
import './style.css';
import API from "../../utils/API"
import 'toasted-notes/src/styles.css';

function GoalPanel(props) {
    const [studentName, setStudentName] = useState();
    const [studentGoals, setStudentGoals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentTime, setCurrentTime] = useState();
    var today = new Date();
    var ss = String(today.getSeconds()).padStart(2, '0')
    var min = String(today.getMinutes()).padStart(2, '0')
    var hh = String(today.getHours())
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    today = hh + ":" + min + ":" + ss + " on " + mm + "/" + dd ;
    const [displayedDate, setDisplayedDate] = useState(today);
    var date = new Date(Date.now())

    useEffect(() => { //Whenever the student ID changes, update the Goal Panel.
    if (props.studentId) {
      async function fetchCurrent() {
        setIsLoading(true);
        try {
          const currentFetch = await API.findStudent(props.studentId)
          let activeFirstName = currentFetch.data[0].name.firstName;
          let activeGoals = currentFetch.data[0].goals;
          console.log("ACTIVEG " + JSON.stringify(activeGoals))
          setStudentName(activeFirstName);
          setStudentGoals(activeGoals);
        } catch (err) { console.log(err); }
      }
      fetchCurrent();
      setDisplayedDate(today)
      setCurrentTime(date.toString())
      setIsLoading(false)
    } else { }

  }, [props.studentId, props.refresh])

  return (
    <div>
        <div className="row goalPanelRow" style={{backgroundColor:"#194d30", color:"white"}} data-id={props.studentId}>
            <div className="col-md-4 goalPanelSubCol text-left">Recording: {studentName}</div>
            <div className="col-md-4 goalPanelSubCol text-center">Updated: {displayedDate} <i class="fas fa-redo-alt" data-studentid={props.studentId} onClick={props.handleRefresh}></i></div>
            <div className="col-md-4 goalPanelSubCol text-right recordGoalButtonCol">
                <button className="btn btn-primary" style={{backgroundColor:"white", color:"#194d30"}} data-target="#recordGoalModal" data-toggle="modal">Record Goal</button>
            </div>
        </div>
        <div className="modal fade" id="recordGoalModal" tabindex="-1" role="dialog" aria-labelledby="recordGoalModal" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content recordGoalModalContent">
                <div className="modal-header recordGoalModalHeader" style={{ backgroundColor: "#194d30", color: "white", fontSize: "28px"}}>
                    <div className="modal-title" id="recordGoalModalTitle">Record Goal for {studentName}</div>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span className="recordGoalClose" aria-hidden="true" style={{color:"white"}}>&times;</span>
                    </button>
                </div>
                <div className="modal-body recordGoalModalBody">
                    {(studentGoals.length>0) ? (studentGoals.map(goal => (
                        <div>
                            <form>
                                {(goal.type === "Binary") ? (
                                <div className="form-row">
                                    <div className="col"><h5>{goal.label}</h5></div>
                                    <div className="col">
                                        <div className="form-row">
                                            <div className="col">
                                                <button className="btn btn-success" style={{width:"100%"}}>{goal.options[0]}</button>
                                            </div>
                                            <div className="col">
                                                <button className="btn btn-danger" style={{width:"100%"}}>{goal.options[1]}</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <button className="btn btn-primary float-right" type="submit" style={{background:"#194d30", border:"2px solid #194d30"}}>Submit</button>
                                    </div>
                                </div>
                                ) : (<div style={{display:"none"}}></div>)}
                                {(goal.type === "Successes/Opportunities") ? (
                                <div className="form-row">
                                    <div className="col"><h5>{goal.label}</h5></div>
                                    <div className="form-group col">
                                        <div className="form-row">
                                            <div className="col">
                                                <input className="form-control" type="number"></input>
                                                <label for="soOptions0" style={{width:"100%", textAlign:"center"}}>{goal.options[0]}</label>
                                            </div>
                                            <div className="col">    
                                                <input className="form-control" type="number"></input>
                                                <label for="soOptions1" style={{width:"100%", textAlign:"center"}}>{goal.options[1]}</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <button className="btn btn-primary float-right" type="submit" style={{background:"#194d30", border: "2px solid #194d30"}}>Submit</button>
                                    </div>
                                </div>
                                        ) : (<div style={{display:"none"}}></div>)}
                                    {(goal.type === "Raw Percent") ? (
                                    <div className="form-row">
                                        <div className="col"><h5>{goal.label}</h5></div>
                                        <div className="col">
                                            <input className="col form-control" type="number"></input>
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-primary float-right" type="submit" style={{background:"#194d30", border:"2px solid #194d30"}}>Submit</button>
                                        </div>
                                    </div>
                                    ) : (<div style={{display:"none"}}></div>)}
                                    {(goal.type === "Note Only") ? (
                                        <div className="form-row">
                                            <div className="col"><h5>{goal.label}</h5></div>
                                            <div className="col">
                                                <textarea className="form-control" style={{width:"100%"}}></textarea>
                                            </div>
                                            <div className="col">
                                                <button className="btn btn-primary float-right" type="submit" style={{background:"#194d30", border:"2px solid #194d30"}}>Submit</button>
                                            </div>
                                        </div>
                                    ) : (<div style={{display:"none"}}></div>)}
                            </form>
                            <hr className="goalRecHr"></hr>
                        </div>
                    ))) : (<li>No Goals</li>)}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
}


export default GoalPanel;
