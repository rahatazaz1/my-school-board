import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-details">
        <p><strong>Email:</strong> <a href="mailto:mdazaz2010@gmail.com">mdazaz2010@gmail.com</a></p>
        <p><strong>Phone:</strong> +91 7021154715</p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/azaz1/" target="_blank" rel="noopener noreferrer">linkedin.com/in/azaz1/</a></p>
      </div>
      <form>
        <h3>Send a Message</h3>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
