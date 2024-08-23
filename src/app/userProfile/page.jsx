"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./user.css";
import profile from "@/assets/profile.png";
import Link from "next/link";
function UserProfile() {
  const [activeComponent, setActiveComponent] = useState("profile");
  const [active, setActive] = useState("");
  const renderComponent = () => {
    switch (activeComponent) {
      case "profile":
        return (
          <div className="content">
            Your Profile
            <form className="profile-form">
              <div className="form-group">
                <label htmlFor="name">Company Details</label>
                <input type="text" id="name" name="name" placeholder="" />
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <p>The name associated with this account</p>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <p> The email associated with this account</p>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="number">Phone number</label>
                <input type="number" id="number" name="number" />
              </div>
              <div className="form-group">
                <label htmlFor="name">Address</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Address"
                />
              </div>
              <button type="submit">Save Changes</button>
            </form>
          </div>
        );
      case "services":
        return (
          <div className="content">
            <div className="cont">
              <h2>Services</h2>
              <div className="l1">
                <input type="text" placeholder="Search..." />
                <div className="bt">
                  Add Services
                </div>
              </div>
              <div className="d1">
                <div className="dd1">
                  <div className="org">
                    <div className="lf1">
                      <div className="avatar">
                        C
                      </div>
                      <div className="name">
                      <h1>Chemdraw</h1>
                      <h3>contact@chemdraw.in</h3>
                      </div>
                    </div>
                    <div className="bt">
                      Leave
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "billings":
        return (
          <div className="content">
            <div className="cont">
              <h2>Billing</h2>
              <div className="l1 ls">
               <div className="lp1"> <h3>Overview</h3>
                <h3>Payment History</h3>
                <h3>Billing History</h3></div>
              </div>
              <div className="l2">
                <p>Credit remaining</p>
                <h2>$0.00</h2>
                <div className="ll2">
                  <div className="bt">Add payment details</div>
                  <div className="bt">View usage</div>
                </div>
              </div>
              <div className="l3">
                <div className="ll3">
                  <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7Zm2 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6H4Zm16-2H4V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2Zm-6 6a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Z" clip-rule="evenodd"></path></svg></div>
                  <div className="name">
                    <h5>Payment methods</h5>
                    <h4>Add or change payment method</h4>
                  </div>
                </div>
                <div className="ll3">
                  <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.828a3 3 0 0 0-.879-2.12l-3.828-3.83A3 3 0 0 0 13.172 2H7Zm5 2H7a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9h-3a3 3 0 0 1-3-3V4Zm5.586 4H15a1 1 0 0 1-1-1V4.414L17.586 8Z" clip-rule="evenodd"></path></svg></div>
                  <div className="name">
                    <h5>Billing history</h5>
                    <h4>
                    View past and current invoices</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "members":
        return (
          <div className="content">
            <div className="cont">
              <h2>Team</h2>
              <div className="l1">
                <input type="text" placeholder="Search..." />
                <div className="bt">
                  Add Members
                </div>
              </div>
              <div className="d1">
                <div className="dd1">
                  <div className="org">
                    <div className="lf1">
                      <div className="avatar">
                        C
                      </div>
                      <div className="name">
                      <h1>Chemdraw</h1>
                      <h3>contact@chemdraw.in</h3>
                      </div>
                    </div>
                    <div className="bt">
                      Leave
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="content">
            <form className="profile-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="bio">Bio</label>
                <textarea
                  id="bio"
                  name="bio"
                  placeholder="Tell us about yourself"
                ></textarea>
              </div>
              <button type="submit">Save Changes</button>
            </form>
          </div>
        );
    }
  };
  const handleClick = (str) => {
    setActive(str);
    setActiveComponent(str);
  };
  return (
    <div className="main">
      <header className="header">
        <div className="lft">
          <h2>Welcome, @Name</h2>
        </div>
        <div className="rht">
          <ul>
            <li>
              <Link href={"/"}>Services</Link>
            </li>
            <li>
              {" "}
              <Link href={"/"}>Docs</Link>{" "}
            </li>
            <li>
              <Link href={"/"}>
                {" "}
                <Image src={profile} className="image" />
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <div className="contaner">
        <div className="left">
          <div className="lhk">
            <button
              className={active === "profile" ? "active" : "deactive"}
              onClick={() => handleClick("profile")}
            >
              Profile
            </button>
            <button
              className={active === "members" ? "active" : "deactive"}
              onClick={() => handleClick("members")}
            >
              Members
            </button>
            <button
              className={active === "billings" ? "active" : "deactive"}
              onClick={() => handleClick("billings")}
            >
              Billings
            </button>
            <button
              className={active === "services" ? "active" : "deactive"}
              onClick={() => handleClick("services")}
            >
              Services
            </button>
          </div>
        </div>
        <div className="right">{renderComponent()}</div>
      </div>
    </div>
  );
}

export default UserProfile;
