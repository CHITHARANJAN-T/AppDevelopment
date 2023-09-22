import React, { useState } from "react"
import "./login.css"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { login } from "../features/user"


function Login() {
    
    let [username,setUsername] = useState("")
    let [password,setPassword] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEvent = () => {
        dispatch(login({username}));
        navigate('/dashboard');
    }

    return (

        <main className="login-container">
            <div className="login">
                <h1>Login form</h1>
                    <div className="login-inputs ">
                        <input className="name-input" value={username} type="text" placeholder="username" onChange={(e)=>{setUsername(e.target.value)} }/>
                        <input className="pass-input" value={password} type="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)} }/>
                    </div>
                    <div className="login-button">
                        <button className="but-log" onClick={handleEvent}>Login</button>
                    </div>
                    <div className="sign-in">
                    <h5 className="log-h5" >New to the Platform ?</h5><Link to='/sigin'> Register</Link>
                    </div>
            </div>            
        </main>



    )
}

export default Login;