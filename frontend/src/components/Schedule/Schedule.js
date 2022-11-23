import React, { useState, useContext } from "react";
import styles from "./Schedule.module.css";
import MultiSelect from "./MultiSelect";
import { FaEdit } from "react-icons/fa";
import { LoginContext } from "../../LoginContext";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from 'axios';
import useGenreOptions from "../../hooks/useGenreOptions";
import ScheduleTable from "./ScheduleTable";
import Loading from "../SideDrawer/Loading";
import Notification from "../Notification";


function Schedule({ }) {
    const queryClient = useQueryClient();
    const { loggedInUserContext } = useContext(LoginContext);
    const [loggedInUser, setLoggedInUser] = loggedInUserContext;
    const { isSuccessGenreOptions, data: genreOptions } = useGenreOptions();
    const [editMode, setEditMode] = useState(false);
    const [editingGenreAndFees, setEditingGenreFees] = useState([]);
    const [editingSchedule, setEditingSchedule] = useState();
    const [showNotification, setShowNotification] = useState({ show: false, message: "" });

    const scheduleQueryFn = () => {
        return (axios.get(`api/read_teacher_raw_schedule/?id=${loggedInUser.id}`))
    };
    const { isLoading: isLoadingSchedule, data: savedScheduleAndFees } = useQuery({
        enabled: genreOptions?.length !== 0,
        queryKey: ['schedule', loggedInUser.id],
        queryFn: scheduleQueryFn,
        refetchOnWindowFocus: false,
        select: (response) => {
            let savedSchedule = {
                "Mon": {},
                "Tue": {},
                "Wed": {},
                "Thu": {},
                "Fri": {},
                "Sat": {},
                "Sun": {}
            };
            let savedGenreFees = [];
            let genreOptionFound;
            for (const [parentGenre, schedules] of Object.entries(response.data)) {
                for (const [genre, scheduleAndFees] of Object.entries(schedules)) {
                    genreOptionFound = genreOptions.find((genreOption) => {
                        return genreOption.value === `${parentGenre}-${genre}`
                    });
                    savedGenreFees.push({ ...genreOptionFound, fees: scheduleAndFees.class_details.hourly_rate });
                    for (const [day, timings] of Object.entries(scheduleAndFees.class_timings)) {
                        for (const time of timings) {
                            savedSchedule[day][time] = {
                                ...genreOptionFound,
                                fees: Number(scheduleAndFees.class_details.hourly_rate),
                            };
                        }
                    }
                }
            }
            return { savedSchedule: savedSchedule, savedGenreFees: savedGenreFees };

        },
        onSuccess: (data) => { setEditingSchedule(data.savedSchedule); setEditingGenreFees(data.savedGenreFees) }
    });
    const { isLoadingSaveSchedule, mutate: saveSchedule } = useMutation({
        mutationFn: postBody => {
            return axios.post('/api/update_teacher_raw_schedule/', postBody)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['schedule', loggedInUser.id] })
        }
    })
    const handleEditMode = () => {
        setEditMode(true);
    };
    const handleCancelEditMode = () => {
        setEditMode(false);
        setEditingSchedule(savedScheduleAndFees.savedSchedule);
        setEditingGenreFees(savedScheduleAndFees.savedGenreFees);
    };
    const handleChangeGenres = (optionArray, actionDetails) => {
        setEditingGenreFees(optionArray.map((genreOption) => {
            if (!genreOption.fees) {
                return {
                    ...genreOption,
                    fees: 0,
                }
            }
            return genreOption;
        }));

        let removedValue;
        if (actionDetails.action === "remove-value") {
            removedValue = actionDetails.removedValue.value;
            setEditingSchedule(oldState => {
                let oldStateCopy = { ...oldState };
                for (const [day, daySchedule] of Object.entries(oldState)) {
                    for (const [time, genreOption] of Object.entries(daySchedule)) {
                        if (genreOption.value === removedValue) {
                            //Delete the entry [time]:value 
                            const { [time]: value, ...newValue } = oldStateCopy[day];
                            oldStateCopy[day] = newValue;
                        }
                    }
                }
                return oldStateCopy;
            })
        }
    };
    const handleChangeFees = (e) => {
        setEditingGenreFees((oldState) => oldState.map((genreOption) => {
            if (genreOption.value === e.target.name) {
                return {
                    ...genreOption,
                    fees: Number(e.target.value),
                }
            }
            return genreOption;
        }));
    }
    const handleChangeSchedule = (day, time, genre) => {
        setEditingSchedule(oldState => ({
            ...oldState,
            [day]: {
                ...oldState[day],
                [time]: genre,
            }
        }));
    };
    const handleSubmitSchedule = () => {
        for (const genreOption of editingGenreAndFees) {
            if (genreOption.fees === 0) {
                setShowNotification({ show: true, message: `Please enter fees for ${genreOption.label}` });
                return;
            }
        }
        setEditMode(false);
        let scheduleToSend = {};
        let parentGenre;
        let genre;
        for (const genreOption of editingGenreAndFees) {
            [parentGenre, genre] = genreOption.value.split("-");
            scheduleToSend[parentGenre] = { [genre]: {} };
            scheduleToSend[parentGenre][genre]["class_details"] = {
                "class_mode": 'Online',
                "hourly_rate": genreOption.fees,
            };
            scheduleToSend[parentGenre][genre]["class_timings"] = {
                "Mon": [],
                "Tue": [],
                "Wed": [],
                "Thu": [],
                "Fri": [],
                "Sat": [],
                "Sun": []
            };
        }
        for (const [day, daySchedule] of Object.entries(editingSchedule)) {
            for (const [time, genreOption] of Object.entries(daySchedule)) {
                [parentGenre, genre] = genreOption.value.split("-");
                scheduleToSend[parentGenre][genre]["class_timings"][day].push(Number(time));
            }
        }
        saveSchedule({
            id: loggedInUser.id,
            schedule: scheduleToSend
        });
    };

    return (
        <>
            <Notification show={showNotification.show} setShow={setShowNotification} message={showNotification.message} />

            <div className="d-flex align-items-start mb-2">
                <h4 className="">Class Details </h4>
                <button className="border-0 bg-transparent p-0 m-0" onClick={handleEditMode}>
                    <h4 className={`${styles["featured-artist-header-single-arrow-icon"]} p-0 m-0 ms-3  d-flex align-items-center`}>
                        <FaEdit className={`${styles["edit-icon"]}`} />
                    </h4>
                </button>
            </div>

            {isLoadingSchedule ? <Loading /> :
                <>
                    <MultiSelect
                        isDisabled={!editMode}
                        editingGenreAndFees={editingGenreAndFees}
                        handleChangeGenres={handleChangeGenres}
                        handleChangeFees={handleChangeFees}
                        options={genreOptions}
                    />
                    <h5 className="mt-4">Your TimeTable </h5>
                    <div className={`${styles["table-container"]}`}>
                        <ScheduleTable
                            editingSchedule={editingSchedule}
                            editMode={editMode}
                            availableGenres={editingGenreAndFees}
                            handleChangeSchedule={handleChangeSchedule}
                        />
                    </div>
                </>
            }
            <div className={`pb-lg-4 py-3 d-flex justify-content-lg-end`}>
                <button className={`${styles["login-button"]} me-4`}
                    disabled={!editMode}
                    onClick={handleCancelEditMode}
                >
                    Cancel
                </button>
                <button className={`${styles["login-button"]}`}
                    disabled={!editMode}
                    onClick={handleSubmitSchedule}
                >
                    Save
                </button>
            </div>
        </>
    );
}

export default Schedule;