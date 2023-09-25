import React from "react"
import "./login.css"
import { Link, useNavigate } from "react-router-dom";


function SignUp() {

    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        // dispatch(login({username}));
        navigate('/userlogin');
    }

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
                        <button className="but-log" onClick={handleSignUp}>Sign-In</button>
                    </div>
                    <div className="sign-in" >
                        <h5 className="log-h5">Already Have an Account ?</h5><Link to='/userlogin'>Login</Link>
                    </div>
            </div>
        </main>



    )
}

export default SignUp;