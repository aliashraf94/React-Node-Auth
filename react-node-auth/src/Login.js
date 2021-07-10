import React from "react"
import {Link} from "react-router-dom"
import './App.css';

const Login = () => {
    const signupClick = () =>{
        
    }
    return(
        <div class="form">
            <h1>Log in</h1>
           <input type="text" name="email" placeholder="Email" /> 
           <input type="text" name="password" placeholder="Password" /> 
           <button> Log in </button>
             <p>Don't have an account?
             <Link to="/signup" > Sign up here! </Link> 
                 </p> 
        </div>
    )
}


export default Login