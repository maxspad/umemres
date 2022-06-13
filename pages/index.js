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

import fs from "fs";
import path from 'path';

import links from '../data/links.json'
import OutsideSearchForm from '../components/outsidesearchform';

export default function Home(props) {
    const [selected, setSelected] = useState({id: 0, label: "nothing"});
    const [wikEMSearch, setWikEMSearch] = useState('');
    return (
        <Layout>
            <Container>
                <Row>
                    <Gridbox id="theU" data={links}>
                        <Form className='mb-2'>
                            <Row className='align-items-center g-2'>
                            <Col xs="auto"><Form.Label>📟<a href="https://uhmspaging.med.umich.edu/homepaging/PagingSend/search.aspx">Paging:</a></Form.Label></Col>
                            <Col xs="auto"><Typeahead
                                options={props.pagingOptions}
                                align="left"
                                placeholder="Type service/pager/name"
                                // highlightOnlyResult={true}
                                emptyLabel="Press enter to search name/pager number..."
                                allowNew={true}
                                newSelectionPrefix="Search name/pager number: "
                                id="paging-typeahead"
                                size="sm"
                                onChange={(sel) => {
                                    if (sel.length == 0) { return; }

                                    sel = sel[0];
                                    const url_root = "https://uhmspaging.med.umich.edu/homepaging/PagingSend/"
                                    var url_to_open = "";
                                    if (sel.customOption == false) {
                                        url_to_open = url_root + "oncallSchedules.aspx?val=" + sel.id;
                                    }
                                    else {
                                        const sel_text = sel.label;
                                        const sel_as_num = parseInt(sel_text);
                                        console.log(sel_text, sel_as_num);
                                        if (!isNaN(sel_as_num)) {
                                            url_to_open = url_root + "searchResults.aspx?type=PAGER&val=" + sel_text + "&rec=1";
                                        }
                                        else {
                                            url_to_open = url_root +  "searchResults.aspx?type=NAME&val=" + sel_text + "&rec=1";
                                        }
                                    }
                                    window.open(url_to_open, "_blank");
                                    
                                    console.log("Hit selected, sel is ")
                                    console.log(sel)
                                    if (sel.length == 0) { setSelected({id: 0, label: "nothing"})}
                                    else {setSelected(sel[0])}
                                    // console.log(selected)
                                }}
                            >
                            </Typeahead></Col>
                        </Row>
                        </Form>
                    </Gridbox>
                    <Gridbox id="joes" data={links} />
                    <Gridbox id="hurley" data={links} />
                    <Gridbox id="abx" data={links} />
                    <Gridbox id="doc" data={links} />
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
    const paging_service_html_path = path.join(process.cwd(), 'data/paging_services.html');
    const fileContents = fs.readFileSync(paging_service_html_path, 'utf8');
    const regexp = /<option value="([0-9]+)">(.*)<\/option>/g;
    const results = [...fileContents.matchAll(regexp)];
    // console.log(results);
    const options = results.map((match, i) => {
        return {type: "service", customOption: false, id: match[1], label: match[2]}
    });
    return {props: {pagingOptions: options}};

}