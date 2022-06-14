import path from 'path';
import fs from 'fs';

import Layout from '../components/layout';

import { Container, Row, Col } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';

import slugify from 'slugify';

export default function DcInstruct(props) {
  const dcInstructs = props.dcInstructs;
  // console.log(dcInstructs);
  return (
    <Layout>
      <h1 className='display-4' id="top">Discharge Instructions</h1>
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
  );
}

export async function getStaticProps() {
  const dc_instruct_html_path = path.join(process.cwd(), 'data/documentation/dc_instruct.html');
  const fileContents = fs.readFileSync(dc_instruct_html_path, 'utf8');
  const regexp = /1>(.*?)<\/h1>(.*?)<h/gs
  const results = [...fileContents.matchAll(regexp)];
  console.log(results);
  const dcInstructs = results.map((match, i) => {
    return {id: slugify(match[1]), label: match[1], content: match[2]};
  });
  return {props: {dcInstructs: dcInstructs}};
}