import React from "react";
import theme from "../../assets/theme_pattern.svg";
import { MdEmail } from "react-icons/md";
import { MdDialerSip } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactTitle">
        <h2>Get in touch</h2>
        <img src={theme} alt="" />
      </div>
      <div className="contactDetail">
        <div className="detailLeft">
          <h3>Let's talk </h3>
          <p className="description">
            I am currently available to take on new project, so feel free to
            send message about anything that you want me to work on. you can
            contact any time.
          </p>
          <div className="gmail">
            <MdEmail className="gmailLogo" />
            <p>asharfarooq09@gmail.com</p>
          </div>
          <div className="number">
            <MdDialerSip className="logo" />
            <p>+91 7599942225</p>
          </div>
          <div className="address">
            <FaLocationDot className="logo" />
            <p>Amroha, New Delhi</p>
          </div>
        </div>
        <div className="detailRight">
          <div className="detail">
            <p>Your Name</p>
            <input
              className="input"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="detail">
            <p>Your Email</p>
            <input
              className="input"
              type="text"
              placeholder="Enter your email"
            />
          </div>
          <div className="detail">
            <p>Write your message here</p>
            <textarea
              className="input"
              name=""
              rows={6}
              placeholder="Enter message"
            />
          </div>
          <button className="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
