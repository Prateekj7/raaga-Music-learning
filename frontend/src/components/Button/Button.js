import React from "react";
import styles from "./Button.module.css";
import { Button } from "react-bootstrap";


function RaagaButton(props) {
    return (
        <Button
            {...props}
            disabled={props.skeleton ? true : false}
            className={`${props.skeleton ? styles["skeleton"] : styles["login-button"]} ${props.className}`}

        >
            {props.text}
        </Button>
    );
}

export default RaagaButton;