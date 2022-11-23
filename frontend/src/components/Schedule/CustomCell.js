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
function CustomPopover(props, availableGenres, selectedGenre, handleChangeGenres) {
    return (
        <Popover {...props} id="popover-basic">
            <Popover.Header as="h3">Select topic for this time slot</Popover.Header>
            <Popover.Body>
                <Select
                    className="my-3"
                    options={availableGenres}
                    styles={customStyles}
                    placeholder="Choose topic"
                    onChange={handleChangeGenres}
                    value={selectedGenre}
                    isSearchable={false}
                />

                <button className="me-2" onClick={() => document.body.click()}>Save</button>
                <button onClick={() => {
                    document.body.click();
                    handleChangeGenres(null);
                }}>Delete</button>
            </Popover.Body>
        </Popover>
    );
}

function CustomCell({ isDisabled, availableGenres }) {
    const [showPopover, setShowPopover] = useState();
    const [selectedGenre, setSelectedGenre] = useState();
    const handleChangeGenres = (selectedOption) => {
        setSelectedGenre(selectedOption);
    };

    const handleTogglePopover = (show) => {
        setShowPopover(show);
    };
    return (
        <OverlayTrigger
            show={showPopover}
            onToggle={handleTogglePopover}
            trigger={isDisabled ? "" : "click"}
            placement="auto"
            overlay={(props) => CustomPopover(props, availableGenres, selectedGenre, handleChangeGenres)}
            rootClose
        >
            <td
                style={selectedGenre ? {
                    backgroundColor: chroma(selectedGenre.color).alpha(0.2).css(),
                    color: selectedGenre.color
                } : null}
                className={`${!editMode ? styles["disabled"] : ""}`}
            >
            </td>
        </OverlayTrigger>
    );
}

export default CustomCell;