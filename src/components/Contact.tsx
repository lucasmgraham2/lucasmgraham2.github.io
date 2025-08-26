import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState<'success' | 'danger'>('success');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration from environment variables
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
      
      // Debug logging
      console.log('EmailJS Configuration:', {
        serviceId: serviceId ? 'Set' : 'Missing',
        templateId: templateId ? 'Set' : 'Missing',
        publicKey: publicKey ? 'Set' : 'Missing'
      });
      
      // Check if environment variables are configured
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }
      
      // Send email using EmailJS
      console.log('Attempting to send email with EmailJS...');
      const result = await emailjs.sendForm(serviceId, templateId, e.currentTarget, publicKey);
      console.log('EmailJS Success:', result);
      
      setAlertType('success');
      setAlertMessage('Thank you for your message! I\'ll get back to you soon.');
      setShowAlert(true);
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
      
    } catch (error) {
      console.error('EmailJS Error Details:', error);
      setAlertType('danger');
      setAlertMessage('Failed to send message. Please try again or contact me directly at lucasmgraham2@gmail.com');
      setShowAlert(true);
    } finally {
      setIsSubmitting(false);
    }
    
    // Hide alert after 8 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 8000);
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'lucasmgraham2@gmail.com',
      link: 'mailto:lucasmgraham2@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '304-205-2331',
      link: 'tel:+13042052331'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Morgantown, WV',
      link: 'https://maps.google.com/?q=Morgantown,WV'
    }
  ];

  const socialLinks = [
    {
      platform: 'LinkedIn',
      icon: 'fab fa-linkedin',
      url: 'https://www.linkedin.com/in/lmg42/',
      color: '#0077B5'
    },
    {
      platform: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/lucasmgraham2',
      color: '#333'
    },
    {
      platform: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://www.instagram.com/luke_graham42',
      color: '#E4405F'
    }
  ];

  return (
    <section id="contact" className="section bg-light">
      <Container>
        <Row className="mb-5">
          <Col>
            <div data-aos="fade-up" className="text-center">
              <h2 className="display-5 fw-bold text-gradient mb-4">Get In Touch</h2>
              <p className="lead text-muted mb-5">
                I'm always open to discussing new opportunities, interesting projects, or just having a great conversation.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="g-5">
          {/* Contact Information */}
          <Col lg={5}>
            <div data-aos="fade-right">
              <h3 className="h4 fw-bold text-primary mb-4">Let's Connect</h3>
              <p className="mb-4">
                If you are looking for a software developer, want to collaborate on a project, 
                or just want to talk, I'd love to hear from you!
              </p>

              {/* Contact Info Cards */}
              <div className="mb-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="modern-card border-0 shadow-sm mb-3">
                    <Card.Body className="p-3">
                      <div className="d-flex align-items-center">
                        <div 
                          className="contact-icon d-flex align-items-center justify-content-center me-3"
                          style={{
                            width: '50px',
                            height: '50px',
                            background: 'linear-gradient(45deg, var(--primary-blue), var(--secondary-teal))',
                            borderRadius: '50%',
                            color: 'white'
                          }}
                        >
                          <i className={info.icon}></i>
                        </div>
                        <div>
                          <h6 className="fw-bold mb-1">{info.title}</h6>
                          <a 
                            href={info.link} 
                            className="text-decoration-none text-muted hover-primary"
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div className="mb-4">
                <h5 className="fw-bold text-primary mb-3">Follow Me</h5>
                <div className="d-flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link d-flex align-items-center justify-content-center"
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        background: social.color,
                        color: 'white',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)';
                        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>

              {/* Resume Download */}
              <div className="mb-4">
                <Button
                  variant="primary"
                  size="lg"
                  href="/files/Luke_Graham_Aug_2025.pdf"
                  target="_blank"
                  className="btn-modern btn-primary-modern rounded-pill w-100"
                >
                  <i className="fas fa-download me-2"></i>
                  Download Resume
                </Button>
              </div>
            </div>
          </Col>

          {/* Contact Form */}
          <Col lg={7}>
            <div data-aos="fade-left">
              <Card className="modern-card border-0 shadow-lg">
                <Card.Body className="p-5">
                  <h3 className="h4 fw-bold text-primary mb-4">Send Me a Message</h3>
                  
                  {showAlert && (
                    <Alert 
                      variant={alertType} 
                      className="mb-4"
                      dismissible 
                      onClose={() => setShowAlert(false)}
                    >
                      {alertMessage}
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-bold">First Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="first_name"
                            placeholder="Your first name"
                            required
                            className="rounded-3"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-bold">Last Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="last_name"
                            placeholder="Your last name"
                            required
                            className="rounded-3"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row className="g-3 mt-2">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-bold">Email *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            placeholder="your.email@example.com"
                            required
                            className="rounded-3"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-bold">Phone</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            placeholder="(123) 456-7890"
                            className="rounded-3"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mt-3">
                      <Form.Label className="fw-bold">Subject *</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        placeholder="What's this about?"
                        required
                        className="rounded-3"
                      />
                    </Form.Group>

                    <Form.Group className="mt-3">
                      <Form.Label className="fw-bold">Message *</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        placeholder="Tell me about your project, opportunity, or just say hello!"
                        required
                        className="rounded-3"
                      />
                    </Form.Group>

                    <div className="text-center mt-4">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={isSubmitting}
                        className="btn-modern btn-primary-modern rounded-pill px-5 py-3"
                      >
                        <i className={`fas ${isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'} me-2`}></i>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>

        {/* Footer */}
        <Row className="mt-5 pt-5 border-top">
          <Col>
            <div data-aos="fade-up" className="text-center">
              <p className="text-muted mb-3">
                © 2025 Luke Graham. Built with React, TypeScript, Bootstrap, and Copilot's expertise.
              </p>
              <p className="text-muted small">
                Designed & Developed with <i className="fas fa-heart text-danger"></i>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
