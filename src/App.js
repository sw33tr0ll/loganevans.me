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
    sans: {
      name: 'SANS GPYC',
      fullName: 'GIAC Python Coder',
      description: 'Validates skills in Python programming for cybersecurity professionals and penetration testing.',
      icon: '🐍',
      issuer: 'SANS Institute',
      link: 'https://www.giac.org/certification/python-coder-gpyc'
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
      title: 'Independent Security Consultant',
      company: 'Digital Silence',
      description: 'Ran independent cybersecurity consultancy for 3+ years. Managed all business operations including sales, marketing, finance, and service delivery. Provided specialized penetration testing and security assessment services for enterprise clients.',
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
      company: 'Sonic Drive-In',
      description: 'Implemented cybersecurity measures and protocols for restaurant chain operations. Managed security infrastructure and compliance requirements across multiple locations.',
      period: '2016-2017',
      icon: '🍟'
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
    fullstack_engineer: {
      title: 'Full-Stack Engineer',
      description: 'Building scalable applications end-to-end with modern serverless architectures. React, Vue, and Django frontends. NodeJS and Python APIs deployed on AWS Lambda with infrastructure as code including Docker containers, Serverless YML, Terraform, Pulumi, and Cloudformation.',
      technologies: 'Python, JavaScript, REST, Lambda, NoSQL, CloudFormation',
      icon: '⚡'
    },
    ai_engineering: {
      title: 'AI Engineering',
      description: 'Developing AI-powered security tools with RAG and Human-in-the-Loop architectures, MCP integrations, and LLM-assisted vulnerability research. Building intelligent security automation platforms.',
      technologies: 'LLMs, RAG, Workflows, Agents, MCP, OCR, CV',
      icon: '🤖'
    },
    security: {
      title: 'Security Engineering',
      description: 'Building security-focused applications with threat modeling, secure coding practices, and automated security testing integration.',
      technologies: 'SAST/DAST, Threat Modeling, Secure Architecture, Vulnerability Scanning, Exploit Development',
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
      description: 'Built AI-powered exploit development tools, red team automations, sandbox environments (Achilles, Paris), and  Created custom C2 frameworks and automated vulnerability discovery systems.',
      scope: 'AWS Slurp, Achilles CTF, Ask Paris AI, Custom C2',
      icon: '⚔️'
    },
    ai_security: {
      title: 'AI-Native Security Innovation',
      description: 'Pioneered enterprise AI security platforms with multi-modal RAG systems, autonomous vulnerability discovery, and LLM-powered exploit synthesis. Built Sugar Security with vector-based threat intelligence and acquired by Black Breach.',
      scope: 'RAG-based Vuln Discovery, LLM Exploit Synthesis, Multi-Agent Security Systems',
      icon: '🤖'
    }
  };

  // Business & Leadership Expertise
  const businessExpertise = {
    speaking: {
      title: 'Public Speaking & Training',
      description: 'Technical instructor at Black Hat USA and Europe conferences. Delivered advanced security training to professionals worldwide. Conference speaker on AI security and automated penetration testing.',
      scope: 'Black Hat Instructor, Conference Speaking, Technical Training',
      icon: '🎤'
    },
    business: {
      title: 'Business Operations',
      description: 'Successfully ran independent consultancy for 3+ years managing all aspects: P&L responsibility, financial planning, contract negotiations, and client relationship management. Scaled Sugar Security from concept to acquisition.',
      scope: 'P&L Management, Financial Planning, Strategic Growth',
      icon: '📊'
    },
    sales_marketing: {
      title: 'Sales & Marketing',
      description: 'Drove business development through strategic marketing, content creation, and direct sales. Built brand presence, managed sales pipeline, and closed enterprise security contracts as independent consultant.',
      scope: 'Enterprise Sales, Content Marketing, Brand Building',
      icon: '🚀'
    }
  };

  // Tools and projects data (excluding duplicates)
  const projects = {
    askparis: {
      title: 'Ask Paris - LLM Security Research',
      description: 'Multi-agent AI platform leveraging RAG architecture and MCP protocols for autonomous vulnerability research, exploit synthesis, and security automation. Features vector-based knowledge graphs and prompt-engineered security workflows.',
      link: 'https://ask.paris.systems',
      category: 'Security Tools'
    },
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
    elongate: {
      title: 'Elongate Stock Tracker',
      description: 'AI-powered sentiment analysis tool that monitors Elon Musk\'s Twitter activity to predict stock and cryptocurrency market movements based on his tweets.',
      link: 'https://elongate.loganevans.me',
      category: 'Fun Projects'
    },
    cuss: {
      title: 'Duolingo for Swearing',
      description: 'A language learning platform focused on profanity and colorful expressions from around the world. Educational... sort of.',
      link: 'https://cuss.loganevans.me',
      category: 'Fun Projects'
    }
  };

  const ProjectCard = ({ project, projectKey }) => {
    const isExpanded = expandedCards[`project-${projectKey}`];
    
    return (
      <div 
        className="project-card"
        onClick={() => toggleCardExpansion(`project-${projectKey}`)}
      >
        <div className="card-header">
          <h4>{project.title}</h4>
          <div className="expand-section">
            <span className="see-more-text">see more</span>
            <span className="expand-indicator">{isExpanded ? '−' : '+'}</span>
          </div>
        </div>
        {isExpanded && (
          <>
            <p className="project-category">{project.category}</p>
            <p className="project-description">{project.description}</p>
            <button 
              className="external-link-btn" 
              title="Open project"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.link, '_blank');
              }}
            >
              🔗 More Info
            </button>
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
        onClick={() => {
          if (onClick) {
            onClick();
          } else {
            toggleCardExpansion(`interactive-${itemKey}`);
          }
        }}
      >
        <div className="card-header">
          <span className="card-icon">{item.icon}</span>
          <div className="card-title-section">
            <h4>{item.company ? `${item.title} - ${item.company}` : item.title}</h4>
            {item.period && <span className="card-period-header">{item.period}</span>}
          </div>
          <div className="expand-section">
            <span className="see-more-text">see more</span>
            <span className="expand-indicator">{isExpanded ? '−' : '+'}</span>
          </div>
        </div>
        {isExpanded && (
          <>
            <p>{item.description}</p>
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
          <div className="expand-section">
            <span className="see-more-text">see more</span>
            <span className="expand-indicator">{isExpanded ? '−' : '+'}</span>
          </div>
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
        onClick={() => toggleCardExpansion(`cert-${certKey}`)}
      >
        <div className="cert-header">
          <span className="cert-icon">{cert.icon}</span>
          <div className="cert-info">
            <span className="cert-name">{cert.name}</span>
            <span className="cert-issuer">{cert.issuer}</span>
          </div>
          <div className="expand-section">
            <span className="see-more-text">see more</span>
            <span className="expand-indicator">{isExpanded ? '−' : '+'}</span>
          </div>
        </div>
        {isExpanded && (
          <div className="cert-details">
            <p className="cert-full-name">{cert.fullName}</p>
            <p className="cert-description">{cert.description}</p>
            <button 
              className="cert-external-link-btn" 
              title="View certification details"
              onClick={(e) => {
                e.stopPropagation();
                window.open(cert.link, '_blank');
              }}
            >
              🔗 More Info
            </button>
          </div>
        )}
      </div>
    );
  };

  const HomePage = () => (
    <>
      <div className="profile-section">
        <h1>🍬 Logan Evans</h1>
        <p className="subtitle">Security Professional • Tool Builder</p>
      </div>
      
      <div className="socials">
        <a href="https://linkedin.com/in/logan-evans-okc" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/sw33tr0ll" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://x.com/sweetrollbandit" target="_blank" rel="noopener noreferrer">X</a>
        <a href="/logan-evans-cv.pdf" target="_blank" rel="noopener noreferrer" className="cv-download">Download CV</a>
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
          <h2 className="expertise-main-title">Core Expertise</h2>
          
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
          <div className="section business-expertise-section">
            <h3>Business & Leadership</h3>
            <div className="expertise-grid">
              {Object.entries(businessExpertise).map(([key, item]) => (
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