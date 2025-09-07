import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="section bg-light">
      <div className="container">
        <h2 className="text-center section-heading">Technical Expertise</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <h3 className="mb-4 text-center">Core Programming</h3>
            <ul className="list-group">
              <li className="list-group-item"><strong>Languages:</strong> <span className="badge bg-primary me-1">Java (8+)</span><span className="badge bg-primary me-1">JavaScript</span><span className="badge bg-primary me-1">SQL</span><span className="badge bg-primary me-1">C++</span></li>
              <li className="list-group-item"><strong>Frameworks:</strong> <span className="badge bg-success me-1">Spring Boot</span><span className="badge bg-success me-1">React</span><span className="badge bg-success me-1">AngularJS</span></li>
              <li className="list-group-item"><strong>Architecture:</strong> <span className="badge bg-info me-1">Microservices</span><span className="badge bg-info me-1">REST APIs</span><span className="badge bg-info me-1">BDD</span></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h3 className="mb-4 text-center">Data & Cloud</h3>
            <ul className="list-group">
              <li className="list-group-item"><strong>Databases:</strong> <span className="badge bg-secondary me-1">MongoDB</span><span className="badge bg-secondary me-1">Oracle</span><span className="badge bg-secondary me-1">MySQL</span></li>
              <li className="list-group-item"><strong>Cloud & DevOps:</strong> <span className="badge bg-danger me-1">AWS</span><span className="badge bg-danger me-1">Docker</span><span className="badge bg-danger me-1">Jenkins</span><span className="badge bg-danger me-1">CI/CD</span></li>
              <li className="list-group-item"><strong>Dev Tools:</strong> <span className="badge bg-dark me-1">IntelliJ</span><span className="badge bg-dark me-1">VSCode</span><span className="badge bg-dark me-1">Git</span></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h3 className="mb-4 text-center">Emerging Tech</h3>
            <ul className="list-group">
              <li className="list-group-item"><strong>AI & Automation:</strong> <span className="badge bg-warning text-dark me-1">Agentic AI</span><span className="badge bg-warning text-dark me-1">Prompt Engineering</span><span className="badge bg-warning text-dark me-1">n8n</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
