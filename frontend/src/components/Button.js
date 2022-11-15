import React from "react";
import styles from "./Button.module.css";
import { Button } from "react-bootstrap";


function RaagaButton({ text, skeleton, className, selected, ...props }) {

    return (
        <Button
            {...props}
            disabled={skeleton ? true : false}
            className={`${skeleton ? styles["skeleton"] : styles["login-button"]} ${selected ? styles["selected"] : null} ${className}`}
        >
            {text}
        </Button>
    );
}

export default RaagaButton;