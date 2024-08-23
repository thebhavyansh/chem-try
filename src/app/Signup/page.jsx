import Image from 'next/image'
import React from 'react'
import logo from "@/assets/logo.png";
import './signup.css'
import Link from 'next/link';
const Login = () => {
  return (
    <>
    <div className="limiter">
<div className="container-login100">
<div className="wrap-login100">
<div className="login100-pic js-tilt" data-tilt>
<Image src={logo} />
</div>
<form className="login100-form validate-form">
<span className="login100-form-title">
Member Login
</span>
<div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
<select name="Type" className="input100">
            <option value="volvo">Selecty Account Type</option>
            <option value="saab">Individual</option>
            <option value="mercedes">Company</option>
            <option value="audi">Other</option>
          </select>
<span className="focus-input100"></span>
<span className="symbol-input100">
<i className="fa fa-envelope" aria-hidden="true"></i>
</span>
</div>
<div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
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
<span className="focus-input100"></span>
<span className="symbol-input100">
<i className="fa fa-envelope" aria-hidden="true"></i>
</span>
</div>
<div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
<input className="input100" type="text" name="email" placeholder="Name" />
<span className="focus-input100"></span>
<span className="symbol-input100">
<i className="fa fa-envelope" aria-hidden="true"></i>
</span>
</div>
<div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
<input className="input100" type="text" name="email" placeholder="City" />
<span className="focus-input100"></span>
<span className="symbol-input100">
<i className="fa fa-envelope" aria-hidden="true"></i>
</span>
</div>
<div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
<input className="input100" type="text" name="email" placeholder="Address" />
<span className="focus-input100"></span>
<span className="symbol-input100">
<i className="fa fa-envelope" aria-hidden="true"></i>
</span>
</div>
<div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
<input className="input100" type="text" name="email" placeholder="Email" />
<span className="focus-input100"></span>
<span className="symbol-input100">
<i className="fa fa-envelope" aria-hidden="true"></i>
</span>
</div>
<div className="wrap-input100 validate-input" data-validate="Password is required">
<input className="input100" type="password" name="pass" placeholder="Password" />
<span className="focus-input100"></span>
<span className="symbol-input100">
<i className="fa fa-lock" aria-hidden="true"></i>
</span>
</div>
<div className="container-login100-form-btn">
<button className="login100-form-btn">
Login
</button>
</div>
<div className="text-center p-t-12">
<span className="txt1">
Forgot
</span>
<Link className="txt2" href="#">
Username / Password?
</Link>
</div>
<div className="text-center p-t-136">
<Link className="txt2" href="/">
Aready have Account
<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
</Link>
</div>
</form>
</div>
</div>
</div>


    </>
  )
}

export default Login