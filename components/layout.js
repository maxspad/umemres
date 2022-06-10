import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Image from 'next/image'

export default function Layout({ children }) {
    return (
    <>
    <Container className='mx-auto p-3'>
        <header className='container border-bottom pb-3 mb-4 align-items-center'>
            <a href='' className="text-decoration-none">
                <Container fluid>
                <Row>
                    <Col xs={3} sm={2} md={2} lg={1}>
                        <Image src={"/raccoon.png"} height={75} width={75} layout="fixed" />
                    </Col>
                    <Col>
                        <div class="display-6 text-dark pb-0">EM Resources</div>
                        <small class="text-muted"><em>Fewer clicks, more happiness</em></small>
                    </Col>
                </Row>
                </Container>
            </a>
        </header>
        <main>
            {children}
        </main>
        <footer className='pt-3 mt-5 mb-2 text-muted border-top'>
            This content is meant to be a useful aid; it does not replace clinical judgement. · © 2022 Maxwell Spadafore
        </footer>
    </Container>

    <style jsx> {`
        .my-container {
            flex-direction: row-inline;
            flex-wrap: nowrap;
            display: inline;
        }
        .my-container-vert {
            flex-direction: column;
        }
    `}
    </style>
    </>
    );
}