import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  technologies?: string[];
  logo?: string;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Senior Software Engineering Intern",
      company: "Idemia NSS",
      location: "Morgantown, WV",
      period: "May 2025 - Aug 2025",
      type: "Internship",
      description: [
        "Mentored interns on industry-standard SAFe 6.0 practices and provided technical guidance on Jira, Confluence, and GitLab",
        "Expanded the use cases of microservice-based Docker applications, using Springboot Java, Maven unit tests, and PostgreSQL, developing full stack solutions",
        "Expanded automated test coverage and optimized the runtime of existing tests by over 15%",
        "Collaborated on the design, training, and refinement of a code review bot, utilizing an MCP server, built to identify code syntax and basic functionality errors"
      ],
      technologies: ["Java", "Spring Boot", "Python", "Git", "Jira", "Docker", "Eggplant", "Bash", "MobaXterm"],
      logo: "/images/nsslogo.jpg"
    },
    {
      title: "Undergraduate Research Student",
      company: "WVU Office of Undergraduate Research",
      location: "Morgantown, WV",
      period: "Jan 2023 - Feb 2025",
      type: "Research",
      description: [
        "Researching Architectural Technical Debt (ATD) alongside Professors Dzielski and Alshehri",
        "Submitting a research paper to a conference, diving into the refactoring of ATD",
        "Presented weekly presentations/summaries of work through the 2 semester WVU Research Apprenticeship Program",
        "Collaborated with faculty and graduate students on research projects"
      ],
      technologies: ["Latex", "Data Analysis", "Analytical Research"],
      logo: "/images/wvlogo.jpg"
    },
    {
      title: "Junior Software Engineering Intern",
      company: "Idemia NSS",
      location: "Morgantown, WV",
      period: "May 2024 - Aug 2024",
      type: "Internship",
      description: [
        "Operated in a secure and confidential environment, ensuring the integrity of sensitive data for government clients",
        "Developed software in a collaborative team setting, implementing SAFe 6.0 principles and practices",
        "Participated in code reviews and demos, utilizing a variety of tools and programming languages",
        "Gained experience with enterprise-level software development practices"
      ],
      technologies: ["Eggplant", "Bash", "Git", "Jira", "MobaXterm"],
      logo: "/images/nsslogo.jpg"
    },
    {
      title: "Honors College Essay Reviewer",
      company: "West Virginia University",
      location: "Morgantown, WV",
      period: "May 2023 - Aug 2023",
      type: "Academic",
      description: [
        "Received 20 anonymous essays from the Honors College every month to evaluate",
        "Accurately analyzed detailed essays from freshman applying to the Honors College",
        "Reviewed essays for entry into the Honors College, assessing the writing quality, critical thinking skills, and overall academic potential of the applicants",
        "Gained experience in academic evaluation and student mentorship"
      ],
      technologies: ["Essay Evaluation", "Critical Thinking", "Academic Mentorship"],
      logo: "/images/wvlogo.jpg"
    },
    {
      title: "Maintenance Worker",
      company: "Bible Center",
      location: "Charleston, WV",
      period: "May 2021 - Aug 2022",
      type: "Part-time",
      description: [
        "Worked with a dedicated team on facility maintenance and improvements",
        "Worked part-time during the school year and full-time during summers",
        "Gained experience in problem-solving and working in team environments",
        "Developed strong work ethic and time management skills"
      ],
      technologies: ["Teamwork", "Problem Solving", "Time Management"],
      logo: "/images/bcclogo.jpg"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship': return 'primary';
      case 'Research': return 'success';
      case 'Academic': return 'info';
      default: return 'secondary';
    }
  };

  return (
    <section id="experience" className="section">
      <Container>
        <Row className="mb-5">
          <Col>
            <div data-aos="fade-up" className="text-center">
              <h2 className="display-5 fw-bold text-gradient mb-4">Experience</h2>
              <p className="lead text-muted mb-5">
                My professional and academic experience in software development and computer science
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="experience-timeline">
              {experiences.map((experience, index) => (
                <div key={index} className="mb-5">
                  <div data-aos="fade-up" data-aos-delay={index * 200}>
                    <Card className="experience-card modern-card border-0 shadow">
                      <Card.Body className="p-4">
                        <div className="d-flex align-items-start mb-3">
                          {experience.logo && (
                            <img 
                              src={experience.logo} 
                              alt={experience.company}
                              className="me-3 rounded"
                              style={{ 
                                height: '60px', 
                                width: '60px', 
                                objectFit: 'contain'
                              }}
                            />
                          )}
                          <div className="flex-grow-1">
                            <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
                              <h4 className="fw-bold mb-0 text-primary">{experience.title}</h4>
                              <span className={`badge bg-${getTypeColor(experience.type)} rounded-pill`}>
                                {experience.type}
                              </span>
                            </div>
                            <h5 className="text-muted mb-1">{experience.company}</h5>
                            <div className="d-flex flex-wrap gap-3 text-muted small">
                              <span><i className="fas fa-map-marker-alt me-1"></i>{experience.location}</span>
                              <span><i className="fas fa-calendar me-1"></i>{experience.period}</span>
                            </div>
                          </div>
                        </div>

                        <ul className="mb-3">
                          {experience.description.map((item, descIndex) => (
                            <li key={descIndex} className="mb-2">{item}</li>
                          ))}
                        </ul>

                        {experience.technologies && (
                          <div>
                            <h6 className="fw-bold text-primary mb-2">Technologies & Skills:</h6>
                            <div className="d-flex flex-wrap gap-2">
                              {experience.technologies.map((tech, techIndex) => (
                                <span 
                                  key={techIndex}
                                  className="badge bg-light text-dark border rounded-pill px-3 py-1"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Skills Gained Section */}
        <Row className="mt-5">
          <Col>
            <div data-aos="fade-up" className="text-center">
              <h3 className="h4 fw-bold text-primary mb-4">Key Skills Developed</h3>
              <Row className="justify-content-center">
                <Col lg={10}>
                  <div className="d-flex flex-wrap justify-content-center gap-2">
                    {[
                      'Software Development',
                      'Code Review',
                      'Agile Methodologies',
                      'Team Collaboration',
                      'Problem Solving',
                      'Technical Documentation',
                      'Research & Analysis',
                      'Student Mentoring',
                      'Project Management',
                      'Quality Assurance'
                    ].map((skill, index) => (
                      <span 
                        key={index}
                        className="badge bg-primary bg-gradient rounded-pill px-3 py-2 m-1"
                        style={{ fontSize: '0.9rem' }}
                      >
                        {skill}
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

export default Experience;
