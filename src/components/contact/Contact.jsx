import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import AnimatedSection from "../common/AnimatedSection";
import "./Contact.css";
import { contactDetail } from "./constant";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
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
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact">
      <SectionTitle subtitle="Reach out">Get in Touch</SectionTitle>

      <div className="contact__grid">
        <AnimatedSection className="contact__info">
          <h3 className="contact__heading accent-text">Let&apos;s talk</h3>
          <p className="contact__description">
            I&apos;m open to discussing new projects, collaborations, and full-time
            opportunities. Whether you have a question about design systems or want
            to work together — I&apos;ll get back to you as soon as possible.
          </p>
          <ul className="contact__details">
            {contactDetail.map((item, i) => {
              const Icon = item.logo;
              const content = (
                <>
                  <Icon className="contact__icon" aria-hidden="true" />
                  <span>{item.detail}</span>
                </>
              );
              return (
                <li key={i}>
                  {item.href ? (
                    <a href={item.href} className="contact__detail">
                      {content}
                    </a>
                  ) : (
                    <div className="contact__detail">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </AnimatedSection>

        <AnimatedSection className="contact__form-wrap" delay={0.1}>
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <motion.button
              className="btn btn--primary contact__submit"
              type="submit"
              disabled={loading}
              whileTap={{ scale: 0.97 }}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {status === "success" && (
              <p className="contact__status contact__status--success" role="status">
                Message sent successfully! I&apos;ll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="contact__status contact__status--error" role="alert">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Contact;
