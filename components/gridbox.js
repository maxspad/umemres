import Col from 'react-bootstrap/Col'

export default function Gridbox(props) {
    const id = props.id; 
    const data = props.data[id];
    return (
        <>
        <Col lg={4} className="gy-3 gx-3">
            <div className='border bg-light p-3' style={{height: "100%"}}>
                <h2>{data.title}</h2>
                {props.children}
                <ul>
                    {data.links.map((obj, i) => 
                        <li>
                            <a href={obj.href} target="_blank">{obj.text}</a>
                        </li>
                    )}
                </ul>
            </div>
        </Col>    
        </>
    );
}