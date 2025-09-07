import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="text-center section-heading">About Me</h2>
        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img src="https://placehold.co/300x300" className="img-fluid rounded-circle shadow-sm" alt="Mohammad Azaz" />
          </div>
          <div className="col-md-8">
            <p className="lead">
              Proven ability to lead teams and deliver complex projects. Industry experience in Banking, Finance, and Supply Chain Management.
            </p>
            <p>
              Notable clients: Wells Fargo, DRDO, Indian Army, Indian Navy.
              Currently upskilling in Prompt Engineering, Agentic AI, and automation (n8n).
              Passionate about leveraging innovative solutions to drive business value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
