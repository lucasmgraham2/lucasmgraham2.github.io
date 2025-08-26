import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <Navbar 
      expand="lg" 
      fixed="top"
      className={`py-3 transition-all ${scrolled ? 'bg-dark shadow-lg' : 'bg-transparent'}`}
      variant="dark"
    >
      <Container>
        <Navbar.Brand 
          href="#home" 
          className="fw-bold fs-3"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          style={{ 
            cursor: 'pointer',
            color: scrolled ? '#ffc107' : '#17a2b8',
            textShadow: scrolled ? '2px 2px 4px rgba(0, 0, 0, 0.7)' : '2px 2px 4px rgba(0, 0, 0, 0.8)',
            fontWeight: '700',
            transition: 'all 0.3s ease'
          }}
        >
          Luke Graham
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              className="mx-2 fw-semibold"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              style={{ 
                cursor: 'pointer',
                color: scrolled ? '#f8f9fa' : 'rgba(255, 255, 255, 0.9)',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
              }}
            >
              About
            </Nav.Link>
            <Nav.Link 
              className="mx-2 fw-semibold"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('skills');
              }}
              style={{ 
                cursor: 'pointer',
                color: scrolled ? '#f8f9fa' : 'rgba(255, 255, 255, 0.9)',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
              }}
            >
              Skills
            </Nav.Link>
            <Nav.Link 
              className="mx-2 fw-semibold"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('experience');
              }}
              style={{ 
                cursor: 'pointer',
                color: scrolled ? '#f8f9fa' : 'rgba(255, 255, 255, 0.9)',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
              }}
            >
              Experience
            </Nav.Link>
            <Nav.Link 
              className="mx-2 fw-semibold"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('involvement');
              }}
              style={{ 
                cursor: 'pointer',
                color: scrolled ? '#f8f9fa' : 'rgba(255, 255, 255, 0.9)',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
              }}
            >
              Involvement
            </Nav.Link>
            <Nav.Link 
              className="mx-2 fw-semibold"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
              style={{ 
                cursor: 'pointer',
                color: scrolled ? '#f8f9fa' : 'rgba(255, 255, 255, 0.9)',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
              }}
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              className="mx-2 fw-semibold"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              style={{ 
                cursor: 'pointer',
                color: scrolled ? '#f8f9fa' : 'rgba(255, 255, 255, 0.9)',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
              }}
            >
              Contact
            </Nav.Link>
            <Nav.Link 
              href="/files/Luke_Graham_Aug_2025.pdf" 
              target="_blank"
              className="mx-2 fw-semibold"
              style={{ 
                cursor: 'pointer',
                color: scrolled ? '#f8f9fa' : 'rgba(255, 255, 255, 0.9)',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
              }}
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
