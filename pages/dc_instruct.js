import path from 'path';
import fs from 'fs';

import Layout from '../components/layout';

import { Container, Row, Col } from 'react-bootstrap';

import slugify from 'slugify';

export default function DcInstruct(props) {
  const dcInstructs = props.dcInstructs;
  // console.log(dcInstructs);
  return (
    <Layout>
      <h1 className='display-4' id="top">Discharge Instructions</h1>
      <Container className="my-4 py-4 border-top border-bottom">
        <Row>
          {dcInstructs.map((dci, i) => {
            return (
              <Col xs={2} className="gy-2">
                <a href={'#' + dci.id} dangerouslySetInnerHTML={{__html: dci.title}} />
              </Col>
            );
          })}
        </Row>
      </Container>
      {dcInstructs.map((dci, i) => {
        return (<>
          <h3 id={dci.id}>{dci.title}<span className="text-muted mx-2" style={{fontSize: "8pt"}}>(<a href="#top">back to top</a>)</span></h3>
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
    return {id: slugify(match[1]), title: match[1], content: match[2]};
  });
  return {props: {dcInstructs: dcInstructs}};
}