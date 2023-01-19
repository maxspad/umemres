import Layout from '../components/layout'
import Head from 'next/head';

import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

import unums from '../data/theU_numbers.json';

export default function TheUPhoneNumbers(props) {
    const phoneNums = props.phoneNums;
    return (
    <>
        <Head>
            <title>EM Resources | UM Phone Numbers</title>
        </Head>
        <Layout>
            <h1 className='display-5' id="top">UM Phone Numbers</h1>
            <p className='text-muted'>
                <em>If a phone rings in East and there's no one around to hear it, does it make a sound?</em>
            </p>
            <Container className="my-4 py-4 border-top">
                <Table striped border hover>
                    <tbody>
                        {unums.map((numrow, i) => {
                            return (
                                <tr>
                                    {numrow.map((numcell, j) => {
                                        return (<td>{numcell}</td>)
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>    
            </Container>
        </Layout>
    </>
    );
}
