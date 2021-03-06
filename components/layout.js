import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'next/image';
import Head from 'next/head';

export default function Layout({ children }) {
    return (
    <>
    <Head>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
    </Head>
    <Container className='mx-auto p-3'>
        <header className='container border-bottom pb-3 mb-4 align-items-center'>
            <a href='/' className="text-decoration-none">
                <Container fluid>
                <Row>
                    <Col xs={3} sm={2} md={2} lg={1}>
                        <Image src={"/raccoon.png"} height={75} width={75} layout="fixed" />
                    </Col>
                    <Col>
                        <div className="display-6 text-dark pb-0">EM Resources</div>
                        <small className="text-muted"><em>Fewer clicks, more happiness</em></small>
                    </Col>
                </Row>
                </Container>
            </a>
        </header>
        <main>
            {children}
        </main>
        <footer className='pt-3 mt-5 mb-2 text-muted border-top'>
            <small>This is a useful aid for personal use only. The links included on this page are not professionally
            maintained and could be out of date; this website and the resources herein cannot replace clinical judgement.
            Including the resources on this page does not imply the endorsement of the University of Michigan, Trinity Health,
            Hurley Hospital, or any other organization. This website uses Google Analytics to collect user engagement data.
            This is used to enhance website features and could be used for research publication in the future.</small>
        </footer>
    </Container>
    </>
    );
}