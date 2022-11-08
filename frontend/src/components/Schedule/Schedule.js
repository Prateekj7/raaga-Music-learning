import React, { useState, useMemo } from "react";
import styles from "./Schedule.module.css";
import Table from 'react-bootstrap/Table';
import MultiSelect from "../MultiSelect/MultiSelect";
import { FaEdit } from "react-icons/fa";

function Schedule({ savedSchedule }) {
    const [editProfileMode, setEditProfileMode] = useState(false);
    const weekdays = useMemo(() => [
        "Mon",
        "Tue",
        "Wed",
        "Thur",
        "Fri",
        "Sat",
        "Sun"
    ], []);
    const classTimes = useMemo(() => [
        "9:00 am",
        "11:00 am",
        "1:00 pm",
        "3:00 pm",
        "5:00 pm",
        "7:00 pm"
    ], []);

    const customCell = useMemo(() => {
        const selectedGenres = [
            "vocal-indian_classical",
            "vocal-ghazal",
            "instrumental-guitar",
            "instrumental-piano",
        ];

    }, []);

    const handleEditSchedule = () => {
        setEditProfileMode(true);
    };

    return (
        <>
            <div className="d-flex align-items-start mb-2">
                <h4 className="">Class Details </h4>
                <button className="border-0 bg-transparent p-0 m-0" onClick={handleEditSchedule}>
                    <h4 className={`${styles["featured-artist-header-single-arrow-icon"]} p-0 m-0 ms-3  d-flex align-items-center`}>
                        <FaEdit className={`${styles["edit-icon"]}`} />
                    </h4>
                </button>
            </div>
            <MultiSelect />
            {/* <Table bordered hover size="sm" className={`${styles["schedule-table"]}`}>
                <thead>
                    <tr>
                        <th>#</th>
                        {weekdays.map((item, index) =>
                            <th key={index}>
                                {item}
                            </th>)}
                    </tr>
                </thead>
                <tbody>
                    {classTimes.map((element, index) =>
                        <tr key={index}>
                            <td>{element}</td>
                            {weekdays.map((item, index) =>
                                <td key={index}>
                                </td>)}
                        </tr>)}
                </tbody>
            </Table> */}
        </>
    );
}

export default Schedule;