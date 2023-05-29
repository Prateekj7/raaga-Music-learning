import { useMemo } from "react";
import Table from 'react-bootstrap/Table';
import styles from "./Schedule.module.css";
import CustomCell from "./CustomCell";


function ScheduleTable({ editingSchedule, editMode, availableGenres, handleChangeSchedule }) {
    const weekdays = useMemo(() => [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun"
    ], []);
    const classTimes = useMemo(() => [
        { value: "6", label: "6:00 am" },
        { value: "8", label: "8:00 am" },
        { value: "10", label: "10:00 am" },
        { value: "12", label: "12:00 pm" },
        { value: "14", label: "2:00 pm" },
        { value: "16", label: "4:00 pm" },
        { value: "18", label: "6:00 pm" },
        { value: "20", label: "8:00 pm" },
        { value: "22", label: "10:00 pm" },
    ], []);

    return (
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
                {classTimes.map((classTime, index) =>
                    <tr key={index}>
                        <th>{classTime.label}</th>
                        {weekdays.map((weekday, index) => {
                            return <CustomCell
                                key={index}
                                editMode={editMode}
                                availableGenres={availableGenres}
                                selectedGenre={editingSchedule?.[weekday]?.[classTime.value]}
                                handleChangeSchedule={(selectedGenre) => handleChangeSchedule(weekday, classTime.value, selectedGenre)}
                                weekday={weekday}
                                time={classTime.value}
                            />
                        }

                        )}
                    </tr>)}
            </tbody>
        </Table>
    );

}

export default ScheduleTable;