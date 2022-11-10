import React, { useState } from 'react';
import Select from 'react-select';
import chroma from 'chroma-js';
import { Col, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import InputGroup from 'react-bootstrap/InputGroup';


const options = [
    { value: 'vocal-indian_classical', label: 'Indian Classical (Vocal)', color: '#e83f47', },
    { value: 'vocal-ghazal', label: 'Ghazal (Vocal)', color: '#5e00a1', },
    { value: 'vocal-pop', label: 'Pop (Vocal)', color: '#691a58' },
    { value: 'instrumental-guitar', label: 'Guitar (Instrumental)', color: '#cd9c5c', },
    { value: 'instrumental-piano', label: 'Piano (Instrumental)', color: '#131415' },

];

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

function MyComponent({ isDisabled, selectedGenres, handleChangeGenres, handleChangeFees }) {
    const { register, handleSubmit, reset, formState: { isDirty, dirtyFields } } = useForm();

    return <>
        <Select
            className="my-3"
            options={options}
            styles={customStyles}
            isMulti
            placeholder="Select the topics you want to teach"
            onChange={handleChangeGenres}
            value={selectedGenres}
            isSearchable={false}
            isDisabled={isDisabled}
        />
        <Form id="hourly-rate-form " className="mb-3">
            {selectedGenres.map((genre, index) =>
                <Form.Group key={genre.value} as={Row} className="mb-lg-3" controlId="formBasicName">
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