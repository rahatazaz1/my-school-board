import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Key Projects</h2>

      <div className="project">
        <h3>Wells Fargo Home Landing Project</h3>
        <p>A key project in the Warehouse/Supply Chain Management domain, delivered during my time at Manhattan Associates.</p>
      </div>

      <div className="project">
        <h3>Spectrum CUS (Credit Union Solution)</h3>
        <p>Full-stack development of a core banking application for a credit union, involving Java, Spring Boot, and AWS.</p>
      </div>

      <div className="project">
        <h3>MapEx - GIS Mapping Service</h3>
        <p>A mission-critical GIS mapping service developed for the Indian military (DRDO projects), utilizing Java, C++, and PostGIS.</p>
      </div>

      <div className="project">
        <h3>Combat Management System (CMS)</h3>
        <p>Developed a Combat Management System for the Cochin Shipyard as part of critical defense projects for the Indian Navy.</p>
      </div>
    </section>
  );
};

export default Projects;
