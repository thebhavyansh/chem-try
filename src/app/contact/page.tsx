import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="head">Contact</h1>
      <div className="sub-contan">
        <div className="left">
          <p>Have Any Questions?</p>
          <h2>
            Please feel free to call or email us, or use our contact form to get
            in touch with us. We look forward to hearing from you!
          </h2>
          <p>
            Please feel free to call or email us, or use our contact form to get
            in touch with us. We look forward to hearing from you!
          </p>
        </div>
        <div className="right">
          <form action="">
            <input type="text" name="Name" id="" placeholder="Name" />
            <input type="email" name="email" id="" placeholder="Email" />
            <textarea
              name="comment"
              form="usrform"
              placeholder="enter the text here"
            ></textarea>
            <button className="fade">Submit</button>
          </form>
        </div>
      </div>
      <div className="dn">
        <div className="lft">
          <h2>Don't Be A Stranger</h2>
          <h1 className="head">Contact Us</h1>
          <div className="dnt">
            <p>Phone - +1 910-626-85255</p>
            <p>Email - architects@info.com</p>
            <p>Address - 123 Fifth Avenue, New York, NY 10160</p>
          </div>
        </div>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14313.011336675294!2d81.39438477400152!3d26.253456429609276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ba9cc2719137b%3A0xaf28723ef28de9b2!2sBhabhi%20scoring%20point!5e0!3m2!1sen!2sin!4v1716289198492!5m2!1sen!2sin"
          width="600"
          height="450"
          allowfullscreen="allow"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}
      </div>
    </div>
  );
};

export default Contact;
