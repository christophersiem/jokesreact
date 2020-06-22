import React from "react";
import { useHistory } from "react-router-dom";

    export default function ButtonBack() {
        let history = useHistory();

        function handleClick() {
            history.goBack();
        }

        return (
            <button type="button" onClick={handleClick}>
                Go Back
            </button>
        );
    }
