import React from 'react'
import GoogleMaps from 'simple-react-google-maps';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import emailjs from '@emailjs/browser';
import { useRef } from "react";

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5fihfud', 'template_e6osyjf', form.current, 'nQjHTv6vOhxaYQLe4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
    <div className='home mt-3'>
    <Container>
      <Row>
      <Col>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label><br />
      <input type="text" name="user_name" style={{ marginBottom: '1.0rem' }} /><br />
      <label>Email  </label><br />
      <input type="email" name="user_email" style={{ marginBottom: '1.0rem' }} /><br />
      <label>Message  </label><br />
      <textarea name="message" rows={6} cols={80} style={{ marginBottom: '1.0rem' }} /><br />
      <input type="submit" value="Send" style={{ paddingLeft: '1.0rem', paddingRight: '1.0rem' }} />
    </form>
    </Col></Row>
</Container>
    <br />
    <Container>
      <Row>
      <Col>
    <GoogleMaps
  apiKey={"AIzaSyChZPizXo_3sk70Cm4yveOd0YfQtuxc7As"}
  style={{height: "400px", width: "100%"}}
  zoom={6}
  center={{lat: 31.478841, lng: 74.258172}}
  markers={{lat: 31.478841, lng: 74.258172}} //optional
/>
</Col></Row>
</Container>
    </div>
    </>
  )
}
