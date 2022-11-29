import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
const SearchBar = (placeholderName) => {
    return (
        <Form >
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder={placeholderName.placeholderName}
                    size="lg"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="primary" id="button-addon2">
                    Search
                </Button>
            </InputGroup>
        </Form>
    )
}

export default SearchBar