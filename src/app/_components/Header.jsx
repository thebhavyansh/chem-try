"use client"
import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";
import { useState,useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
function Header() {
  const router = useRouter();
  const[login,setLogin] = useState(false);
  const[user,setUser]= useState('')
  const[id,setId] = useState('')
  const getUserDetails = async () => {
    const user =  await axios.post("/api/Users/details");
    console.log(user)
    if(user.data.message){
      console.log(user);
      setLogin(true);
      setUser(user.data.user?.name)
      setId(user.data.user?.id);
    }
    else{
      setLogin(false);
    }
  };
  const Logout = async () => {
    try {
      const response = await axios.post('/api/Users/Logout');
      if (response.data.success) {
        setLogin(false);
        setUser('');
        setId('');
        router.push(`/`);
      }
    } catch (error) {
      console.log("Error during logout:", error);
    }
  };
  useEffect(() => {
    getUserDetails();
  },[]);
  useEffect(() => {
    console.log(login);
  }, [login,user]);
  return (
    <div className={styles.header}>
      <div >
       <Link href="/"><Image className={styles.logo} src={logo} /></Link> 
      </div>
      <ul className={styles.list}>
      <Link href="/services"><li>Services</li>
      </Link>  
      <Link href='/about'><li>About us</li></Link>  
      <Link href='contact'><li>Contact us</li></Link>  
      </ul>
      {!login &&  <div className={styles.login} >
        <Link href={'/login'}>
          <button className={styles.register}>Login</button>
        </Link>
        <Link href={'/signup'}>
          <button className={styles.register}>Register</button>
        </Link>
      </div>  }
      {login && 
      <div className={styles.login}><button className={styles.register} ><Link href={`/userProfile/${id}`}>Hlw, {user}</Link>
      </button>
      <button className={styles.register} onClick={Logout}>Logout</button></div>
    }
    </div>
  );
}

export default Header;
