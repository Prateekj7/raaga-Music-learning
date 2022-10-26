import ListGroup from 'react-bootstrap/ListGroup';
import styles from "./UserLogin.module.css";
import Button from 'react-bootstrap/Button';
import doubleArrowIcon from "../../images/doubleArrowIcon.png";
import singleArrowIcon from "../../images/singleArrowIcon.svg";

function DefaultExample({ icon, header, contentList, buttonText }) {

    return (
        <div className="py-3">
            <div className={`${styles["list-header"]}`}>
                <img src={icon} className={`${styles["list-header-icon"]} p-1`} />
                <img src={doubleArrowIcon} className={`${styles["list-header-double-arrow-icon"]} p-1`} />
                <h4 className={`${styles["list-heading"]}`}>{header}</h4>
                <img src={singleArrowIcon} className={`${styles["list-header-single-arrow-icon"]} p-1`} />
            </div>
            <ListGroup >
                {contentList.map((content, index) =>
                    <ListGroup.Item key={index} className={`${styles["list-group-item"]}`}>
                        <h4 className={`${styles["list-number"]}`}>{index + 1}</h4>
                        <p className={`${styles["list-text"]}`}>{content}</p>
                    </ListGroup.Item>
                )}

            </ListGroup>
            <div className={`${styles["login-button-container"]}`}>
                <Button variant="primary" className={`${styles["login-button"]}`}>{buttonText}</Button>
            </div>
        </div>
    );
}

export default DefaultExample;