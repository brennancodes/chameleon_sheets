import React from "react";
import {Link} from "react-router-dom";

function GoalsButton() {

    return (
        <div>
            <Link to="/goals"
                className={
                    window.location.pathname === "/goals"
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
                    Goals
                </button>
            </Link>
        </div>
    )
}

export default GoalsButton;