import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaUser,
  FaCommentDots,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/PageheaderContent/PageHeaderContent';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [buttonText, setButtonText] = useState('🚀 Send Message');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setButtonText('⏳ Sending...');

    emailjs
      .send('service_3hinhyo', 'template_aon5e5b', formData, 'RWFvDNXoyeZOXzucZ')
      .then(() => {
        setButtonText('✅ Message Sent!');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setButtonText('🚀 Send Message'), 3000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setButtonText('❌ Failed. Try Again!');
        setTimeout(() => setButtonText('🚀 Send Message'), 3000);
      });
  };

  return (
    <>
      <section id='Contact' className='contact'>
        <PageHeaderContent
          headertext="Contact"
          icon={<BsInfoCircleFill size={40} />}
        />
      </section>

      <Container className="my-5 text-white">
        <Row className="g-4">
          {/* Left Side */}
          <Col md={5}>
            <Card bg="dark" text="white" className="p-4 contact-card h-100">
              <h4 className="mb-4">📬 Get in Touch</h4>
              <p><FaUser className="me-2" /> <strong>S D LOKESH</strong></p>
              <p><FaPhoneAlt className="me-2 text-warning" /> +91 8309966782</p>
              <p><FaEnvelope className="me-2 text-danger" /> lokeshvasu63@gmail.com</p>
              <p><FaMapMarkerAlt className="me-2 text-success" /> Hyderabad, India</p>
            </Card>
          </Col>

          {/* Right Side */}
          <Col md={7}>
            <Card className="p-4 bg-light contact-card text-dark">
              <h4 className="text-center contact-title mb-4">Have a question? Send a message.</h4>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label className="contact-label"><FaUser className="me-2" />Your Name</Form.Label>
                  <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="contact-label"><FaEnvelope className="me-2" />Your Email</Form.Label>
                  <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Label className="contact-label"><FaPhoneAlt className="me-2" />Your Phone</Form.Label>
                  <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label className="contact-label"><FaCommentDots className="me-2" />Your Message</Form.Label>
                  <Form.Control as="textarea" rows={4} name="message" value={formData.message} onChange={handleChange} required />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 contact-btn">
                  {buttonText}
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
