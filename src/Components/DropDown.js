import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

function DropDown(props) {
    return (
        <Dropdown as={ButtonGroup}>
            <Button variant="outline-secondary">{props.name}</Button>

            <Dropdown.Toggle split variant="outline-secondary" id="dropdown-split-basic" />

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Card</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Cash</Dropdown.Item>

            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropDown;