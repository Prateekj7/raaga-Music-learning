import React from "react";
import styles from "./Button.module.css";
import { Button } from "react-bootstrap";


function RaagaButton({ text, skeleton, className, ...props }) {

    return (
        <Button
            {...props}
            disabled={skeleton ? true : false}
            className={`${skeleton ? styles["skeleton"] : styles["login-button"]} ${className}`}
        >
            {text}
        </Button>
    );
}

export default RaagaButton;