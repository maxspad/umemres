import path from 'path';

import { parseDCInstruct } from '../utils/parsedcinstruct';

import Layout from '../components/layout';

import { Container, Row, Col } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';

import Head from 'next/head';

export default function DcInstruct(props) {
  const dcInstructs = props.dcInstructs;
  // console.log(dcInstructs);
  return (
    <>
    <Head>
      <title>EM Resources | DC Instructions</title>
    </Head>
    <Layout>
      <h1 className='display-5' id="top">Discharge Instructions</h1>
      <p className='text-muted'>
        The majority of these discharge instructions were taken from <a href="https://natedotphrase.com/portfolio/dc-instructions">here</a>. They have been
        slightly tweaked, but I do not own the original content.
        <br></br><em>Always read over your instructions before printing!</em>
      </p>
      <Container className="my-4 py-4 border-top border-bottom">
        <Row>
          <Col>
            <Typeahead
              options={props.dcInstructs}
              placeholder='Quick search...'
              highlightOnlyResult={true}
              onChange={(sel) => {
                const selected = sel[0];
                if (selected != null) {
                  document.getElementById(selected.id).scrollIntoView();
                }
              }}
            />
          </Col>
        </Row>
        <Row>
          {dcInstructs.map((dci, i) => {
            return (
              <Col xs={3} className="gy-2">
                <a href={'#' + dci.id} dangerouslySetInnerHTML={{__html: dci.label}} />
              </Col>
            );
          })}
        </Row>
      </Container>
      {dcInstructs.map((dci, i) => {
        return (<>
          <h3 id={dci.id}>{dci.label}<span className="text-muted mx-2" style={{fontSize: "8pt"}}>(<a href="#top">back to top</a>)</span></h3>
          <div dangerouslySetInnerHTML={{__html: dci.content}} />
        </>);
      })}
    </Layout>
    </>
  );
}

export async function getStaticProps() {
  const dc_instruct_html_path = path.join(process.cwd(), 'data/documentation/dc_instruct.html');
  const dcInstructs = parseDCInstruct(dc_instruct_html_path);
  return {props: {dcInstructs: dcInstructs}};
}