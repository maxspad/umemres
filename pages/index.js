import Layout from '../components/layout';
import Gridbox from '../components/gridbox';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function Home() {
    return (
        <Layout>
            <Container>
                <Row>
                    <Gridbox>
                        <h2>UofM</h2>
                        <ul>
                            <li>item 1</li>
                            <li>item 2</li>
                        </ul>
                    </Gridbox>
                    <Gridbox>
                        <h2>UofM</h2>
                        <ul>
                            <li>item 1</li>
                            <li>item 2</li>
                        </ul>
                    </Gridbox>
                    <Gridbox>
                        <h2>UofM</h2>
                        <ul>
                            <li>item 1</li>
                            <li>item 2</li>
                        </ul>
                    </Gridbox>
                    <Gridbox>
                        <h2>UofM</h2>
                        <ul>
                            <li>item 1</li>
                            <li>item 2</li>
                        </ul>
                    </Gridbox>
                    <Gridbox>
                        <h2>UofM</h2>
                        <ul>
                            <li>item 1</li>
                            <li>item 2</li>
                        </ul>
                    </Gridbox>
                    <Gridbox>
                        <h2>UofM</h2>
                        <ul>
                            <li>item 1</li>
                            <li>item 2</li>
                        </ul>
                    </Gridbox>
                </Row>
            </Container>
        </Layout>
    )
}