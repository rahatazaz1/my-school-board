import React from 'react';

const Experience = () => {
  return (
    <section id="experience">
      <h2>Work Experience</h2>

      <div className="job">
        <h3>Module Lead | Mphasis</h3>
        <p><em>Jun 2023 – Present</em></p>
        <ul>
          <li>Leads full Software Development Life Cycle (SDLC) from requirement analysis to deployment.</li>
          <li>Architects complex business logic using AngularJS, Java Spring Boot, and Microservices.</li>
          <li>Manages data persistence using Oracle database and REST APIs.</li>
          <li>Champions code quality through unit testing (Mockito) and BDD (Cucumber, Selenium TestNG).</li>
        </ul>
      </div>

      <div className="job">
        <h3>Technical Lead | Manhattan Associates</h3>
        <p><em>Mar 2022 – Jun 2023</em></p>
        <ul>
          <li>Led full-stack Java development team delivering customized e-commerce solutions.</li>
          <li>Directed design and implementation of complex UI features using React.</li>
          <li>Mentored team members and performed rigorous code reviews.</li>
          <li>Resolved complex technical challenges ensuring project alignment.</li>
        </ul>
      </div>

      <div className="job">
        <h3>Software Developer | Fiserv</h3>
        <p><em>Mar 2019 – Mar 2022</em></p>
        <ul>
          <li>Full-stack development of core banking applications.</li>
          <li>Worked on both Struts-based Java web applications and C++ backend systems.</li>
          <li>Developed custom banking modules using Java, Spring Boot, Hibernate, AWS (EC2, S3).</li>
          <li>Designed REST APIs for data integration and customer-facing dashboards.</li>
        </ul>
      </div>

      <div className="job">
        <h3>Software Developer | Quess Corp - TATA Power SED</h3>
        <p><em>Jul 2014 – Mar 2019</em></p>
        <ul>
          <li>Developed mission-critical software for DRDO projects (Indian Army & Navy).</li>
          <li>Utilized Java, C++, and PostGIS for geospatial analysis and webGIS integration.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
