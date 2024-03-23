import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage= ()=>{

    const [usernameState, setUsernameState]= useState("");
    const [passwordState, setPasswordState]= useState("");

    const navigate= useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        
        try{

            const response= await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                        username:`${usernameState}`,
                        password:`${passwordState}`,
                    })
            })

            console.log(response);
            if(response.status===200){
                const responseData= await response.json();
                console.log(responseData);
                let info={
                    id:responseData.id,
                    token:responseData.token
                }

                localStorage.setItem("info", JSON.stringify(info));
                navigate("/info")

            }
        }
        catch(err){
            console.log(err.message);
        }

    }

    return(
        <div className="login-page">
            <div className="form-container">
                <div>
                    <p>Welcome Back👋</p>
                    <h1>Log in to your account</h1>
                </div>
                <form className="form" >
                    <label>
                        <p><strong>UserName</strong><span style={{color:"red"}}>*</span></p>
                        <input 
                        onChange={(e)=>setUsernameState(e.target.value)}
                        type="text" 
                        placeholder="Enter Username" 
                        required />
                    </label> 
                    <label>
                        <p><strong>Password</strong><span style={{color:"red"}}>*</span></p>
                        <input 
                        onChange={(e)=>setPasswordState(e.target.value)}
                        type="password" 
                        placeholder="Enter Password" 
                        required />
                    </label> 
                    <button onClick={handleSubmit} >Log In</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage