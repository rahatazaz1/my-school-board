import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="text-center section-heading">Work Experience</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body p-4">
                <h4 className="card-title">Module Lead</h4>
                <h5 className="card-subtitle mb-2 text-muted">Mphasis</h5>
                <small className="text-muted">Jun 2023 – Present</small>
                <ul className="mt-3">
                  <li>Leads full Software Development Life Cycle (SDLC) from requirement analysis to deployment.</li>
                  <li>Architects complex business logic using AngularJS, Java Spring Boot, and Microservices.</li>
                  <li>Manages data persistence using Oracle database and REST APIs.</li>
                  <li>Champions code quality through unit testing (Mockito) and BDD (Cucumber, Selenium TestNG).</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body p-4">
                <h4 className="card-title">Technical Lead</h4>
                <h5 className="card-subtitle mb-2 text-muted">Manhattan Associates</h5>
                <small className="text-muted">Mar 2022 – Jun 2023</small>
                <ul className="mt-3">
                  <li>Led full-stack Java development team delivering customized e-commerce solutions.</li>
                  <li>Directed design and implementation of complex UI features using React.</li>
                  <li>Mentored team members and performed rigorous code reviews.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body p-4">
                <h4 className="card-title">Software Developer</h4>
                <h5 className="card-subtitle mb-2 text-muted">Fiserv</h5>
                <small className="text-muted">Mar 2019 – Mar 2022</small>
                <ul className="mt-3">
                  <li>Full-stack development of core banking applications.</li>
                  <li>Developed custom banking modules using Java, Spring Boot, Hibernate, and AWS.</li>
                  <li>Designed REST APIs for data integration and customer-facing dashboards.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body p-4">
                <h4 className="card-title">Software Developer</h4>
                <h5 className="card-subtitle mb-2 text-muted">Quess Corp - TATA Power SED</h5>
                <small className="text-muted">Jul 2014 – Mar 2019</small>
                <ul className="mt-3">
                  <li>Developed mission-critical software for DRDO projects (Indian Army & Navy).</li>
                  <li>Utilized Java, C++, and PostGIS for geospatial analysis and webGIS integration.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
