"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { useRouter } from "next/navigation";
import styles from './Login.module.css'
import Link from "next/link";
import axios from "axios";
function Login() {
    const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/Users/login", user);
      console.log("Login success", response);
      console.log(response.data);
      if(response.data.success){
      router.push(`/`);
      }
    } catch (error) {
      console.log("Login failed", error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className={styles.container}>
        <div className={styles.box}>
            <div className={styles.left}><Image src={logo} width={380} height={330}/></div>
            <div className={styles.right}>
                <div className={styles.rht}>
                <input
                  className={styles.input100}
                  id="email"
                  type="text"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  placeholder="Your Email"
                />
                <input
                  className={styles.input100}
                  id="password"
                  type="password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  placeholder="Password"
                />
                
                </div>
                <div className={styles.dn}>
                  <div className={styles.upr}><button className={styles.login100_form_btn} onClick={onLogin}>
                  Login
                </button></div>
                  <div className={styles.dnr}>
                  <Link className={styles.txt2} href="/signup">
                  Create your Account
                  
                </Link>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login