"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./signup.css";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    city: "",
    address: "",
    profession: "",
    type: "",
  });
  const onSignup = async () => {
    try {
      console.log(user);
      const response = await fetch('/api/Users/signup',{
        method:'POST',
        headers:{
          'content-type':'application/json',
        },
        body:JSON.stringify(user)
      })
      console.log("Signup Success", response.data);
      router.push("/login");
    } catch (error) {
      console.log("Signup failed");
    }
  };
  return (
    <>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <Image src={logo} />
            </div>
            <div className="login100-form validate-form">
              <span className="login100-form-title">Signup</span>
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <select
                  className="input100"
                  value={user.type}
                  onChange={(e) => setUser({ ...user, type: e.target.value })}
                >
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
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <select
                  className="input100"
                  placeholder="select occupation"
                  value={user.profession}
                  onChange={(e) =>
                    setUser({ ...user, profession: e.target.value })
                  }
                >
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
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  className="input100"
                  type="text"
                  placeholder="Name"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  className="input100"
                  type="text"
                  placeholder="City"
                  value={user.city}
                  onChange={(e) => setUser({ ...user, city: e.target.value })}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  className="input100"
                  type="text"
                  placeholder="Address"
                  value={user.address}
                  onChange={(e) =>
                    setUser({ ...user, address: e.target.value })
                  }
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  className="input100"
                  type="text"
                  placeholder="Email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                  className="input100"
                  type="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn" onClick={onSignup}>
                  Login
                </button>
              </div>
              <div className="text-center p-t-12">
                <span className="txt1">Forgot</span>
                <Link className="txt2" href="#">
                  Username / Password?
                </Link>
              </div>
              <div className="text-center p-t-136">
                <Link className="txt2" href="/">
                  Aready have Account
                  <i
                    className="fa fa-long-arrow-right m-l-5"
                    aria-hidden="true"
                  ></i>
                </Link>
              </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
