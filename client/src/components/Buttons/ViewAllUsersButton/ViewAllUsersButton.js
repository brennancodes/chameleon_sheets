import React from "react";
import {Link} from "react-router-dom";

function ViewAllUsersButton() {

    return (
        <div>
            <Link to="/users"
                className={
                    window.location.pathname === "/users"
            }>
                <button type="button"
                    style={
                        {
                            width: "100px",
                            height: "50px",
                            fontSize: "24px",
                            backgroundColor: "white",
                            color: "#194d30",
                            borderRadius: "6px",
                            border: ".5px solid white",
                            padding: 5
                        }
                }>
                    Roster
                </button>
            </Link>
        </div>
    )
}

export default ViewAllUsersButton;
