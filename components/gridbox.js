import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/Container"

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
                        <ul className="list-unstyled">
                            {data.links.map((obj, i) => {
                                if ((obj.enabled) || (obj.enabled == null)) {
                                    return (
                                        <li>
                                            <a href={obj.href} className="text-decoration-none" target="_blank">{obj.icon}</a>
                                            <a href={obj.href} target="_blank">{obj.text}</a>
                                        </li>
                                    );
                                }
                            })}
                        </ul>
                        </Container>
                    </Card.Text>
                </Card.Body>
            </Card>
            {/* <div className='border bg-light p-3' style={{height: "100%"}}>
                <h2>{data.title}</h2>
                {props.children}
                <ul>
                    {data.links.map((obj, i) => {
                        if ((obj.enabled) || (obj.enabled == null)) {
                            return (
                                <li>
                                    <a href={obj.href} className="text-decoration-none" target="_blank">{obj.icon}</a>
                                    <a href={obj.href} target="_blank">{obj.text}</a>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div> */}
        </Col> 
        <style jsx>{`
                .mycard {
                    background-color: #000000;
                }
            `}</style>   
        </>
    );
}