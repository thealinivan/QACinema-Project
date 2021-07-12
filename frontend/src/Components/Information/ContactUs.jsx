import { Modal, Button, Container, Form, Row, Col } from 'react-bootstrap'
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import '../../CSS/Pages.css';

const ContactUs = () => {

    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState('feedback');
    const [message, setMessage] = useState('');

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setEmail('');
        setTopic('feedback');
        setMessage('');
    }

    const handleShow = () => setShow(true);


    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage();
    }

    const sendMessage = () => {
        handleShow();
    }

    return (
        <div class='background'>
            <h1 class='landing-text'> Contact Us </h1>
            <Container className='bg-dark text-white'>
                <Form>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2" className="text-right pr-4"> Your E-mail </Form.Label>
                        <Form.Control type='email' id='email' placeholder="name@example.com" onChange={(event) => {
                            return setEmail(event.target.value);
                        }} value={email}></Form.Control>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3 pr-3" >
                        <Form.Label column sm="2" className="text-right pr-4"> Topic</Form.Label>
                        <Col sm="10">
                            <Form.Control as="select" name='subject' id='subject'
                                onChange={(event) => {
                                    return setTopic(event.target.value);
                                }} value={topic}>
                                <option value='feedback'> Feedback </option>
                                <option value='booking'> Venue Booking </option>
                                <option value='message'> Other </option>
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2" className="text-right pr-4"> Your Message </Form.Label>
                        <Form.Control
                            as="textarea" id='message' placeholder="Leave a comment here"
                            onChange={(event) => {
                                return setMessage(event.target.value);
                            }} value={message}></Form.Control>
                    </Form.Group>

                    <Button class='button btn-primary' id='submit' type='submit' size="lg" onClick={handleSubmit}> Send </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title> Thanks for your E-mail!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>We appreciate your {topic} and will get back you as soon as we can. You can expect a reply from us sent to {email} within the next 5 working days.</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Form>
            </Container >
            <div id="fixed">
            </div>
        </div >
    )
}
export default ContactUs;