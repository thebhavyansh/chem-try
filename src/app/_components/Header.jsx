import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
function Header() {
  return (
    <div className={styles.header}>
      <div >
        <Image className={styles.logo} src={logo} />
      </div>
      <ul className={styles.list}>
      <Link href="/services"><li>Services</li>
      </Link>  
      <Link href='/about'><li>About us</li></Link>  
      <Link href='contact'><li>Contact us</li></Link>  
      </ul>
      <div className={styles.login} >
        <Link href={'/Login'}>
          <button className={styles.register}>Login</button>
        </Link>
        <Link href={'/Signup'}>
          <button className={styles.register}>Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
