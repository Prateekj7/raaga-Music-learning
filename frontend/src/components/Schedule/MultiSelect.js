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
    option: (provided, state) => ({
        ...provided,
        color: state.data.color
    }),
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

function MyComponent() {
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [fees, setFees] = useState();
    const { register, handleSubmit, reset, formState: { isDirty, dirtyFields } } = useForm();


    const handleChangeGenres = (optionArray) => {
        setSelectedGenres(optionArray);
    };

    const handleChangeFees = (e) => {
        setFees((oldState) => ({
            ...oldState,
            [e.target.name]: e.target.value
        }))
    };

    console.log(fees);

    return <>
        <Select
            className="my-3"
            options={options}
            styles={customStyles}
            isMulti
            placeholder="Select the topics you want to teach"
            onChange={handleChangeGenres}
            value={selectedGenres}
        />
        <Form id="signUpForm" className="mb-3">
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
                                placeholder={`Enter your hourly fees for ${genre.label}`}
                                onChange={handleChangeFees}
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