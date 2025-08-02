import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-vh-100 d-flex align-items-center hero-bg position-relative overflow-hidden"
    >
      <Container className="text-center text-white">
        <Row className="justify-content-center">
          <Col lg={10}>
            <div data-aos="fade-up" data-aos-duration="1000">
              <img 
                src="/images/picofme.JPG" 
                alt="Luke Graham"
                className="rounded-circle mb-4 shadow-lg float-animation"
                style={{
                  width: '250px',
                  height: '250px',
                  objectFit: 'cover',
                  border: '5px solid rgba(255, 255, 255, 0.3)'
                }}
              />
            </div>
            
            <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <h1 className="display-3 fw-bold mb-4 text-shadow">
                Hi, I'm <span className="text-warning">Luke</span>
              </h1>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
              <h2 className="h4 mb-4 text-light">
                Computer Science & Finance Student at WVU '26
              </h2>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
              <p className="lead mb-5 text-light opacity-90">
                Passionate about software development, AI/ML, and serving my community
              </p>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
              <Button 
                size="lg"
                className="btn-modern me-3 mb-3"
                style={{
                  backgroundColor: '#007bff',
                  borderColor: '#007bff',
                  color: 'white',
                  boxShadow: '0 4px 15px rgba(0, 123, 255, 0.3)',
                  border: 'none'
                }}
                onClick={() => scrollToSection('about')}
              >
                Explore My Portfolio
              </Button>
              <Button 
                variant="outline-light"
                size="lg"
                className="btn-modern mb-3"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>
          </Col>
        </Row>
        
        {/* Scroll Down Indicator */}
        <div 
          className="position-absolute start-50 translate-middle-x"
          style={{ bottom: '20px' }}
          data-aos="fade-up" 
          data-aos-delay="1000"
        >
          <div 
            className="d-flex flex-column align-items-center cursor-pointer bounce-animation"
            onClick={() => scrollToSection('about')}
            style={{ cursor: 'pointer' }}
          >
            <span className="mb-2 small text-light">Scroll Down</span>
            <div>
              <i className="fas fa-chevron-down fa-lg opacity-75 text-light"></i>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
