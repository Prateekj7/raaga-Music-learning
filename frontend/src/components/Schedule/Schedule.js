import React, { useState, useMemo } from "react";
import styles from "./Schedule.module.css";
import Table from 'react-bootstrap/Table';

function Schedule({ savedSchedule }) {
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

    return (
        <>
            <h5>Class Schedule</h5>
            <Table bordered hover size="sm" className={`${styles["schedule-table"]}`}>
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
            </Table>
        </>
    );
}

export default Schedule;