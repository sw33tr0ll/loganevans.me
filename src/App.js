import React, { useState } from 'react';
import './App.css';

function App() {
  const [expandedCards, setExpandedCards] = useState({});
  const [showAllExperience, setShowAllExperience] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  // Certification data with detailed information
  const certifications = {
    cissp: {
      name: 'CISSP',
      fullName: 'Certified Information Systems Security Professional',
      description: 'Advanced cybersecurity certification covering security and risk management, asset security, security architecture, communications and network security, identity and access management, security assessment and testing, security operations, and software development security.',
      icon: '🛡️',
      issuer: '(ISC)²',
      link: 'https://www.isc2.org/Certifications/CISSP'
    },
    oscp: {
      name: 'OSCP',
      fullName: 'Offensive Security Certified Professional',
      description: 'Hands-on penetration testing certification requiring practical exploitation skills, report writing, and 24-hour practical exam. Demonstrates real-world offensive security capabilities.',
      icon: '⚔️',
      issuer: 'Offensive Security',
      link: 'https://www.offensive-security.com/pwk-oscp/'
    },
    sans: {
      name: 'GPYC',
      fullName: 'GIAC Python Coder',
      description: 'Validates skills in Python programming for cybersecurity professionals, including scripting for penetration testing, security automation, and malware analysis.',
      icon: '🐍',
      issuer: 'SANS Institute',
      link: 'https://www.giac.org/certification/python-coder-gpyc'
    },
    aws: {
      name: 'SAA',
      fullName: 'AWS Solutions Architect Associate',
      description: 'Validates expertise in designing distributed systems and applications on AWS cloud platform, including compute, networking, storage, and database services.',
      icon: '☁️',
      issuer: 'Amazon Web Services',
      link: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/'
    },
    gcp: {
      name: 'ACE',
      fullName: 'Google Cloud Associate Cloud Engineer',
      description: 'Demonstrates ability to deploy applications, monitor operations, and maintain cloud projects on Google Cloud Platform.',
      icon: '🌐',
      issuer: 'Google Cloud',
      link: 'https://cloud.google.com/certification/cloud-engineer'
    }
  };

  // Professional experience data
  const professionalExperience = [
    {
      id: 'blackbreach',
      title: 'Chief Technology Officer',
      company: 'Black Breach',
      period: '2024 - Present',
      description: 'Spearheading cybersecurity innovation and development after successful acquisition of Sugar Security. Leading automated penetration testing solutions and cloud security initiatives.',
      tags: ['Leadership', 'Strategy', 'Product Development'],
      icon: '👔'
    },
    {
      id: 'sugar',
      title: 'Founder & Lead Security Engineer',
      company: 'Sugar Security',
      period: '2022 - 2024',
      description: 'Founded and developed comprehensive vulnerability scanning platform from concept to acquisition. Built enterprise-grade security tools and managed technical operations as founding engineer.',
      tags: ['Entrepreneurship', 'Product Development', 'Security Engineering'],
      icon: '🚀'
    },
    {
      id: 'digitalsilence',
      title: 'Senior Security Consultant',
      company: 'Digital Silence',
      period: '2020 - 2022',
      description: 'Elite penetration tester specializing in advanced application security and cloud infrastructure attacks. Led high-stakes engagements including infrastructure compromise, healthcare and financial services penetration testing, and stealth red team operations. Executed sophisticated multi-vector attacks across dynamic environments.',
      tags: ['Advanced Pentesting', 'Cloud Security', 'Red Team Operations', 'Critical Infrastructure'],
      icon: '🔒'
    },
    {
      id: 'coalfire',
      title: 'Penetration Tester & Security Consultant',
      company: 'Coalfire Labs',
      period: '2017 - 2020',
      description: 'Specialized in enterprise environment testing, web application and API security assessments. Conducted comprehensive security evaluations for Fortune 500 companies.',
      tags: ['Penetration Testing', 'Security Assessment', 'Enterprise Security'],
      icon: '🛡️'
    },
    {
      id: 'sonic',
      title: 'Cybersecurity Technician',
      company: 'Sonic Drive-In',
      period: '2016 - 2017',
      description: 'Implemented cybersecurity measures and protocols for restaurant operations. Managed security infrastructure and compliance requirements across multiple locations.',
      tags: ['Infrastructure Security', 'Compliance', 'Operations'],
      icon: '🍟'
    },
    {
      id: 'dell',
      title: 'IT Specialist',
      company: 'Dell Inc.',
      period: '2014 - 2016',
      description: 'IT specialist role with light security responsibilities. Supported enterprise infrastructure and gained foundational experience in systems administration and security operations.',
      tags: ['IT Support', 'Systems Administration', 'Infrastructure'],
      icon: '💻'
    }
  ];

  // Core Expertise - Combined technical and security specializations
  const coreExpertise = [
    {
      id: 'pentesting',
      title: 'Advanced Penetration Testing',
      description: 'Elite penetration testing across web applications, mobile apps, cloud infrastructure, and network environments. Specialized in high-stakes engagements including critical infrastructure, healthcare systems, and financial services.',
      tags: ['Web Apps', 'Mobile', 'Cloud', 'Networks', 'Critical Infrastructure'],
      icon: '🎯'
    },
    {
      id: 'redteam',
      title: 'Red Team Operations & Tool Development',
      description: 'Built AI-powered exploit development tools, red team automations, sandbox environments, and custom C2 frameworks. Led stealth operations and advanced persistent threat simulations.',
      tags: ['Exploit Development', 'C2 Frameworks', 'APT Simulation', 'Custom Tools'],
      icon: '⚔️'
    },
    {
      id: 'ai_security',
      title: 'AI-Native Security Engineering',
      description: 'Pioneered enterprise AI security platforms with multi-modal RAG systems, autonomous vulnerability discovery, and LLM-powered exploit synthesis. Building the future of automated security testing.',
      tags: ['RAG Systems', 'LLM Security', 'Multi-Agent Systems', 'AI Automation'],
      icon: '🤖'
    },
    {
      id: 'fullstack',
      title: 'Full-Stack Security Engineering',
      description: 'Building scalable security applications end-to-end with modern serverless architectures. React, Vue, and Django frontends. Python and NodeJS security APIs with threat modeling and secure coding practices.',
      tags: ['Python', 'JavaScript', 'React', 'AWS Lambda', 'Secure Architecture'],
      icon: '⚡'
    },
    {
      id: 'cloud_security',
      title: 'Cloud Security Architecture',
      description: 'Expert in AWS and GCP security architecture, infrastructure as code, and cloud-native security solutions. Specialized in serverless security and multi-cloud environments.',
      tags: ['AWS Security', 'GCP Security', 'Infrastructure as Code', 'Serverless Security'],
      icon: '☁️'
    }
  ];

  // Tools and projects data
  const projects = [
    {
      id: 'askparis',
      title: 'Ask Paris - LLM Security Research',
      description: 'AI platform leveraging RAG architecture for autonomous vulnerability research and exploit development.',
      link: 'https://github.com/sw33tr0ll/ask.paris.systems',
      category: 'Security Tools',
      tags: ['AI', 'Security Research', 'Automation']
    },
    {
      id: 'slurp',
      title: 'AWS Slurp GitHub Takeover',
      description: 'Defensive takeover of orphaned AWS S3 enumeration tool repository. Prevented malicious actors from exploiting deleted GitHub account to distribute compromised tooling.',
      link: 'https://github.com/bbb31/slurp',
      category: 'Security Research',
      tags: ['Supply Chain Security', 'AWS', 'Open Source']
    },
    {
      id: 'achilles',
      title: 'CTF - RCE via Calculator',
      description: 'Advanced Capture The Flag challenge featuring Remote Code Execution through calculator functionality. Built with Python, Docker, and AWS Serverless architecture.',
      link: 'https://github.com/sw33tr0ll/unhackable_calculator',
      category: 'CTF Challenges',
      tags: ['CTF', 'RCE', 'Python', 'Docker', 'AWS']
    },
    {
      id: 'elongate',
      title: 'Elongate Stock Tracker',
      description: 'AI-powered sentiment analysis tool that monitors Elon Musk\'s Twitter activity to predict stock and cryptocurrency market movements.',
      link: 'https://github.com/sw33tr0ll/elongate',
      category: 'Fun Projects',
      tags: ['AI', 'Sentiment Analysis', 'Finance', 'Twitter API']
    }
  ];

  const toggleCardExpansion = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const openCertModal = (cert) => {
    setSelectedCert(cert);
  };

  const closeCertModal = () => {
    setSelectedCert(null);
  };

  const Card = ({ item, isExpanded, onToggle, children }) => (
    <div className="card" onClick={onToggle}>
      <div className="card-header">
        <div className="card-main">
          <div className="card-title">{item.title}</div>
          {item.company && <div className="card-subtitle">{item.company}</div>}
          {item.period && <div className="card-meta">{item.period}</div>}
        </div>
        <button 
          className="expand-button"
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
        >
          {isExpanded ? '−' : '+'}
        </button>
      </div>
      {isExpanded && (
        <div className="card-content">
          <p>{item.description}</p>
          {item.tags && (
            <div className="card-tags">
              {item.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          )}
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="App">
      {/* Professional Header */}
      <header className="header">
        <div className="header-content">
          {/* Profile Section */}
          <div className="profile-section">
            <div className="profile-avatar">🍬</div>
            <div className="profile-info">
              <h1>Logan Evans</h1>
              <div className="profile-subtitle">Security Professional • Tool Builder</div>
            </div>
          </div>

          {/* Compact Certifications */}
          <div className="header-certs">
            {Object.entries(certifications).map(([key, cert]) => (
              <div
                key={key}
                className="cert-badge"
                onClick={() => openCertModal(cert)}
              >
                {cert.icon} {cert.name}
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="header-social">
            <a href="https://linkedin.com/in/logan-evans-okc" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            <a href="https://github.com/sw33tr0ll" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
            <a href="https://x.com/sweetrollbandit" target="_blank" rel="noopener noreferrer" className="social-link">X</a>
            <a 
              href="/logan-evans-cv.pdf"
              download="Logan-Evans-CV.pdf"
              rel="noopener noreferrer" 
              className="social-link cv-download"
            >
              Download CV
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Professional Experience */}
        <section className="section">
          <div className="section-header">
            <span className="section-icon">💼</span>
            <h2 className="section-title">Professional Experience</h2>
          </div>
          <div className="cards-grid">
            {professionalExperience
              .slice(0, showAllExperience ? undefined : 3)
              .map((exp) => (
                <Card
                  key={exp.id}
                  item={exp}
                  isExpanded={expandedCards[exp.id]}
                  onToggle={() => toggleCardExpansion(exp.id)}
                />
              ))}
          </div>
          {professionalExperience.length > 3 && (
            <button 
              className="show-more-btn"
              onClick={() => setShowAllExperience(!showAllExperience)}
            >
              {showAllExperience ? 'Show Less' : 'Show More Experience'}
            </button>
          )}
        </section>

        {/* Core Expertise */}
        <section className="section">
          <div className="section-header">
            <span className="section-icon">🛡️</span>
            <h2 className="section-title">Core Expertise</h2>
          </div>
          <div className="cards-grid">
            {coreExpertise.map((expertise) => (
              <Card
                key={expertise.id}
                item={expertise}
                isExpanded={expandedCards[expertise.id]}
                onToggle={() => toggleCardExpansion(expertise.id)}
              />
            ))}
          </div>
        </section>

        {/* Tools & Projects */}
        <section className="section">
          <div className="section-header">
            <span className="section-icon">🛠️</span>
            <h2 className="section-title">Tools & Projects</h2>
          </div>
          <div className="cards-grid">
            {projects.map((project) => (
              <Card
                key={project.id}
                item={project}
                isExpanded={expandedCards[project.id]}
                onToggle={() => toggleCardExpansion(project.id)}
              >
                <button 
                  className="show-more-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.link, '_blank');
                  }}
                >
                  🔗 Visit Project
                </button>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Certification Modal */}
      {selectedCert && (
        <div className="cert-modal" onClick={closeCertModal}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeCertModal}>×</button>
            <div className="cert-modal-header">
              <span className="cert-modal-icon">{selectedCert.icon}</span>
              <div>
                <div className="cert-modal-title">{selectedCert.fullName}</div>
                <div className="cert-modal-issuer">{selectedCert.issuer}</div>
              </div>
            </div>
            <p>{selectedCert.description}</p>
            <button 
              className="show-more-btn"
              onClick={() => window.open(selectedCert.link, '_blank')}
            >
              🔗 View Certification Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;