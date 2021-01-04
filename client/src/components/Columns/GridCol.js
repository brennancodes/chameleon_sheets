import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import './style.css'
import API from '../../utils/API';
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';

function GridCol({startTime, index, studentId, sortedLog, date}){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + mm + dd;
    let time = <Moment parse="HH:mm" format="h:mm" add={{ minutes: (15*index) }}>{startTime}</Moment>
    let tc = "tc";

    const [rating, setRating] = useState(6);
    const [cellState, setCellState] = useState(0);
    
    // let user = API.getSelf();

    useEffect(() => {
        setRating(6)
        if (sortedLog.length > 0) {
            for (var i = 0; i < sortedLog.length; i++){
                if (sortedLog[i].time === index) {
                    setRating(sortedLog[i].score);
                }
            }
        }
    }, [sortedLog])


    useEffect( () => {

        if (rating === 6) {}
        else {
            let data = {
                date: date,
                student: studentId,
                scores: {
                    time: index,
                    score: rating
                }
            }
            API.createLog(data)
        }
    },[cellState])
    //today shows up as 03072020
    // let user = API.getUser("5e63da3f1dcb5b1f1ec2bc81")

    //axios.get("/api/dayLog") POSSIBLE INTERVAL FUNCTION?
    //We will have to tell the db to put the scores in where the db time field is equal to the column with the matching dataset.time, then set the rating of the column to the score we pulled

    function handleCellClick(e){
        e.preventDefault();
        let lastClick = parseInt(e.currentTarget.dataset.value);
        if (cellState === 0) {
            setCellState(1)
        }
        else {
            setCellState(0)
        }
        if (!studentId) {
            toast.notify("Please add a student to begin entering data.")
            console.log("Please add a student to begin entering data.")
        }
        else if (rating === lastClick) {
            setRating(0)
        }
        else if (rating === 6) {
            setRating(lastClick)
        }
        else {
            setRating(lastClick)
        }
    }
    return (<table className="floaTable" id={"gridcol" + index}>
                <tbody >
                    <tr className="timeRow">
                        <th>{time}</th>
                    </tr>
                    <tr>
                        <td 
                            className="fiveRow" 
                            style={{background: rating === 5 ? "#C23B23" : "inherit"}}
                            data-value={5}
                            data-time={tc + index}
                            index={index}
                            onClick={handleCellClick}>{rating === 5 ? "5" : " ‎"}
                        </td>
                    </tr>
                    <tr>
                        <td 
                            className="fourRow" 
                            style={{background: rating === 4 ? "#F39A27" : "inherit"}} 
                            data-value={4}
                            data-time={tc + index}
                            index={index}
                            onClick={handleCellClick}>{rating === 4 ? "4" : "‎ "}
                        </td>
                    </tr>
                    <tr>
                        <td 
                            className="threeRow" 
                            style={{background: rating === 3 ? "#EADA52" : "inherit"}} 
                            data-value={3} 
                            data-time={tc + index}
                            index={index}
                            onClick={handleCellClick}>{rating === 3 ? "3" : " ‎"}
                        </td>
                    </tr>
                    <tr>
                        <td 
                            className="twoRow" 
                            style={{background: rating === 2 ? "limegreen" : "inherit"}} 
                            data-value={2} 
                            data-time={tc + index}
                            index={index}
                            onClick={handleCellClick}>{rating === 2 ? "2" : " ‎"}
                        </td>
                    </tr>
                    <tr>
                        <td 
                            className="oneRow" 
                            style={{background: rating === 1 ? "green" : "inherit"}} 
                            data-value={1} 
                            data-time={tc + index}
                            index={index}
                            onClick={handleCellClick}>{rating === 1 ? "1" : " ‎"}
                        </td>
                    </tr>
                </tbody>
            </table>)
}

export default GridCol;