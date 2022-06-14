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
        <InputGroup size="sm" className="align-items-center">
                <Form.Control type="input" placeholder={props.placeholder} onChange={(e) => {setSearchBoxText(e.target.value);}}></Form.Control>
                <Button className={props.btnClass + ' ' + 'align-items-center'} type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search align-middle" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </Button>
        </InputGroup>
    </Form>
    );
}