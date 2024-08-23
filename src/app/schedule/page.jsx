import React from "react";
import "./demo.css";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
const Demo = () => {
  return (
    <div className="main-demo">
        <Header />
<div className="form">
<div className="form-container">
      <h2>Schedule a Demo</h2>
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Work Email Address" required />
      <select name="Type" className="input100">
            <option value="volvo">Selecty Account Type</option>
            <option value="saab">Individual</option>
            <option value="mercedes">Company</option>
            <option value="audi">Other</option>
          </select>
          <select name="occupation" className="input100">
            <option value="student">Student</option>
            <option value="engineer">Engineer</option>
            <option value="doctor">Doctor</option>
            <option value="teacher">Teacher</option>
            <option value="lawyer">Lawyer</option>
            <option value="nurse">Nurse</option>
            <option value="scientist">Scientist</option>
            <option value="artist">Artist</option>
            <option value="accountant">Accountant</option>
            <option value="developer">Developer</option>
          </select>
          <input type="number" placeholder="Work Phone Number" required />
          <input type="text" placeholder="Work Address" required />

      <textarea rows="4" placeholder="Your Requirements" required></textarea>
      <button type="submit">Submit</button>
    </div>
</div>
    <Footer />
    </div>
    
  );
};

export default Demo;
