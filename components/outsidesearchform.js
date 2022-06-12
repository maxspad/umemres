import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from 'react-bootstrap/Button';

import { useState } from 'react';


export default function OutsideSearchForm(props) {
    const [searchBoxText, setSearchBoxText] = useState('');
    return (
    <Form className='mx-4 my-2'
        onSubmit={(event) => {
            event.preventDefault();
            const url_base = props.urlBase;
            const url_to_open = url_base + searchBoxText;
            window.open(encodeURI(url_to_open), '_blank');
        }}>
        <InputGroup size="sm">
                <Form.Control type="input" placeholder={props.placeholder} onChange={(e) => {setSearchBoxText(e.target.value);}}></Form.Control>
                <Button className={props.btnClass} type="submit">🔎</Button>
        </InputGroup>
    </Form>
    );
}