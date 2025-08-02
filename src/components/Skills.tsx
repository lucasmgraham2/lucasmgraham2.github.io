import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

interface Skill {
  name: string;
  image: string;
  category: string;
  level?: string;
}

const Skills: React.FC = () => {
  const programmingLanguages: Skill[] = [
    // Advanced
    { name: 'Python', image: '/images/python.png', category: 'Programming Languages', level: 'Advanced' },
    { name: 'Java', image: '/images/java.png', category: 'Programming Languages', level: 'Advanced' },
    { name: 'C', image: '/images/c.jpg', category: 'Programming Languages', level: 'Advanced' },
    
    // Intermediate
    { name: 'JS/TS', image: '/images/javascript.png', category: 'Programming Languages', level: 'Intermediate' },
    { name: 'C#', image: '/images/csharp.png', category: 'Programming Languages', level: 'Intermediate' },
    
    // Beginner
    { name: 'Rust', image: '/images/rust.png', category: 'Programming Languages', level: 'Beginner' },
    { name: 'Lua', image: '/images/lua.png', category: 'Programming Languages', level: 'Beginner' }
  ];

  const softwareTools: Skill[] = [
    // Advanced
    { name: 'Git', image: '/images/git.jpg', category: 'Software & Tools', level: 'Advanced' },
    { name: 'HTML/CSS', image: '/images/htmlcss.jpg', category: 'Software & Tools', level: 'Advanced' },
    { name: 'Eggplant', image: '/images/eggplant.png', category: 'Software & Tools', level: 'Advanced' },
    { name: 'VS Code', image: '/images/vscode.png', category: 'Software & Tools', level: 'Advanced' },
    { name: 'GitLab', image: '/images/gitlab.jpg', category: 'Software & Tools', level: 'Advanced' },
    { name: 'Jira', image: '/images/jira.png', category: 'Software & Tools', level: 'Advanced' },
    
    // Intermediate  
    { name: 'React', image: '/images/react.png', category: 'Software & Tools', level: 'Intermediate' },
    { name: 'Bash/Linux', image: '/images/bash.jpg', category: 'Software & Tools', level: 'Intermediate' },
    { name: 'Unity', image: '/images/unity.png', category: 'Software & Tools', level: 'Intermediate' },
    { name: 'Bootstrap', image: '/images/bootstrap.png', category: 'Software & Tools', level: 'Intermediate' },
    { name: 'Spring Boot', image: '/images/spring boot.jpg', category: 'Software & Tools', level: 'Intermediate' },
    { name: 'GitHub', image: '/images/github.png', category: 'Software & Tools', level: 'Intermediate' },
    { name: 'Docker', image: '/images/docker.png', category: 'Software & Tools', level: 'Intermediate' },
    { name: 'MobaXterm', image: '/images/mobaxterm.png', category: 'Software & Tools', level: 'Intermediate' },

    // Beginner
    { name: 'LaTeX', image: '/images/latex.png', category: 'Software & Tools', level: 'Beginner' }
  ];

  const getLevelColor = (level?: string) => {
    switch (level) {
      case 'Advanced': return 'success';
      case 'Intermediate': return 'warning';
      case 'Beginner': return 'info';
      default: return 'secondary';
    }
  };

  return (
    <section id="skills" className="section bg-light">
      <Container>
        <Row className="mb-5">
          <Col>
            <div data-aos="fade-up" className="text-center">
              <h2 className="display-5 fw-bold text-gradient mb-4">Skills & Technologies</h2>
              <p className="lead text-muted mb-5">
                Programming languages, tools, and technologies I work with
              </p>
            </div>
          </Col>
        </Row>

        {/* Programming Languages */}
        <Row className="mb-5">
          <Col>
            <div data-aos="fade-up" className="text-center mb-4">
              <h3 className="h4 fw-bold text-primary mb-3">Programming Languages</h3>
            </div>
          </Col>
        </Row>
        <Row className="g-4 mb-5">
          {programmingLanguages.map((skill, skillIndex) => (
            <Col key={skillIndex} xs={6} sm={4} md={3} lg={2}>
              <div data-aos="fade-up" data-aos-delay={skillIndex * 100}>
                <Card className="skill-card h-100 border-0 shadow-sm modern-card">
                  <Card.Body className="d-flex flex-column align-items-center text-center p-3">
                    <div className="skill-image-container mb-3">
                      <img 
                        src={skill.image} 
                        alt={skill.name}
                        className="skill-image img-fluid"
                        style={{ 
                          height: '60px', 
                          width: '60px', 
                          objectFit: 'contain',
                          transition: 'transform 0.3s ease'
                        }}
                      />
                    </div>
                    <h6 className="fw-bold mb-2 text-center">{skill.name}</h6>
                    {skill.level && (
                      <span className={`badge bg-${getLevelColor(skill.level)} rounded-pill`}>
                        {skill.level}
                      </span>
                    )}
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>

        {/* Software & Tools */}
        <Row className="mb-5">
          <Col>
            <div data-aos="fade-up" className="text-center mb-4">
              <h3 className="h4 fw-bold text-primary mb-3">Software & Tools</h3>
            </div>
          </Col>
        </Row>
        <Row className="g-4 mb-5">
          {softwareTools.map((skill, skillIndex) => (
            <Col key={skillIndex} xs={6} sm={4} md={3} lg={2}>
              <div data-aos="fade-up" data-aos-delay={skillIndex * 100}>
                <Card className="skill-card h-100 border-0 shadow-sm modern-card">
                  <Card.Body className="d-flex flex-column align-items-center text-center p-3">
                    <div className="skill-image-container mb-3">
                      <img 
                        src={skill.image} 
                        alt={skill.name}
                        className="skill-image img-fluid"
                        style={{ 
                          height: '60px', 
                          width: '60px', 
                          objectFit: 'contain',
                          transition: 'transform 0.3s ease'
                        }}
                      />
                    </div>
                    <h6 className="fw-bold mb-2 text-center">{skill.name}</h6>
                    {skill.level && (
                      <span className={`badge bg-${getLevelColor(skill.level)} rounded-pill`}>
                        {skill.level}
                      </span>
                    )}
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>

        {/* Additional Competencies Section */}
        <Row className="mt-5">
          <Col>
            <div data-aos="fade-up" className="text-center">
              <h3 className="h4 fw-bold text-primary mb-4">Core Competencies</h3>
              <Row className="justify-content-center">
                <Col lg={8}>
                  <div className="d-flex flex-wrap justify-content-center gap-2">
                    {[
                      'Data Structures & Algorithms',
                      'Object-Oriented Programming',
                      'Software Design Patterns',
                      'Database Management',
                      'Web Development',
                      'Game Development',
                      'Version Control',
                      'Agile Development',
                      'Technical Documentation',
                      'Problem Solving & Debugging',
                      'API Integration',
                      'Responsive Design'
                    ].map((competency, index) => (
                      <span 
                        key={index}
                        className="badge bg-primary rounded-pill px-3 py-2 m-1"
                        style={{ fontSize: '0.9rem' }}
                      >
                        {competency}
                      </span>
                    ))}
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
