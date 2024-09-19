"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./user.module.css";
import profile from "../../../assets/profile.png";
import Link from "next/link";
import axios from "axios";
import { styleText } from "util";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

function UserProfile() {
  const router = useRouter();
  const [activeComponent, setActiveComponent] = useState("profile");
  const [active, setActive] = useState("");
  const [users, setUsers] = useState();
  const [change, setChange] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  const getUserDetails = async () => {
    try {
      const user = await axios.post("/api/Users/details");
      if (user) {
        setUsers(user.data.user);

        setChange((prevChange) => ({
          ...prevChange,
          email: user.data.user.email,
          phoneNumber: user.data.user.phoneNumber,
        }));
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
      router.push(`/`);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);
  useEffect(() => {
    console.log(users);
  }, [users]);

  const saveChange = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setChange((prevChange) => ({
      ...prevChange,
      email: users?.email,
      phoneNumber: users?.phoneNumber,
    }));
    try {
      const resp = await axios.post("/api/Users/change", change);
      if (resp) console.log("Successfully updated user information");
      console.log(resp);
    } catch (error) {
      console.error("Error updating user information:", error);
    }
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "profile":
        return (
          <div className={styles.content}>
            Your Profile
            <div className={styles.profile_form}>
              <div className={styles.form_group}>
                <label htmlFor="name">Name</label>
                <p>The name associated with this account</p>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={users?.name}
                  value={change.name}
                  onChange={(e) =>
                    setChange({ ...change, name: e.target.value })
                  }
                />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="email">Email</label>
                <p> The email associated with this account</p>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={users?.email}
                  disabled
                />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="number">Phone number</label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  placeholder={users?.phoneNumber}
                  disabled
                />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="name">Address</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={users?.address}
                  value={change.address}
                  onChange={(e) =>
                    setChange({ ...change, address: e.target.value })
                  }
                />
              </div>
              <button type="submit" onClick={saveChange}>
                Save Changes
              </button>
            </div>
          </div>
        );
      case "services":
        return (
          <div className={styles.content}>
            <div className={styles.cont}>
              <h2>Services</h2>
              <div className={styles.l1}>
                <input type="text" placeholder="Search..." />
                <div className={styles.bt}>Add Services</div>
              </div>
              <div className={styles.d1}>
                <div className={styles.dd1}>
                  <div className={styles.org}>
                    <div className={styles.lf1}>
                      <div className={styles.avatar}>C</div>
                      <div className={styles.name}>
                        <h1>Chemdraw</h1>
                        <h3>contact@chemdraw.in</h3>
                      </div>
                    </div>
                    <div className={styles.bt}>Leave</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "billings":
        return (
          <div className={styles.content}>
            <div className={styles.cont}>
              <h2>Billing</h2>
              <div className={`${styles.l1} ${styles.ls}`}>
                <div className={styles.lp1}>
                  <h3>Overview</h3>
                  <h3>Payment History</h3>
                  <h3>Billing History</h3>
                </div>
              </div>
              <div className={styles.l2}>
                <p>Credit remaining</p>
                <h2>$0.00</h2>
                <div className={styles.ll2}>
                  <div className={styles.bt}>Add payment details</div>
                  <div className={styles.bt}>View usage</div>
                </div>
              </div>
              <div className={styles.l3}>
                <div className={styles.ll3}>
                  <div className={styles.icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7Zm2 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6H4Zm16-2H4V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2Zm-6 6a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className={styles.name}>
                    <h5>Payment methods</h5>
                    <h4>Add or change payment method</h4>
                  </div>
                </div>
                <div className={styles.ll3}>
                  <div className={styles.icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.828a3 3 0 0 0-.879-2.12l-3.828-3.83A3 3 0 0 0 13.172 2H7Zm5 2H7a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9h-3a3 3 0 0 1-3-3V4Zm5.586 4H15a1 1 0 0 1-1-1V4.414L17.586 8Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className={styles.name}>
                    <h5>Billing history</h5>
                    <h4>View past and current invoices</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "members":
        return (
          <div className={styles.content}>
            <div className={styles.cont}>
              <h2>Team</h2>
              <div className={styles.l1}>
                <input type="text" placeholder="Search..." />
                <div className={styles.bt}>Add Members</div>
              </div>
              <div className={styles.d1}>
                <div className={styles.dd1}>
                  <div className={styles.org}>
                    <div className={styles.lf1}>
                      <div className={styles.avatar}>C</div>
                      <div className={styles.name}>
                        <h1>Chemdraw</h1>
                        <h3>contact@chemdraw.in</h3>
                      </div>
                    </div>
                    <div className={styles.bt}>Leave</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className={styles.content}>
            Your Profile
            <div className={styles.profile_form}>
              <div className={styles.form_group}>
                <label htmlFor="name">Name</label>
                <p>The name associated with this account</p>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={users?.name}
                  value={change.name}
                  onChange={(e) =>
                    setChange({ ...change, name: e.target.value })
                  }
                />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="email">Email</label>
                <p> The email associated with this account</p>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={users?.email}
                  disabled
                />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="number">Phone number</label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  placeholder={users?.phoneNumber}
                  disabled
                />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="name">Address</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={users?.address}
                  value={change.address}
                  onChange={(e) =>
                    setChange({ ...change, address: e.target.value })
                  }
                />
              </div>
              <button type="submit" onClick={saveChange}>
                Save Changes
              </button>
            </div>
          </div>
        );
    }
  };
  const handleClick = (str) => {
    setActive(str);
    setActiveComponent(str);
  };
  return (
    <div className={styles.mains}>
      <header className={styles.headers}>
        <div className={styles.lft}>
          <h2>{`Welcome, ${users?.name}`}</h2>
        </div>
        <div className={styles.rht}>
          <ul>
            <li>
              <Link href={`/services/pricing/${users?.id}`}>Services</Link>
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
      <div className={styles.contaner}>
        <div className={styles.left}>
          <div className={styles.lhk}>
            <button
              className={
                active === `${styles.profile}`
                  ? `${styles.active}`
                  : `${styles.deactive}`
              }
              onClick={() => handleClick("profile")}
            >
              Profile
            </button>
            <button
              className={
                active === `${styles.members}`
                  ? `${styles.active}`
                  : `${styles.deactive}`
              }
              onClick={() => handleClick("members")}
            >
              Members
            </button>
            <button
              className={
                active === `${styles.billings}`
                  ? `${styles.active}`
                  : `${styles.deactive}`
              }
              onClick={() => handleClick("billings")}
            >
              Billings
            </button>
            <button
              className={
                active === `${styles.services}`
                  ? `${styles.active}`
                  : `${styles.deactive}`
              }
              onClick={() => handleClick("services")}
            >
              Services
            </button>
          </div>
        </div>
        <div className={styles.right}>{renderComponent()}</div>
      </div>
    </div>
  );
}

export default UserProfile;
