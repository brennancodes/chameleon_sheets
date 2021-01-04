import React, { useState, useEffect } from "react";
import API from '../../../utils/API';
import { ExportToCsv } from 'export-to-csv';
import 'moment-timezone';
// import router from "../../../../../routes/api/user";

function HistoryCard(props) {

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;
let ones = 0;
let twos = 0;
let threes = 0;
let fours = 0;
let fives = 0;

  const [logs, setLogs] = useState();
  const [dataArray, setDataArray] = useState([]);
  const [analysisArray, setAnalysisArray] = useState([]);
  const [yearlyArray, setYearlyArray] = useState([]);

  //Variables for IndexedArray
  let scoreTotal;
  let count;
  let avgScore;
  let hiScore;
  let percentage1;
  let percentage2;
  let percentage3;
  let percentage4;
  let percentage5;

  //Variables for AnalysisArray
  let cum0 = [];
  let cum1 = [];
  let cum2 = [];
  let cum3 = [];
  let cum4 = [];
  let cum5 = [];
  let cum6 = [];
  let cum7 = [];
  let cum8 = [];
  let cum9 = [];
  let cum10 = [];
  let cum11 = [];
  let cum12 = [];
  let cum13 = [];
  let cum14 = [];
  let cum15 = [];
  let cum16 = [];
  let cum17 = [];
  let cum18 = [];
  let cum19 = [];
  let cum20 = [];
  let cum21 = [];
  let cum22 = [];
  let cum23 = [];

  //Variables for YearlyArray
  let y0 = "-";
  let y1 = "-";
  let y2 = "-";
  let y3 = "-";
  let y4 = "-";
  let y5 = "-";
  let y6 = "-";
  let y7 = "-";
  let y8 = "-";
  let y9 = "-";
  let y10 = "-";
  let y11 = "-";
  let y12 = "-";
  let y13 = "-";
  let y14 = "-";
  let y15 = "-";
  let y16 = "-";
  let y17 = "-";
  let y18 = "-";
  let y19 = "-";
  let y20 = "-";
  let y21 = "-";
  let y22 = "-";
  let y23 = "-";


  let student=props.value;
  async function getLogs(id){
    scoreTotal = 0;
    count = 0;
    hiScore = 0;
    let logPlaceholder = await API.getLogs(id);
    if(logPlaceholder && logPlaceholder.data){
      setLogs(logPlaceholder.data)

      var IndexedArray = function(key) {
        this.key = key || 'id';
        this.data = [];
        this.index = {};
      };

      var IndexedAnalysis = function(key) {
        this.key = key || 'id';
        this.data = [];
        this.index = {};
      };

      var IndexedYear = function(key) {
        this.key = key || 'id';
        this.data = [];
        this.index = {};
      };
      
      IndexedArray.prototype.addOrReplace = function(object) {
        var id = object[this.key],
        index = this.index[id];
        if(index === undefined) {
            index = this.data.length;
            this.index[id] = index;
        }
        this.data[index] = object;
      };

      IndexedAnalysis.prototype.addOrReplace = function(object) {
        var id = object[this.key],
        index = this.index[id];
        if(index === undefined) {
          index = this.data.length;
          this.index[id] = index;
        }
        this.data[index] = object;
      }

      IndexedYear.prototype.addOrReplace = function(object) {
        var id = object[this.key],
        index = this.index[id];
        if(index === undefined) {
          index = this.data.length;
          this.index[id] = index;
        }
        this.data[index] = object;
      }

      var indexedYear = new IndexedYear('date');
      for (var i = 0; i < logPlaceholder.data.length; i++){
        for (let j = 0; j < logPlaceholder.data[i].scores.length; j++){
          if((logPlaceholder.data[i].scores[j].score > 0) && (logPlaceholder.data[i].scores[j].score <6)){ //If scores are valid, place the corresponding value in the appropriate time slot
            if(logPlaceholder.data[i].scores[j].time === 0){ y0 = (logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 1){ y1 = (logPlaceholder.data[i].scores[j].score); }
            else if(logPlaceholder.data[i].scores[j].time === 2){ y2 = (logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 3){ y3 = (logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 4){ y4 = (logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 5){ y5 = (logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 6){ y6 = (logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 7){ y7 = (logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 8){ y8 = (logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 9){ y9 = (logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 10){ y10 = (logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 11){ y11 = (logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 12){ y12 = (logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 13){ y13 = (logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 14){ y14 = (logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 15){ y15 = (logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 16){ y16 = (logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 17){ y17 = (logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 18){ y18 = (logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 19){ y19 = (logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 20){ y20 = (logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 21){ y21 = (logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 22){ y22 = (logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 23){ y23 = (logPlaceholder.data[i].scores[j].score) }
          }
          else { //If scores are invalid, place "-" in each time slot that is unaccounted for
            if(logPlaceholder.data[i].scores[j].time === 0){ y0 = "-" }
            else if(logPlaceholder.data[i].scores[j].time === 1){ y1 = "-" }
            else if(logPlaceholder.data[i].scores[j].time === 2){ y2 = "-" }
            else if(logPlaceholder.data[i].scores[j].time === 3){ y3 = "-" }
            else if(logPlaceholder.data[i].scores[j].time === 4){ y4 = "-" }
            else if(logPlaceholder.data[i].scores[j].time === 5){ y5 = "-" }
            else if(logPlaceholder.data[i].scores[j].time === 6){ y6 = "-" }
            else if(logPlaceholder.data[i].scores[j].time === 7){ y7 = "-" }
            else if(logPlaceholder.data[i].scores[j].time === 8){ y8 = "-" }
            else if(logPlaceholder.data[i].scores[j].time === 9){ y9 = "-" }
            else if(logPlaceholder.data[i].scores[j].time === 10){ y10 = "-" }
            else if(logPlaceholder.data[i].scores[j].time === 11){ y11 = "-" }
            else if(logPlaceholder.data[i].scores[j].time === 12){ y12 = "-" }
            else if(logPlaceholder.data[i].scores[j].time === 13){ y13 = "-" }
            else if(logPlaceholder.data[i].scores[j].time === 14){ y14 = "-" }
            else if(logPlaceholder.data[i].scores[j].time === 15){ y15 = "-" }
            else if(logPlaceholder.data[i].scores[j].time === 16){ y16 = "-" }
            else if(logPlaceholder.data[i].scores[j].time === 17){ y17 = "-" }
            else if(logPlaceholder.data[i].scores[j].time === 18){ y18 = "-" }
            else if(logPlaceholder.data[i].scores[j].time === 19){ y19 = "-" }
            else if(logPlaceholder.data[i].scores[j].time === 20){ y20 = "-" }
            else if(logPlaceholder.data[i].scores[j].time === 21){ y21 = "-" }
            else if(logPlaceholder.data[i].scores[j].time === 22){ y22 = "-" }
            else if(logPlaceholder.data[i].scores[j].time === 23){ y23 = "-" }
          }
        }
        indexedYear.addOrReplace({
          Student: student.firstName + " " + student.lastName, 
          date: logPlaceholder.data[i].date, 
          time0: y0,
          time1: y1,
          time2: y2,
          time3: y3,
          time4: y4,
          time5: y5,
          time6: y6,
          time7: y7,
          time8: y8,
          time9: y9,
          time10: y10,
          time11: y11,
          time12: y12,
          time13: y13,
          time14: y14,
          time15: y15,
          time16: y16,
          time17: y17,
          time18: y18,
          time19: y19,
          time20: y20,
          time21: y21,
          time22: y22,
          time23: y23
        });
        //Reset all 24 values before it loops through again.
        y0 = "-";
        y1 = "-";
        y2 = "-";
        y3 = "-";
        y4 = "-";
        y5 = "-";
        y6 = "-";
        y7 = "-";
        y8 = "-";
        y9 = "-";
        y10 = "-";
        y11 = "-";
        y12 = "-";
        y13 = "-";
        y14 = "-";
        y15 = "-";
        y16 = "-";
        y17 = "-";
        y18 = "-";
        y19 = "-";
        y20 = "-";
        y21 = "-";
        y22 = "-";
        y23 = "-";
      }
      for (var q = 0; q < indexedYear.data.length; q++){
        indexedYear.data.sort((a, b) => parseFloat(b.date) - parseFloat(a.date));
        setYearlyArray(yearlyArray => [...yearlyArray, indexedYear.data[q]])
      }
      for (var ii = 0; ii < indexedYear.data.length; ii++){
        indexedYear.data[ii].date = indexedYear.data[ii].date.slice(4,6) + "/" + indexedYear.data[ii].date.slice(6,8) + "/" + indexedYear.data[ii].date.slice(0,4)
      }

      var indexedAnalysis = new IndexedAnalysis('date');
      for (var i = 0; i < logPlaceholder.data.length; i++){
        for (let j = 0; j < logPlaceholder.data[i].scores.length; j++){
          if((logPlaceholder.data[i].scores[j].score > 0) && (logPlaceholder.data[i].scores[j].score <6)){
            if(logPlaceholder.data[i].scores[j].time === 0){ cum0.push(logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 1){ cum1.push(logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 2){ cum2.push(logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 3){ cum3.push(logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 4){ cum4.push(logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 5){ cum5.push(logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 6){ cum6.push(logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 7){ cum7.push(logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 8){ cum8.push(logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 9){ cum9.push(logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 10){ cum10.push(logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 11){ cum11.push(logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 12){ cum12.push(logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 13){ cum13.push(logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 14){ cum14.push(logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 15){ cum15.push(logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 16){ cum16.push(logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 17){ cum17.push(logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 18){ cum18.push(logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 19){ cum19.push(logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 20){ cum20.push(logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 21){ cum21.push(logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 22){ cum22.push(logPlaceholder.data[i].scores[j].score) }
            else if(logPlaceholder.data[i].scores[j].time === 23){ cum23.push(logPlaceholder.data[i].scores[j].score) }
          }
        }
        var c0 = cum0.reduce((a, b) => a + b, 0)/(cum0.length);
        var c1 = cum1.reduce((a, b) => a + b, 0)/(cum1.length);
        var c2 = cum2.reduce((a, b) => a + b, 0)/(cum2.length);
        var c3 = cum3.reduce((a, b) => a + b, 0)/(cum3.length);
        var c4 = cum4.reduce((a, b) => a + b, 0)/(cum4.length);
        var c5 = cum5.reduce((a, b) => a + b, 0)/(cum5.length);
        var c6 = cum6.reduce((a, b) => a + b, 0)/(cum6.length);
        var c7 = cum7.reduce((a, b) => a + b, 0)/(cum7.length);
        var c8 = cum8.reduce((a, b) => a + b, 0)/(cum8.length);
        var c9 = cum9.reduce((a, b) => a + b, 0)/(cum9.length);
        var c10 = cum10.reduce((a, b) => a + b, 0)/(cum10.length);
        var c11 = cum11.reduce((a, b) => a + b, 0)/(cum11.length);
        var c12 = cum12.reduce((a, b) => a + b, 0)/(cum12.length);
        var c13 = cum13.reduce((a, b) => a + b, 0)/(cum13.length);
        var c14 = cum14.reduce((a, b) => a + b, 0)/(cum14.length);
        var c15 = cum15.reduce((a, b) => a + b, 0)/(cum15.length);
        var c16 = cum16.reduce((a, b) => a + b, 0)/(cum16.length);
        var c17 = cum17.reduce((a, b) => a + b, 0)/(cum17.length);
        var c18 = cum18.reduce((a, b) => a + b, 0)/(cum18.length);
        var c19 = cum19.reduce((a, b) => a + b, 0)/(cum19.length);
        var c20 = cum20.reduce((a, b) => a + b, 0)/(cum20.length);
        var c21 = cum21.reduce((a, b) => a + b, 0)/(cum21.length);
        var c22 = cum22.reduce((a, b) => a + b, 0)/(cum22.length);
        var c23 = cum23.reduce((a, b) => a + b, 0)/(cum23.length);

        indexedAnalysis.addOrReplace({
          Student: student.firstName + " " + student.lastName, 
          t0: c0.toFixed(2),
          t1: c1.toFixed(2),
          t2: c2.toFixed(2),
          t3: c3.toFixed(2),
          t4: c4.toFixed(2),
          t5: c5.toFixed(2),
          t6: c6.toFixed(2),
          t7: c7.toFixed(2),
          t8: c8.toFixed(2),
          t9: c9.toFixed(2),
          t10: c10.toFixed(2),
          t11: c11.toFixed(2),
          t12: c12.toFixed(2),
          t13: c13.toFixed(2),
          t14: c14.toFixed(2),
          t15: c15.toFixed(2),
          t16: c16.toFixed(2),
          t17: c17.toFixed(2),
          t18: c18.toFixed(2),
          t19: c19.toFixed(2),
          t20: c20.toFixed(2),
          t21: c21.toFixed(2),
          t22: c22.toFixed(2),
          t23: c23.toFixed(2)
        })
      }
      for (var q = 0; q < indexedAnalysis.data.length; q++){
        indexedAnalysis.data.sort((a, b) => parseFloat(b.time) - parseFloat(a.time));
        setAnalysisArray(analysisArray => [...analysisArray, indexedAnalysis.data[q]])
      }
      
      var indexedArray = new IndexedArray('date');
      for (var i = 0; i < logPlaceholder.data.length; i++){
          for (let j = 0; j < logPlaceholder.data[i].scores.length; j++){
            if((logPlaceholder.data[i].scores[j].score > 0) && (logPlaceholder.data[i].scores[j].score <6)){
              scoreTotal += logPlaceholder.data[i].scores[j].score;
              count++;
              avgScore = (scoreTotal/count)
              if(logPlaceholder.data[i].scores[j].score === 1){ ones++; if(hiScore < 1){hiScore=1}; }
              else if(logPlaceholder.data[i].scores[j].score === 2){ twos++; if(hiScore < 2){hiScore=2}; }
              else if(logPlaceholder.data[i].scores[j].score === 3){ threes++; if(hiScore < 3){hiScore=3}; }
              else if(logPlaceholder.data[i].scores[j].score === 4){ fours++; if(hiScore < 4){hiScore=4}; }
              else if(logPlaceholder.data[i].scores[j].score === 5){ fives++; if(hiScore < 5){hiScore=5}; }
              percentage1 = ((ones/count)*100).toFixed(2); 
              percentage2 = ((twos/count)*100).toFixed(2); 
              percentage3 = ((threes/count)*100).toFixed(2); 
              percentage4 = ((fours/count)*100).toFixed(2); 
              percentage5 = ((fives/count)*100).toFixed(2); 
            }
        }
        indexedArray.addOrReplace({
          Student: student.firstName + " " + student.lastName, 
          date: logPlaceholder.data[i].date, 
          percentAt1: percentage1,
          percentAt2: percentage2,
          percentAt3: percentage3,
          percentAt4: percentage4,
          percentAt5: percentage5,
          dailyAvg: parseFloat(avgScore),
          dailyHigh: hiScore
        });
        count = 0;
        scoreTotal = 0;
        avgScore = 0;
        hiScore = 0;
        ones = 0;
        twos = 0;
        threes = 0;
        fours = 0;
        fives = 0;
        percentage1 = 0;
        percentage2 = 0;
        percentage3 = 0;
        percentage4 = 0;
        percentage5 = 0;
      }
      for (var q = 0; q < indexedArray.data.length; q++){
        indexedArray.data.sort((a, b) => parseFloat(b.date) - parseFloat(a.date));
        setDataArray(dataArray => [...dataArray, indexedArray.data[q]])
      }
      for (var ii = 0; ii < indexedArray.data.length; ii++){
        indexedArray.data[ii].date = indexedArray.data[ii].date.slice(4,6) + "/" + indexedArray.data[ii].date.slice(6,8) + "/" + indexedArray.data[ii].date.slice(0,4)
      }
    }
  }
useEffect(()=>{
  console.log("placeholderdata", logs);
},[logs]);

useEffect(()=>{
  console.log("USEFX", dataArray);
  // dataArray.sort((a, b) => parseFloat(b.date) - parseFloat(a.date));
},[dataArray])

useEffect(()=>{
  console.log("analysis", analysisArray);
}, [analysisArray])

useEffect(()=>{
  console.log("yearly", yearlyArray)
},[yearlyArray])

const options = {
  fieldSeparator: ',',
  quoteStrings: '"',
  filename: student.firstName + "Data",
  decimalSeparator: '.',
  showLabels: true,
  showTitle: true,
  title: "Data Collected on " + today,
  useTextFile: false,
  useBom: true,
  useKeysAsHeaders: true,
  // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
};

const analysis = {
  fieldSeparator: ',',
  quoteStrings: '"',
  filename: student.firstName + "Analysis",
  decimalSeparator: '.',
  showLabels: true,
  showTitle: true,
  title: "Data requested on " + today,
  useTextFile: false,
  useBom: true,
  useKeysAsHeaders: false,
  headers: ['Student', '0800', '0815', '0830', '0845', '0900', '0915', '0930', '0945', '1000', '1015', '1030', '1045', '1100', '1115', '1130', '1145', '1200', '1215', '1230', '1245', '1300', '1315', '1330', '1345']
};

const yearly = {
  fieldSeparator: ',',
  quoteStrings: '"',
  filename: student.firstName + "Year",
  decimalSeparator: '.',
  showLabels: true,
  showTitle: true,
  title: "Data requested on " + today,
  useTextFile: false,
  useBom: true,
  useKeysAsHeaders: false,
  headers: [student.firstName, 'Date', '0800', '0815', '0830', '0845', '0900', '0915', '0930', '0945', '1000', '1015', '1030', '1045', '1100', '1115', '1130', '1145', '1200', '1215', '1230', '1245', '1300', '1315', '1330', '1345']
};

const exportCSV = (e) => {
  e.preventDefault();
  const csvExporter = new ExportToCsv(options);
  csvExporter.generateCsv(dataArray);
}

const exportAnalysis = (e) => {
  e.preventDefault();
  const analysisExporter = new ExportToCsv(analysis);
  analysisExporter.generateCsv(analysisArray);
}

const exportYear = (e) => {
  e.preventDefault();
  const yearlyExporter = new ExportToCsv(yearly);
  yearlyExporter.generateCsv(yearlyArray);
}

useEffect(() => {
  if(student && student.id) {
    getLogs({id: student.id})
  }
},[])

  return (
    <div className="card" style={{ width: "46%", float: "left", border: "1px solid white",  margin: "2%", opacity: ".95" }}>
      <div className="card-header" style={{ backgroundColor: "#267347", color: "white" }}>
        <div className="row">
          <div className="col-md-6">{(student && student.id) ? (<div>{student.firstName} {student.lastName}</div>):(<div>No Name</div>)}</div>
          <div className="col-md-2"><button className="yearlyDataCSV" title="Export Whole Year's Data" onClick={exportYear} style={{backgroundColor: "#267347", color: "white", borderRadius: "6px", border: ".5px solid white" }}>
            <i className="far fa-calendar-check"></i></button>
          </div>
          <div className="col-md-2"><button className="analysisCSV" title="Export Hourly Breakdown" onClick={exportAnalysis} style={{backgroundColor: "#267347", color: "white", borderRadius: "6px", border: ".5px solid white" }}>
            <i className="fas fa-chart-area"></i></button>
          </div>
          <div className="col-md-2"><button className="exportCSVButton" title="Download CSV" onClick={exportCSV} style={{backgroundColor: "#267347", color: "white", borderRadius: "6px", border: ".5px solid white"}}>
            <i className="fas fa-cloud-download-alt"></i></button>
          </div>
        </div>
      
      </div>
      <div className="card-block overflow-auto">
      <form>
        <ul className="list-group list-group-flush">
          {dataArray.map((data) => (
          <li className="list-group-item" key={data.date}>
            <div className="row">
              <div className="col-md-4 text-left">{data.date.slice(4,6) + "/" + data.date.slice(6,8)}</div>
              <div className="col-md-4 text-left">{(data.dailyAvg) ? (<div>Avg:  {data.dailyAvg.toFixed(2)}</div>):(<div>No Data</div>)}</div>
              <div className="col-md-4 text-left">{(data.dailyAvg) ? (<div style={{color: data.dailyHigh > 3 ? "red" : "inherit"}}>Max:  {data.dailyHigh}</div>):(<div>No Data</div>)}</div>
              {/* <div className="col-md-2"><button className="goToDate" onClick={goHere} data-date={data.date.slice(0,4)} style={{backgroundColor: "#267347", color: "white", borderRadius: "6px", border: ".5px solid white" }} className="CSV" type="submit">
                <i className="fas fa-arrow-circle-right"></i></button>
              </div> */}
            </div>
          </li>
          ))}
        </ul>
      </form>
      </div>
    </div>
  )
}
export default HistoryCard