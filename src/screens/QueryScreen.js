import React, { useState } from 'react';
import './QueryScreen.css';
import { Form } from 'react-bootstrap';

function QueryScreen() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };


    return (
        <div className="centered-div">
            <div className="centered-inside-div">
                <h1>Inside div</h1>
                <Form>
                    <Form.Group controlId="formDropdown">
                        <Form.Label>Options:</Form.Label>
                        <Form.Control as="select" value={selectedOption} onChange={handleDropdownChange}>
                            <option value="">Select an option</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </div>
            <div className="input-div">
                <h1>Centered Div</h1>
                
            </div>
        </div>
    );
}

export default QueryScreen;
