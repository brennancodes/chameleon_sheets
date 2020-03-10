import React, { useState, useEffect } from "react";
import './pages.css';
import StaffCard from '../Cards/StaffCard/StaffCard';
import StudentCard from '../Cards/StudentCard/StudentCard';
import GuardianCard from '../Cards/GuardianCard/GuardianCard';
import Header from "../Header/Header";
import API from '../../utils/API';

function Admin() {
    const [isAdmin, setIsAdmin] = useState();
    async function checkYourself(){
        let userPlaceholder = await API.getSelf();
        if(userPlaceholder && (userPlaceholder.data.role === "Admin")){
            setIsAdmin(true)
        }
        else{
            setIsAdmin(false)
        }
    }
    useEffect(() => {
        checkYourself();
      },[])
    return (
        <div>
            {(isAdmin) ? (
            <div>
            <Header />
            <div className="container container w3-container w3-center w3-animate-opacity" style={{ margin: "auto", width: "75%" }}>
                <StaffCard />
                <StudentCard />
                <GuardianCard />
            </div>
            </div>) : (<div className="jumbotron">
                <h1 className="text-center" style={{color: "white", fontSize: "42px", marginBottom: "25px"}}>You must be an admin to view this page</h1>
                </div>
)}
        </div>
    )
}

export default Admin;