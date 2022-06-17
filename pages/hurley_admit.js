import Layout from '../components/layout'
import Head from 'next/head';
import Image from 'next/image';

import { Container } from 'react-bootstrap';

export default function HurleyAdmit(props) {
    return (
    <>
        <Head>
            <title>EM Resources | Hurley Admissions</title>
        </Head>
        <Layout>
            <h1 className='display-5' id="top">How to Admit at Hurley</h1>
            <p className='text-muted'>
                <em>Don't worry, it will never make sense and you will always get it wrong.</em>
            </p>
            <Container className="my-4 py-4 border-top">
                <p>
                    Admissions are confusing and the best way to understand is just to do it and ask people as it comes up.
                </p>
                <h3>Floor Admissions</h3>
                <Image src="/hurley/hurley_admit_flowchart.png" width={796} height={488}/>
                <p>
                    In summary, you hover over the patient's PCP on the track board. <em>If it says “Staff”</em>,
                    this is the resident service and you just call the medicine resident to sign the patient out and put in an “ED ADMIT (not psych/OB)” order. 
                </p>
                <p>
                    <em>Exception</em> is during 6-11p, Staff is closed and the patient goes to the overflow doctor (the PCS service above). 
                </p>
                <p>
                    <em>If the patient has a private PCP</em>, you put in an order for “inpatient consult to PCP” and type in the doctor's name. 
                    Either that doctor or whoever is covering for their group will call back via the clerk. 
                    The clerk or admissions coordinator (sits next to clerk in A pod) will help you with all this! 
                </p>
                <p>
                    Some PCPs also have preferences in terms of which specialist a patient should be referred to- ask the clerk about this. 
                    You will put in bridging orders overnight for PCP admits (under admission → order sets → “ED bridging orders”)- ask for help the first few times.   
                </p>
                <h3>ICU Admissions</h3>
                <p>
                    When admitting to the ICU, you have to call the ICU attending, ICU resident, and PCP.
                    The PCP will often take care of the patient themselves while in the ICU.
                </p>
            </Container>
        </Layout>
    </>
    );
}