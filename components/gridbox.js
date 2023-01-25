import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Badgeable from "../components/badgeable"
import { Badge } from 'react-bootstrap'

export default function Gridbox(props) {
    const id = props.id; 
    const data = props.data[id];
    return (
        <>
        <Col lg={4} className="gy-3">
            <Card style={{height: "100%"}}>
                <Card.Header as="h2">{data.title}</Card.Header>
                <Card.Body style={{backgroundColor: "#fcfcfc"}}>
                    {/* <Card.Title>{data.title}</Card.Title> */}
                    <Card.Text>
                        {props.children}
                        <Container className="px-2">
                            <Row>
                                {data.links.map((objcol, i) => {
                                    if (objcol != null) {
                                        return (
                                            <Col>
                                                {objcol.header ? <h5>{objcol.header}&nbsp;<Badgeable text={objcol.badge} /></h5> : null}
                                                <ul className="list-unstyled">
                                                    {objcol.links.map((obj, j) => {
                                                        if (obj.enabled || (obj.enabled == null)) {
                                                            return (
                                                                <li>
                                                                    <a href={obj.href} className="text-decoration-none" target="_blank">{obj.icon}</a>
                                                                    <a href={obj.href} target="_blank">{obj.text}</a>
                                                                    &nbsp;<Badgeable text={obj.badge} />
                                                                </li>                                                        
                                                            );
                                                        }
                                                    })}
                                                </ul>
                                            </Col>
                                        )
                                    }
                                })}
                            </Row>
                        </Container>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col> 
        <style jsx>{`
                .mycard {
                    background-color: #000000;
                }
            `}</style>   
        </>
    );
}