import Layout from '../components/layout';
import Gridbox from '../components/gridbox';
import GridboxContents from '../components/gridboxcontents';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import links from '../data/links.json'

export default function Home(props) {
    return (
        <Layout>
            <Container>
                <Row>
                    <Gridbox>
                        <GridboxContents id="theU" data={links} />
                    </Gridbox>
                    <Gridbox>
                        <GridboxContents id="joes" data={links} />
                    </Gridbox>
                    <Gridbox>
                        <GridboxContents id="hurley" data={links} />
                    </Gridbox>
                    <Gridbox>
                        <GridboxContents id="abx" data={links} />
                    </Gridbox>
                    <Gridbox>
                        <GridboxContents id="doc" data={links} />
                    </Gridbox>
                    <Gridbox>
                        <GridboxContents id="other" data={links} />
                    </Gridbox>
                </Row>
            </Container>
        </Layout>
    )
}