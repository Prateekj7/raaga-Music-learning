import React, { useState, useMemo } from "react";
import styles from "./Schedule.module.css";
import Table from 'react-bootstrap/Table';
import MultiSelect from "./MultiSelect";
import { FaEdit } from "react-icons/fa";
import CustomCell from "./CustomCell";
function Schedule({ savedSchedule }) {
    const [editProfileMode, setEditProfileMode] = useState(false);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [fees, setFees] = useState();

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

    const handleEditSchedule = () => {
        setEditProfileMode(true);
    };
    const handleChangeGenres = (optionArray) => {
        setSelectedGenres(optionArray);
    };

    const handleChangeFees = (e) => {
        setFees((oldState) => ({
            ...oldState,
            [e.target.name]: e.target.value
        }))
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
            <MultiSelect
                selectedGenres={selectedGenres}
                handleChangeGenres={handleChangeGenres}
                handleChangeFees={handleChangeFees}
            />
            <h5 className="mt-4">Your TimeTable </h5>
            <div className={`${styles["table-container"]}`}>
                <Table bordered size="sm" className={`${styles["schedule-table"]} mt-3`}>
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
                                <th>{element}</th>
                                {weekdays.map((item, index) =>
                                    <CustomCell
                                        key={index}
                                        availableGenres={selectedGenres}
                                    />
                                )}
                            </tr>)}
                    </tbody>
                </Table>
            </div>
            <div className={`pb-lg-4 py-3 d-flex justify-content-lg-end`}>
                <button className={`${styles["login-button"]} me-4`}
                    disabled={!editProfileMode}
                    type="reset"
                >
                    Cancel
                </button>
                <button className={`${styles["login-button"]}`}
                    disabled={!editProfileMode}
                    type="submit"
                >
                    Save
                </button>
            </div>
        </>
    );
}

export default Schedule;