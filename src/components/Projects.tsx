import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

interface Project {
  title: string;
  description: string;
  longDescription: string[];
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  featured?: boolean;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "MPX Freestanding Commmand Line OS",
      description: "Implemented key OS features including process management, memory allocation, and I/O interrupt handling, ensuring a clean system performance.",
      longDescription: [
        "Collaborative project with 4 team members to build OS from scratch",
        "Responsible for bare bones, interrupts, and memory management",
        "Implementing multitasking and process scheduling systems",
        "Advanced computer science project demonstrating low-level programming skills"
      ],
      technologies: ["C", "Operating Systems", "Memory Management", "Process Scheduling"],
      image: "/images/operating_system.jpg",
      category: "Systems Programming",
      featured: true
    },
    {
      title: "Personal Portfolio Website",
      description: "Built this personal website to showcase my skills, experience, involvement and projects using React, HTML, CSS, JS, and TS.",
      longDescription: [
        "Created a unique professional design with animations, grids, and event listeners",
        "Implemented responsive design using media queries for all screen sizes and devices",
        "Built with extensible architecture for easy updates and modifications",
        "Features smooth scrolling navigation and interactive animations"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "React"],
      image: "/images/personal_website.png",
      category: "Web Development",
      featured: true
    },
    
    {
      title: "Unity Game BNANA",
      description: "Completed a small 2D platformer game in Unity, with a focus on character movement, object animation, and level-based design.",
      longDescription: [
        "Used C# to write scripts for player movement, player life, animation, and player state",
        "Implemented increasing difficulty, sound effects, and graphics",
        "Added collectible bananas and easter egg pineapples for enhanced gameplay",
        "Focused on character movement mechanics and object animation systems"
      ],
      technologies: ["C#", "Unity", "Game Development", "2D Animation"],
      image: "/images/bnana.png",
      category: "Game Development",
    },
    {
      title: "Weather Comparison Webapp",
      description: "Developed a webapp with 6 partners to accurately provide weather comparison data utillizing a React frontend, Node.js backend, and the NOAA API.",
      longDescription: [
        "Collaborative project with 6 team members to build comprehensive location analysis tool",
        "Provides weather, natural risks, and crime data for user-specified locations",
        "Helps users make informed decisions about travel destinations",
        "Integrates multiple APIs for comprehensive data collection"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "APIs"],
      image: "/images/climate.png",
      category: "Fullstack Development"
    },
    {
      title: "Atlassian Confluence MCP Server",
      description: "Designed an Model Context Protocol (MCP) for Atlassian Confluence so that my AI has the external tools to create, edit, and place Confluence Pages.",
      longDescription: [
        "Used the Atlassian Confluence API to create a server that can interact with Confluence",
        "Implemented authentication and authorization mechanisms for secure access",
        "Focused on integrating AI capabilities with existing Atlassian tools"
      ],
      technologies: ["Python", "Server Systems", "API Integration", "Atlassian Confluence"],
      image: "/images/mcp.png",
      category: "Systems Programming"
    },
    {
      title: "C Compiler and Assembler",
      description: "Developed a compiler in Java with an effective scanner, recursive descent parser, and code generator to convert a basic level of C code into MIPS assembly.",
      longDescription: [
        "Created an assembler for MIPS, breaking down the assembly instructions to binary and hexadecimal formats",
        "Implemented a scanner to tokenize C code and a parser to build an abstract syntax tree",
        "Generated MIPS assembly code from the abstract syntax tree",
        "Focused on low-level programming concepts and compiler design"

      ],
      technologies: ["C", "Operating Systems", "Memory Management", "Process Scheduling"],
      image: "/images/compiler.png",
      category: "Compiler Design"
    },
    {
      title: "Efficient Java Tables",
      description: "Developed many efficient tables in Java, including Hash, XML, JSON, Binary, CSV, Search, and Lookup tables.",
      longDescription: [
        "Implemented various data structure types for optimal performance",
        "Added functionality for Union, Intersect, and Difference operations",
        "Used JUnit tests to verify efficiency and functionality",
        "Developed as part of advanced computer science coursework at WVU"
      ],
      technologies: ["Java", "Data Structures", "JUnit", "Algorithm Design"],
      image: "/images/table.png",
      category: "Data Structures"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Web Development': return 'primary';
      case 'Fullstack Development': return 'info';
      case 'Systems Programming': return 'danger';
      case 'Game Development': return 'success';
      case 'Compiler Design': return 'warning';
      case 'Data Structures': return 'dark';
      case 'Data Science': return 'success';
      case 'Research': return 'info';
      case 'Hardware': return 'warning';
      case 'Tools & Automation': return 'danger';
      default: return 'secondary';
    }
  };

  return (
    <section id="projects" className="section">
      <Container>
        <Row className="mb-5">
          <Col>
            <div data-aos="fade-up" className="text-center">
              <h2 className="display-5 fw-bold text-gradient mb-4">Projects</h2>
              <p className="lead text-muted mb-5">
                A selection of my technical projects and contributions
              </p>
            </div>
          </Col>
        </Row>

        {/* All Projects */}
        <Row className="g-4 mb-5">
          {projects.map((project, index) => (
            <Col key={index} lg={4} md={6}>
              <div data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="project-card modern-card h-100 border-0 shadow">
                  <div className="position-relative">
                    <Card.Img 
                      variant="top" 
                      src={project.image} 
                      style={{ 
                        height: '200px', 
                        objectFit: 'cover',
                        filter: 'brightness(0.9)'
                      }}
                    />
                    <div className="position-absolute top-0 end-0 m-3">
                      <Badge bg={getCategoryColor(project.category)} className="rounded-pill">
                        {project.category}
                      </Badge>
                    </div>
                    {project.featured && (
                      <div className="position-absolute top-0 start-0 m-3">
                        <Badge bg="warning" className="rounded-pill">
                          <i className="fas fa-star me-1"></i>Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <Card.Body className="p-4 d-flex flex-column">
                    <h5 className="fw-bold text-primary mb-3">{project.title}</h5>
                    <p className="text-muted mb-3">{project.description}</p>
                    
                    <div className="mb-3">
                      <div className="d-flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            bg="light" 
                            text="dark" 
                            className="border rounded-pill small"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge bg="secondary" className="rounded-pill small">
                            +{project.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="mt-auto d-flex gap-2">
                      {project.githubUrl && (
                        <Button
                          variant="outline-primary"
                          size="sm"
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-pill flex-grow-1"
                        >
                          <i className="fab fa-github me-1"></i>Code
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          variant="primary"
                          size="sm"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-pill flex-grow-1"
                        >
                          <i className="fas fa-external-link-alt me-1"></i>Demo
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>

        {/* GitHub Link */}
        <Row className="mt-5">
          <Col>
            <div data-aos="fade-up" className="text-center">
              <h3 className="h4 fw-bold text-primary mb-4">Want to see more?</h3>
              <p className="lead mb-4">
                Check out my GitHub for additional projects and contributions
              </p>
              <Button
                variant="primary"
                size="lg"
                href="https://github.com/lucasmgraham2"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-modern btn-primary-modern rounded-pill px-5 py-3"
              >
                <i className="fab fa-github me-3"></i>Visit My GitHub
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
