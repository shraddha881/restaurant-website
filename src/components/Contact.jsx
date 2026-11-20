import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  }

  return (
    <section className="contact" id="contact">

      <h2>Contact Us</h2>

      <p className="contact-description">
        We would love to hear from you. Get in touch with LovelyBite.
      </p>

      <div className="contact-container">

        <div className="contact-info">
          <h3>Get In Touch</h3>

          <p>
            <strong>Address:</strong>
            <br />
            123 Food Street, Bengaluru
          </p>

          <p>
            <strong>Phone:</strong>
            <br />
            +91 98765 43210
          </p>

          <p>
            <strong>Email:</strong>
            <br />
            contact@lovelybite.com
          </p>

          <p>
            <strong>Opening Hours:</strong>
            <br />
            Monday - Sunday: 10:00 AM - 10:00 PM
          </p>
        </div>

        <div className="contact-form-container">
          <h3>Send Us a Message</h3>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>
        </div>

      </div>

    </section>
  );
}

export default Contact;