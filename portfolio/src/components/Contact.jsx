import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="text-center section-heading">Contact Me</h2>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="text-center mb-5">
              <p><strong>Email:</strong> <a href="mailto:mdazaz2010@gmail.com">mdazaz2010@gmail.com</a></p>
              <p><strong>Phone:</strong> +91 7021154715</p>
              <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/azaz1/" target="_blank" rel="noopener noreferrer">linkedin.com/in/azaz1/</a></p>
            </div>
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-dark btn-lg">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
