import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const About: React.FC = () => {
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

  const organizations = [
    { name: 'West Virginia University', logo: '/images/wvlogo.jpg', url: 'https://www.wvu.edu/' },
    { name: 'Bible Center Church', logo: '/images/bcclogo.jpg', url: 'https://www.biblecenterchurch.com/' },
    { name: 'Idemia NSS', logo: '/images/nsslogo.jpg', url: 'https://www.idemia-nss.com/' },
    { name: 'WVU Honors College', logo: '/images/honorsllclogo.png', url: 'https://www.honors.wvu.edu/' },
    { name: 'WVU Cru', logo: '/images/crulogo2.jpg', url: 'https://sites.google.com/cru.org/wvucru/home?authuser=0' }
  ];

  const quickLinks = [
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Involvement', id: 'involvement' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact Me', id: 'contact' }
  ];

  return (
    <section id="about" className="section">
      <Container>
        {/* Organization Logos */}
        <Row className="mb-5">
          <Col>
            <div data-aos="fade-up" className="text-center">
              <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 mb-5">
                {organizations.map((org, index) => (
                  <a 
                    key={index}
                    href={org.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-decoration-none transition-all"
                  >
                    <img 
                      src={org.logo} 
                      alt={org.name}
                      className="img-fluid transition-all"
                      style={{ 
                        height: '80px', 
                        objectFit: 'contain',
                        filter: 'grayscale(1)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter = 'grayscale(0)';
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = 'grayscale(1)';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </Col>
        </Row>

        {/* About Content */}
        <Row className="align-items-center mb-5">
          <Col lg={5} className="mb-4 mb-lg-0">
            <div data-aos="fade-right">
              <img 
                src="/images/profpic.JPG" 
                alt="Luke Graham Professional"
                className="img-fluid rounded-3 shadow-lg"
                style={{ width: '100%', maxWidth: '400px' }}
              />
              
              {/* Social Links */}
              <div className="d-flex justify-content-center gap-3 mt-4">
                <a 
                  href="https://www.instagram.com/luke_graham42" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center transition-all"
                  style={{ width: '50px', height: '50px' }}
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a 
                  href="https://www.linkedin.com/in/lmg42/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center transition-all"
                  style={{ width: '50px', height: '50px' }}
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a 
                  href="https://github.com/lucasmgraham2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center transition-all"
                  style={{ width: '50px', height: '50px' }}
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </Col>
          
          <Col lg={7}>
            <div data-aos="fade-left">
              <h2 className="display-5 fw-bold text-gradient mb-4">About Me</h2>
              <h3 className="h4 mb-3 text-primary">
                B.S. Computer Science & B.S.B.A. Finance @ WVU '26
              </h3>
              <p className="lead mb-4">
                I'm a Senior and my passions are serving my community, learning new things, challenging myself, and exploring creative opportunities.
              </p>
              <p className="mb-4">
                My interests include software design and development, technical debt, artificial intelligence, financial systems, and machine learning.
              </p>
              
              <div className="mb-4">
                <h5 className="fw-bold text-primary mb-3">West Virginia University Honors/Leadership</h5>
                <ul className="list-unstyled">
                  <li className="mb-2"><i className="fas fa-star text-warning me-2"></i>Foundation Scholar</li>
                  <li className="mb-2"><i className="fas fa-star text-warning me-2"></i>Presidential Student Ambassador</li>
                  <li className="mb-2"><i className="fas fa-star text-warning me-2"></i>Cru Ministry Leader</li>
                  <li className="mb-2"><i className="fas fa-star text-warning me-2"></i>Certified Student Leader</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>

        {/* Quick Links */}
        <Row>
          <Col>
            <div data-aos="fade-up" className="text-center">
              <h3 className="mb-4 text-gradient">Learn More About My:</h3>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                {quickLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="outline-primary"
                    className="btn-modern btn-outline-modern rounded-pill px-4 py-2"
                    onClick={() => scrollToSection(link.id)}
                  >
                    {link.name}
                  </Button>
                ))}
                <Button
                  variant="primary"
                  className="btn-modern btn-primary-modern rounded-pill px-4 py-2"
                  href="/files/CS_Resume_Aug_2025.pdf"
                  target="_blank"
                >
                  <i className="fa fa-file-pdf me-2"></i>Resume
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
