import React, { useState } from "react";
import theme from "../../assets/theme_pattern.svg";
import "./Contact.css";
import { contactDetail } from "./constant";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("https://formspree.io/f/mrbpbgyp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Try again later.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact">
      <div className="contactTitle">
        <h2>Get in touch</h2>
        <img src={theme} alt="Theme Pattern" />
      </div>
      <div className="contactDetail">
        <div className="detailLeft">
          <h3>Let's talk</h3>
          <p className="description">
            I am currently available to take on new projects, so feel free to
            send a message about anything that you want me to work on.
          </p>
          {contactDetail.map((d, i) => (
            <div className="gmail" key={i}>
              <d.logo className="logo" />
              <p>{d.detail}</p>
            </div>
          ))}
        </div>
        <form className="detailRight" onSubmit={handleSubmit}>
          <div className="detail">
            <label htmlFor="name">Your Name</label>
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="detail">
            <label htmlFor="email">Your Email</label>
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="detail">
            <label htmlFor="message">Write your message here</label>
            <textarea
              className="textarea"
              id="message"
              name="message"
              rows={6}
              placeholder="Enter message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button className="submit" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
          {status && <p className="statusMessage">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
