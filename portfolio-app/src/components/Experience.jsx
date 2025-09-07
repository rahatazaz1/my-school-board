import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Work Experience</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-header">
                <h3>Module Lead | Mphasis</h3>
                <p className="text-muted mb-0">Jun 2023 – Present</p>
              </div>
              <div className="card-body">
                <ul>
                  <li>Leads full Software Development Life Cycle (SDLC) from requirement analysis to deployment.</li>
                  <li>Architects complex business logic using AngularJS, Java Spring Boot, and Microservices.</li>
                  <li>Manages data persistence using Oracle database and REST APIs.</li>
                  <li>Champions code quality through unit testing (Mockito) and BDD (Cucumber, Selenium TestNG).</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-header">
                <h3>Technical Lead | Manhattan Associates</h3>
                <p className="text-muted mb-0">Mar 2022 – Jun 2023</p>
              </div>
              <div className="card-body">
                <ul>
                  <li>Led full-stack Java development team delivering customized e-commerce solutions.</li>
                  <li>Directed design and implementation of complex UI features using React.</li>
                  <li>Mentored team members and performed rigorous code reviews.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-header">
                <h3>Software Developer | Fiserv</h3>
                <p className="text-muted mb-0">Mar 2019 – Mar 2022</p>
              </div>
              <div className="card-body">
                <ul>
                  <li>Full-stack development of core banking applications.</li>
                  <li>Developed custom banking modules using Java, Spring Boot, Hibernate, and AWS.</li>
                  <li>Designed REST APIs for data integration and customer-facing dashboards.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-header">
                <h3>Software Developer | Quess Corp - TATA Power SED</h3>
                <p className="text-muted mb-0">Jul 2014 – Mar 2019</p>
              </div>
              <div className="card-body">
                <ul>
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
