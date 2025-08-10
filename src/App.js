import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [expandedCards, setExpandedCards] = useState({});
  const [showAllExperience, setShowAllExperience] = useState(false);

  // Certification data with detailed information
  const certifications = {
    cissp: {
      name: 'CISSP',
      fullName: 'Certified Information Systems Security Professional',
      description: 'Advanced cybersecurity certification covering security and risk management, asset security, security architecture, and more.',
      icon: '🛡️',
      issuer: '(ISC)²',
      link: 'https://www.isc2.org/Certifications/CISSP'
    },
    oscp: {
      name: 'OSCP',
      fullName: 'Offensive Security Certified Professional',
      description: 'Hands-on penetration testing certification requiring practical exploitation skills and report writing.',
      icon: '⚔️',
      issuer: 'Offensive Security',
      link: 'https://www.offensive-security.com/pwk-oscp/'
    },
    aws: {
      name: 'AWS SAA',
      fullName: 'AWS Solutions Architect Associate',
      description: 'Validates expertise in designing distributed systems and applications on AWS cloud platform.',
      icon: '☁️',
      issuer: 'Amazon Web Services',
      link: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/'
    },
    gcp: {
      name: 'GCP ACE',
      fullName: 'Google Cloud Associate Cloud Engineer',
      description: 'Demonstrates ability to deploy applications, monitor operations, and maintain cloud projects on GCP.',
      icon: '🌐',
      issuer: 'Google Cloud',
      link: 'https://cloud.google.com/certification/cloud-engineer'
    },
    sans: {
      name: 'SANS GPYC',
      fullName: 'GIAC Python Coder',
      description: 'Validates skills in Python programming for cybersecurity professionals and penetration testing.',
      icon: '🐍',
      issuer: 'SANS Institute',
      link: 'https://www.giac.org/certification/python-coder-gpyc'
    }
  };

  // Professional experience data
  const professionalExperience = {
    blackbreach: {
      title: 'Chief Technology Officer',
      company: 'Black Breach',
      description: 'Spearheading cybersecurity innovation and development after successful acquisition of Sugar Security. Leading automated penetration testing solutions and cloud security initiatives.',
      period: '2024-Current',
      icon: '👔'
    },
    sugar: {
      title: 'Founder & Lead Security Engineer',
      company: 'Sugar Security',
      description: 'Founded and developed comprehensive vulnerability scanning platform from concept to acquisition. Built enterprise-grade security tools and managed technical operations as founding engineer.',
      period: '2022-2024',
      icon: '🚀'
    },
    digitalsilence: {
      title: 'Security Consultant',
      company: 'Digital Silence',
      description: 'Provided specialized penetration testing and security assessment services for enterprise clients. Focused on advanced vulnerability research and custom exploit development.',
      period: '2020-2022',
      icon: '🔒'
    },
    coalfire: {
      title: 'Penetration Tester & Security Consultant',
      company: 'Coalfire Labs',
      description: 'Specialized in enterprise environment testing, web application and API security assessments. Conducted comprehensive security evaluations for Fortune 500 companies.',
      period: '2017-2020',
      icon: '🛡️'
    },
    sonic: {
      title: 'Cybersecurity Technician',
      company: 'Sonic Restaurant',
      description: 'Implemented cybersecurity measures and protocols for restaurant chain operations. Managed security infrastructure and compliance requirements across multiple locations.',
      period: '2016-2017',
      icon: '🔐'
    },
    dell: {
      title: 'IT Specialist',
      company: 'Dell Inc.',
      description: 'IT specialist role with light security responsibilities. Supported enterprise infrastructure and gained foundational experience in systems administration and security operations.',
      period: '2014-2016',
      icon: '💻'
    }
  };

  // Technical expertise and stack
  const techStack = {
    fullstack: {
      title: 'Full-Stack Development',
      description: 'Python and JavaScript development with help from AI tools like Claude. Building functional applications from backend APIs to responsive frontends when needed.',
      technologies: 'Python, JavaScript, React, Node.js, FastAPI, Django',
      icon: '⚡'
    },
    cloud: {
      title: 'AWS Serverless Architecture',
      description: 'Certified in designing and implementing serverless solutions. Experience with Lambda functions, API Gateway, DynamoDB, S3, CloudFormation, and infrastructure as code.',
      technologies: 'Lambda, API Gateway, DynamoDB, CloudFormation, CDK',
      icon: '☁️'
    },
    security: {
      title: 'Security Engineering',
      description: 'Building security-focused applications with threat modeling, secure coding practices, and automated security testing integration.',
      technologies: 'SAST/DAST, Threat Modeling, Secure Architecture',
      icon: '🛡️'
    }
  };

  // Security specializations
  const securitySpecializations = {
    pentesting: {
      title: 'Multi-Platform Penetration Testing',
      description: 'Comprehensive security assessments across web applications, mobile apps, cloud infrastructure, and network environments. Expert in manual testing and automated tool development.',
      scope: 'Web Apps, Mobile Apps, Cloud, Networks, APIs',
      icon: '🎯'
    },
    redteam: {
      title: 'Red Team Tool Development',
      description: 'Custom security tool creation for advanced persistent threat simulation, vulnerability discovery, and security automation. Building tools that scale.',
      scope: 'Custom Exploits, Automation, C2 Frameworks',
      icon: '⚔️'
    },
    ai_security: {
      title: 'AI-Enabled Security Innovation',
      description: 'Pioneering next-generation security tools using artificial intelligence for automated vulnerability scanning, exploit development, and threat detection.',
      scope: 'Agentic Scanning, AI Exploit Dev, ML Threat Detection',
      icon: '🤖'
    },
    speaking: {
      title: 'Conference Speaking & Training',
      description: 'Technical instructor and speaker at premier cybersecurity conferences including Black Hat USA and Europe, delivering advanced training to security professionals.',
      scope: 'Black Hat, Security Conferences, Technical Training',
      icon: '🎤'
    }
  };

  // Tools and projects data (excluding duplicates)
  const projects = {
    slurp: {
      title: 'AWS Slurp GitHub Takeover',
      description: 'Defensive takeover of orphaned AWS S3 enumeration tool repository. Prevented malicious actors from exploiting deleted GitHub account to distribute compromised tooling, highlighting supply chain security risks.',
      link: 'https://github.com/bbb31/slurp',
      category: 'Security Research'
    },
    achilles: {
      title: 'Achilles CTF - RCE via Calculator',
      description: 'Advanced Capture The Flag challenge featuring Remote Code Execution through calculator functionality. Built with Python, Docker, and AWS Serverless architecture for scalable security training.',
      link: 'https://achilles.technology',
      category: 'CTF Challenges'
    },
    parisctf: {
      title: 'Paris CTF - Path Traversal Challenge',
      description: 'Sophisticated CTF demonstrating path traversal vulnerabilities through an insecure translation library used for multi-language site loading. Educational security challenge for advanced learners.',
      link: 'https://ctf.paris.systems',
      category: 'CTF Challenges'
    },
    askparis: {
      title: 'Ask Paris - AI Exploit Development',
      description: 'Advanced AI-powered exploit development platform that assists security researchers in vulnerability analysis and proof-of-concept creation.',
      link: 'https://ask.paris.systems',
      category: 'Security Tools'
    },
    elongate: {
      title: 'Elongate Stock Tracker',
      description: 'AI-powered sentiment analysis tool that monitors Elon Musk\'s Twitter activity to predict stock and cryptocurrency market movements based on his tweets.',
      link: 'https://elongate.loganevans.me',
      category: 'Fun Projects'
    },
    cuss: {
      title: 'Cuss Language Learning',
      description: 'A Duolingo-style language learning platform focused on profanity and colorful expressions from around the world. Educational... sort of.',
      link: 'https://cuss.loganevans.me',
      category: 'Fun Projects'
    }
  };

  const ProjectCard = ({ project, projectKey }) => {
    const isExpanded = expandedCards[`project-${projectKey}`];
    
    return (
      <div 
        className="project-card" 
        onClick={(e) => {
          // If clicking the title area, expand; if clicking external link icon, open link
          if (e.target.classList.contains('external-link')) {
            window.open(project.link, '_blank');
          } else {
            toggleCardExpansion(`project-${projectKey}`);
          }
        }}
      >
        <div className="card-header">
          <h4>{project.title}</h4>
          <div className="project-actions">
            <span className="external-link" title="Open project">🔗</span>
            <span className="expand-indicator">{isExpanded ? '−' : '+'}</span>
          </div>
        </div>
        {isExpanded && (
          <>
            <p className="project-category">{project.category}</p>
            <p>{project.description}</p>
          </>
        )}
      </div>
    );
  };

  const toggleCardExpansion = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const InteractiveCard = ({ item, itemKey, onClick }) => {
    const isExpanded = expandedCards[`interactive-${itemKey}`];
    
    return (
      <div 
        className="interactive-card" 
        onClick={(e) => {
          if (onClick) {
            onClick();
          } else {
            toggleCardExpansion(`interactive-${itemKey}`);
          }
        }}
      >
        <div className="card-header">
          <span className="card-icon">{item.icon}</span>
          <h4>{item.company ? `${item.title} - ${item.company}` : item.title}</h4>
          <span className="expand-indicator">{isExpanded ? '−' : '+'}</span>
        </div>
        {isExpanded && (
          <>
            <p>{item.description}</p>
            {item.period && <span className="card-period">{item.period}</span>}
            {item.company && <span className="card-company">{item.company}</span>}
            {item.outcome && <span className="card-outcome">{item.outcome}</span>}
            {item.impact && <span className="card-impact">{item.impact}</span>}
          </>
        )}
      </div>
    );
  };

  const ExpertiseCard = ({ item, itemKey }) => {
    const isExpanded = expandedCards[`expertise-${itemKey}`];
    
    return (
      <div 
        className="expertise-card"
        onClick={() => toggleCardExpansion(`expertise-${itemKey}`)}
      >
        <div className="card-header">
          <span className="card-icon">{item.icon}</span>
          <h4>{item.title}</h4>
          <span className="expand-indicator">{isExpanded ? '−' : '+'}</span>
        </div>
        {isExpanded && (
          <>
            <p className="expertise-description">{item.description}</p>
            {item.technologies && <span className="expertise-tech">{item.technologies}</span>}
            {item.scope && <span className="expertise-scope">{item.scope}</span>}
          </>
        )}
      </div>
    );
  };

  const CertificationCard = ({ cert, certKey }) => {
    const isExpanded = expandedCards[`cert-${certKey}`];
    
    return (
      <div 
        className="cert-card" 
        onClick={(e) => {
          // If clicking the link icon, open external link; otherwise expand
          if (e.target.classList.contains('cert-external-link')) {
            window.open(cert.link, '_blank');
          } else {
            toggleCardExpansion(`cert-${certKey}`);
          }
        }}
      >
        <div className="cert-header">
          <span className="cert-icon">{cert.icon}</span>
          <div className="cert-info">
            <span className="cert-name">{cert.name}</span>
            <span className="cert-issuer">{cert.issuer}</span>
          </div>
          <div className="cert-actions">
            <span className="cert-external-link" title="View certification details">🔗</span>
            <span className="expand-indicator">{isExpanded ? '−' : '+'}</span>
          </div>
        </div>
        {isExpanded && (
          <div className="cert-details">
            <p className="cert-full-name">{cert.fullName}</p>
            <p className="cert-description">{cert.description}</p>
          </div>
        )}
      </div>
    );
  };

  const HomePage = () => (
    <>
      <div className="profile-section">
        <div className="profile-pic">👨‍💻</div>
        <h1>Hi, I'm Logan Evans</h1>
      </div>
      
      <div className="socials">
        <a href="https://linkedin.com/in/logan-evans-okc" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/sw33tr0ll" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://x.com/sweetrollbandit" target="_blank" rel="noopener noreferrer">X</a>
      </div>

      <div className="content-sections">
        <div className="section professional-section">
          <h2>Professional Experience</h2>
          <div className="section-content">
            {Object.entries(professionalExperience)
              .slice(0, showAllExperience ? undefined : 3)
              .map(([key, item]) => (
                <InteractiveCard key={key} item={item} itemKey={key} />
              ))}
            {Object.entries(professionalExperience).length > 3 && (
              <button 
                className="see-more-btn"
                onClick={() => setShowAllExperience(!showAllExperience)}
              >
                {showAllExperience ? 'See Less Experience' : 'See More Experience'}
              </button>
            )}
          </div>
        </div>

        <div className="expertise-sections">
          <h2 className="expertise-main-title">Technical Expertise & Specializations</h2>
          
          <div className="section tech-stack-section">
            <h3>Tech Stack</h3>
            <div className="expertise-grid">
              {Object.entries(techStack).map(([key, item]) => (
                <ExpertiseCard key={key} item={item} itemKey={key} />
              ))}
            </div>
          </div>

          <div className="section security-specializations-section">
            <h3>Security Specializations</h3>
            <div className="expertise-grid">
              {Object.entries(securitySpecializations).map(([key, item]) => (
                <ExpertiseCard key={key} item={item} itemKey={key} />
              ))}
            </div>
          </div>
        </div>

        <div className="section tools-section">
          <h2>Tools & Projects</h2>
          <div className="projects-grid">
            {Object.entries(projects).map(([key, project]) => (
              <ProjectCard key={key} project={project} projectKey={key} />
            ))}
          </div>
        </div>
      </div>

      <div className="certs-section">
        <h2>Certifications</h2>
        <div className="certs-grid">
          {Object.entries(certifications).map(([key, cert]) => (
            <CertificationCard key={key} cert={cert} certKey={key} />
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="App">
      <header className="App-header">
        <HomePage />
      </header>
    </div>
  );
}

export default App;