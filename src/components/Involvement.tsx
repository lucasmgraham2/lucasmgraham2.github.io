import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

interface InvolvementItem {
  organization: string;
  position: string;
  period: string;
  description: string[];
  image: string;
  website?: string;
  category: string;
}

const Involvement: React.FC = () => {
  const involvements: InvolvementItem[] = [
    {
      organization: "WVU Presidential Student Ambassadors",
      position: "Presidential Student Ambassador",
      period: "2023 - Present",
      description: [
        "The President of WVU gathers the PSAs to discuss relevant student topics to help address the needs of the student body at annual PSA Summits",
        "Earned a Certification in Student Leadership through this program",
        "Created helpful videos for incoming freshman and current WVU students",
        "Assist with work/life balance, study habits, organization engagement guidance"
      ],
      image: "/images/Table 5C.jpeg .jpg",
      website: "https://ambassadors.wvu.edu/",
      category: "Leadership"
    },
    {
      organization: "Christian Help",
      position: "Active Volunteer",
      period: "2022 - Present",
      description: [
        "Active volunteer at a nonprofit that provides for the homeless and jobless in downtown Morgantown",
        "Help to provide free food and clothes purely from donations",
        "Assist by filling bags for the food pantry and taking in new donations",
        "Help to guide people through the career closet and provide nice clothes for those in need"
      ],
      image: "/images/foodpantry.jpg",
      website: "https://motownchristianhelp.com/",
      category: "Service"
    },
    {
      organization: "WVU Cru",
      position: "Ministry Leader",
      period: "2022 - Present",
      description: [
        "Intentionally lead weekly life groups for university students on campus",
        "Organize and put together outreach events and evangelism efforts with other leaders",
        "Mentor and disciple two younger students in their faith",
        "Participate and advertise large-scale ministry events and retreats"
      ],
      image: "/images/pcbpic.jpeg",
      website: "https://sites.google.com/cru.org/wvucru/home?authuser=0",
      category: "Ministry"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Leadership': return 'primary';
      case 'Ministry': return 'success';
      case 'Academic': return 'info';
      case 'Service': return 'warning';
      case 'Athletic': return 'danger';
      default: return 'secondary';
    }
  };

  return (
    <section id="involvement" className="section bg-light">
      <Container>
        <Row className="mb-5">
          <Col>
            <div data-aos="fade-up" className="text-center">
              <h2 className="display-5 fw-bold text-gradient mb-4">Leadership & Involvement</h2>
              <p className="lead text-muted mb-5">
                My commitment to service, leadership, and community engagement
              </p>
            </div>
          </Col>
        </Row>

        {/* All Involvement Items */}
        <Row className="g-4 mb-5">
          {involvements.map((involvement, index) => (
            <Col key={index} lg={4} md={6}>
              <div data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="involvement-card modern-card h-100 border-0 shadow">
                  <div className="position-relative">
                    <Card.Img 
                      variant="top" 
                      src={involvement.image} 
                      style={{ 
                        height: '200px', 
                        objectFit: 'cover',
                        filter: 'brightness(0.8)'
                      }}
                    />
                    <div className="position-absolute top-0 end-0 m-3">
                      <span className={`badge bg-${getCategoryColor(involvement.category)} bg-gradient rounded-pill`}>
                        {involvement.category}
                      </span>
                    </div>
                    <div className="position-absolute top-0 start-0 m-3">
                      <span className="badge bg-dark bg-gradient rounded-pill">
                        {involvement.period}
                      </span>
                    </div>
                  </div>
                  
                  <Card.Body className="p-4 d-flex flex-column">
                    <div className="mb-3">
                      <h4 className="fw-bold text-primary mb-2">{involvement.organization}</h4>
                      <h6 className="text-muted mb-3">{involvement.position}</h6>
                    </div>
                    
                    <ul className="mb-4 flex-grow-1">
                      {involvement.description.map((item, descIndex) => (
                        <li key={descIndex} className="mb-2 small">{item}</li>
                      ))}
                    </ul>
                    
                    {involvement.website && (
                      <div className="mt-auto">
                        <Button
                          variant="outline-primary"
                          size="sm"
                          href={involvement.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-pill"
                        >
                          <i className="fas fa-external-link-alt me-2"></i>
                          Learn More
                        </Button>
                      </div>
                    )}
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>

        {/* Impact Section */}
        <Row className="mt-5">
          <Col>
            <div data-aos="fade-up" className="text-center">
              <h3 className="h4 fw-bold text-primary mb-4">Impact & Values</h3>
              <Row className="justify-content-center">
                <Col lg={10}>
                  <p className="lead mb-4">
                    Through my various leadership roles and volunteer experiences, I've learned the importance of 
                    serving others, building strong communities, and making a positive impact wherever I go.
                  </p>
                  <div className="d-flex flex-wrap justify-content-center gap-2">
                    {[
                      'Servant Leadership',
                      'Community Building',
                      'Public Speaking',
                      'Event Planning',
                      'Team Management',
                      'Mentoring',
                      'Cultural Competency',
                      'Project Coordination',
                      'Volunteer Management',
                      'Fundraising'
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

export default Involvement;
