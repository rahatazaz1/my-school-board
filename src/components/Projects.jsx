import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Key Projects</h2>
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
              <img src="https://via.placeholder.com/300x200?text=Wells+Fargo" className="card-img-top" alt="Wells Fargo Project" />
              <div className="card-body">
                <h5 className="card-title">Wells Fargo Home Landing Project</h5>
                <p className="card-text">A key project in the Warehouse/Supply Chain Management domain, delivered during my time at Manhattan Associates.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
              <img src="https://via.placeholder.com/300x200?text=Spectrum+CUS" className="card-img-top" alt="Spectrum CUS Project" />
              <div className="card-body">
                <h5 className="card-title">Spectrum CUS (Credit Union Solution)</h5>
                <p className="card-text">Full-stack development of a core banking application for a credit union, involving Java, Spring Boot, and AWS.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
              <img src="https://via.placeholder.com/300x200?text=MapEx+GIS" className="card-img-top" alt="MapEx Project" />
              <div className="card-body">
                <h5 className="card-title">MapEx - GIS Mapping Service</h5>
                <p className="card-text">A mission-critical GIS mapping service developed for the Indian military (DRDO projects), utilizing Java, C++, and PostGIS.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
              <img src="https://via.placeholder.com/300x200?text=Combat+CMS" className="card-img-top" alt="CMS Project" />
              <div className="card-body">
                <h5 className="card-title">Combat Management System (CMS)</h5>
                <p className="card-text">Developed a Combat Management System for the Cochin Shipyard as part of critical defense projects for the Indian Navy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
