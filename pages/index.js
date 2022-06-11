import Layout from '../components/layout';
import Gridbox from '../components/gridbox';
import GridboxContents from '../components/gridboxcontents';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead.bs5.css';

import { useState } from 'react';

import fs from "fs";
import path from 'path';

import links from '../data/links.json'

export default function Home(props) {
    const [selected, setSelected] = useState({id: 0, label: "nothing"});
    return (
        <Layout>
            <Container>
                <Row>
                    <Gridbox>
                        <Typeahead
                            options={props.pagingOptions}
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
                        </Typeahead>
                        {/* <p>You have selected {selected.id} {selected.label}</p> */}
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