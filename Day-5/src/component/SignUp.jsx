import React from "react"
import "./login.css"
import { Link } from "react-router-dom";


function SignUp() {


    return (
        <main className="login-container">
            <div className="login">
                <h1>Sign-Up form</h1>
                    <div className="login-inputs ">
                        <input className="name-input" type="text" placeholder="username" />
                        <input className="mail-input" type="email" placeholder="e-mail" />
                        <input className="pass-input" type="password" placeholder="password" />
                    </div>
                    <div className="login-button">
                        <button className="but-log">Sign-In</button>
                    </div>
                    <div className="sign-up">
                        <h5 className="sig-h5">Already Have an Account ?</h5><Link to='/login'>Login</Link>
                    </div>
            </div>
        </main>



    )
}

export default SignUp;