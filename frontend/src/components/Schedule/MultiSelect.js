import React from 'react';
import Select from 'react-select';
import chroma from 'chroma-js';
import { Col, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

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

function MyComponent({ isDisabled, editingGenreAndFees, handleChangeGenres, handleChangeFees, options }) {
    return <>
        <Select
            className="my-3"
            options={options}
            styles={customStyles}
            isMulti
            placeholder="Select the topics you want to teach"
            onChange={handleChangeGenres}
            value={editingGenreAndFees}
            isSearchable={false}
            isDisabled={isDisabled}
        />
        <Form id="hourly-rate-form " className="mb-3">
            {editingGenreAndFees.map((genre, index) =>
                <Form.Group key={genre.value} as={Row} className="mb-lg-3" controlId="formBasicFees">
                    <Form.Label column sm="4">{genre.label}</Form.Label>
                    <Col>
                        <InputGroup >
                            <InputGroup.Text id="basic-addon1">&#x20b9;</InputGroup.Text>
                            <Form.Control className={`shadow-none`}
                                name={genre.value}
                                type="number"
                                maxLength={50}
                                placeholder={`Your rate for ${genre.label}`}
                                onChange={handleChangeFees}
                                disabled={isDisabled}
                                value={genre.fees}
                            />
                            <InputGroup.Text id="basic-addon1">per hour</InputGroup.Text>
                        </InputGroup>
                    </Col>
                </Form.Group>
            )}
        </Form>

    </>
}
export default MyComponent;