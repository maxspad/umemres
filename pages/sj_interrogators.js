import Layout from '../components/layout'
import Head from 'next/head';
import Image from 'next/image';

import { Container } from 'react-bootstrap';

export default function SJInterrogators(props) {
    return (
    <>
        <Head>
            <title>EM Resources | SJ Interrogators</title>
        </Head>
        <Layout>
            <h1 className='display-5' id="top">How to Interrogate Pacemakers at Joe's</h1>
            <p className='text-muted'>
                <em>Don't forget to ask if they've fallen on thinners. They have.</em>
            </p>
            <Container className='my-4 py-4 border-top'>
                <p>
                    <a href="#boston">Boston Scientific</a> | <a href="#biotronik">Biotronik</a> | <a href="#medtronic">Medtronic</a>
                </p>
                <h3 id="boston">Boston Scientific</h3>
                <ol>
                    <li>If you have a patient who requires an interrogation of the Boston scientific cardiac device have the clerk call Boston scientific with the patient information to alert the rep that we will be performing an interrogation. This is important as the information gets sent to the rep's email and they need to be alerted so they can then fax the report to us. This can be done 24 hours a day</li>
                    <li>Next get the interrogator from its docking station located between teams 1&2 next to the printer. There is a button on top that releases it from the docking station.</li>
                    <li>Make sure that the usb is attached as this is how the interrogator receives its cell signal.</li>
                    <li>If turned off, the power button is on the left hand side. </li>
                    <li>Place the wand over the patient's device with LED light facing up. It does not have to be directly on the skin. It can transmit through the gown. </li>
                    <li>Press start interrogation </li>
                    <li>The interrogation should just take a few moments and the interrogator will display a message indicating that the interrogation is complete and the data has been transmitted. </li>
                    <li>The rep will fax the device report to the main fax machine between teams 1&2.</li>
                    <li>The rep will also call to summarize the report. </li> 
                    <li>If changes need to be made to the device they will come into the department. </li>
                    <li>If the patient is a Michigan heart patient the data will also be sent to Michigan Heart</li>
                    <li>Return the interrogator to the docking station</li>
                </ol>

                <h3 id="biotronik">Biotronik</h3>
                <ol>
                    <li>
                        Programmer Start Up
                        <ul>
                            <li>To open the programmer, press the button in the middle of the programmer handle.</li>
                            <li>
                                Press the power button on the close left corner of the programmer with the lid open.
                                <ul>
                                    <li>Once the power button is pressed there will be a boot sequence that will take about 60-90 seconds.  If the programmer is in a sleep mode the programmer will turn on much faster.</li>
                                </ul>
                            </li>
                            <li>
                                Once the boot sequence is complete, you will be prompted to enter a password.
                                <ul>
                                    <li>Password “1”</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        Page the Biotronik Representative / Remote Access
                        <ul>
                            <li>Page the Biotronik Representative at 800-547-0394 and wait for a call back.  The Biotronik Rep will then walk you through the following instructions. </li>
                            <li>On the right side of the screen press the “Live Support” button.</li>
                            <li>A screen will pop up and prompt you with starting Live Support. Press the “Start LiveSupport” button on the right side.</li>
                            <li>When you are connected with the representative you will need to first provide the last 4 digits of the programmer serial number, this starts with “NEO-“.</li>
                            <li>The representative will then ask for the 9 digit password. The Password is located below the serial number.</li>
                            <li>The bottom of the window will then display the Name/Email of the representative connected to the programmer.</li>
                        </ul>
                    </li>
                    <li>
                        Device Interrogation
                        <ul>
                            <li>To get access to the wand, press the Blue button next to the Pen to open the wand compartment.</li>
                            <li>
                                Remove the wand and place it over the patients device.
                                <ul>
                                    <li>The ring light on the wand will flash green when it begins to interrogate.</li>
                                    <li>The ring light will then flash orange when the programmer has switched over to wireless mode, you may now remove the wand from the patient.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ol>

                <h3 id="medtronic">Medtronic / Carelink Express</h3>
                <p><a href="joes/sj_medtronic_instruct.pdf" target="_blank">Click here to view the PDF instructions</a></p>
            </Container>
        </Layout>
    </>
    )
}