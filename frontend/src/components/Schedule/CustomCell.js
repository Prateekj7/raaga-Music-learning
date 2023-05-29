import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import React, { useState } from "react";
import Select from 'react-select';
import chroma from 'chroma-js';
import styles from "./Schedule.module.css";

const customStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: isDisabled
                ? undefined
                : isSelected
                    ? data.color
                    : isFocused
                        ? color.alpha(0.1).css()
                        : undefined,
            color: isDisabled
                ? '#ccc'
                : isSelected
                    ? chroma.contrast(color, 'white') > 2
                        ? 'white'
                        : 'black'
                    : data.color,
            cursor: isDisabled ? 'not-allowed' : 'default',

            ':active': {
                ...styles[':active'],
                backgroundColor: !isDisabled
                    ? isSelected
                        ? data.color
                        : color.alpha(0.3).css()
                    : undefined,
            },
        };
    },
    multiValue: (styles, { data }) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: color.alpha(0.1).css(),
        };
    },
    multiValueLabel: (styles, { data }) => ({
        ...styles,
        color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
        ...styles,
        color: data.color,
        ':hover': {
            backgroundColor: data.color,
            color: 'white',
        },
    }),
}
function CustomPopover(props, availableGenres, selectedGenre, handleChangeSchedule) {
    return (
        <Popover {...props} id="popover-basic">
            <Popover.Header as="h3">Select topic for this time slot</Popover.Header>
            <Popover.Body>
                <Select
                    className="my-3"
                    options={availableGenres}
                    styles={customStyles}
                    placeholder="Choose topic"
                    onChange={handleChangeSchedule}
                    value={selectedGenre}
                    isSearchable={false}
                />

                <button className="me-2" onClick={() => document.body.click()}>Save</button>
                <button onClick={() => {
                    document.body.click();
                    handleChangeSchedule(null);
                }}>Delete</button>
            </Popover.Body>
        </Popover>
    );
}

function CustomCell({ editMode, availableGenres, selectedGenre, handleChangeSchedule }) {
    const [showPopover, setShowPopover] = useState();
    const handleTogglePopover = (show) => {
        setShowPopover(show);
    };

    return (
        <OverlayTrigger
            show={showPopover}
            onToggle={handleTogglePopover}
            trigger={!editMode ? "" : "click"}
            placement="auto"
            overlay={(props) => CustomPopover(props, availableGenres, selectedGenre, handleChangeSchedule)}
            rootClose
        >
            <td
                style={selectedGenre ? {
                    backgroundColor: chroma(selectedGenre.color).alpha(0.2).css(),
                    color: selectedGenre.color
                } : null}
                className={`${!editMode ? styles["disabled"] : ""}`}
            >
                {selectedGenre?.label}
            </td>
        </OverlayTrigger>
    );
}

export default CustomCell;