import Layout from '../components/layout';
import Gridbox from '../components/gridbox';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead.bs5.css';

import { useState } from 'react';

import Head from 'next/head';

import fs from "fs";
import path from 'path';

import links from '../data/links.json'
import OutsideSearchForm from '../components/outsidesearchform';

import { parseDCInstruct } from '../utils/parsedcinstruct';

export default function Home(props) {
    const [selected, setSelected] = useState({id: 0, label: "nothing"});
    const [wikEMSearch, setWikEMSearch] = useState('');
    return (
        <Layout>
            <Head>
                <title>EM Resources</title>
            </Head>
            <Container>
                <Row>
                    <Gridbox id="theU" data={links}>
                        <Form className='mx-2 my-2' method="get" action="https://paging.med.umich.edu/PagingMobile/" target='_blank'>
                            <InputGroup size="sm">
                                <InputGroup.Text>📟 <a href="https://paging.med.umich.edu/PagingMobile/home" target="_blank">Paging</a></InputGroup.Text>
                                <input type="hidden" name="app" value="IntWeb" />
                                <input type="hidden" name="fun" value="search" />
                                <Form.Control type="text" name="val" placeholder='Type pager/name' />  
                            </InputGroup>
                        </Form>
                    </Gridbox>
                    <Gridbox id="joes" data={links} />
                    <Gridbox id="hurley" data={links} />
                    <Gridbox id="abx" data={links} />
                    <Gridbox id="doc" data={links}>
                        <Form className="mx-2 my-2">
                            <InputGroup size="sm">
                                <InputGroup.Text>💨 <a href={links.doc.links[0].links[0].href} target="_blank">DC Instructs</a></InputGroup.Text>
                                <Typeahead
                                    options={props.dcInstructs}
                                    placeholder='Quick search...'
                                    highlightOnlyResult={true}
                                    size="sm"
                                    onChange={(sel) => {
                                        const selected = sel[0];
                                        if (selected != null) {
                                            window.open(links.doc.links[0].links[0].href + '#' + selected.id, '_blank');
                                        }
                                    }}
                                />
                            </InputGroup>
                        </Form>
                    </Gridbox>
                    <Gridbox id="other" data={links}>
                        <OutsideSearchForm placeholder="Search WikEM" btnClass="btn-secondary" urlBase="https://wikem.org/w/index.php?search=" />
                        <OutsideSearchForm placeholder="Search UpToDate" btnClass="btn-success" urlBase="https://www.uptodate.com/contents/search?search=" />
                    </Gridbox>
                </Row>
            </Container>
        </Layout>
    )
}

export async function getStaticProps() {
    // Paging services
    const paging_service_html_path = path.join(process.cwd(), 'data/paging_services.html');
    const fileContents = fs.readFileSync(paging_service_html_path, 'utf8');
    const regexp = /<option value="([0-9]+)">(.*)<\/option>/g;
    const results = [...fileContents.matchAll(regexp)];
    const options = results.map((match, i) => {
        return {type: "service", customOption: false, id: match[1], label: match[2]}
    });

    // DC instructions
    const dc_instruct_html_path = path.join(process.cwd(), 'data/documentation/dc_instruct.html');
    const dcInstructs = parseDCInstruct(dc_instruct_html_path);
    return {props: {
        pagingOptions: options,
        dcInstructs: dcInstructs
    }};

}