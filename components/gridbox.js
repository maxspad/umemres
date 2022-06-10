import Col from 'react-bootstrap/Col'

export default function Gridbox({ children }) {
    return (
        <>
        <Col lg={4} className="gy-3 gx-3">
            <div className='border bg-light p-3'>
                {children}
            </div>
        </Col>    
        </>
    );
}