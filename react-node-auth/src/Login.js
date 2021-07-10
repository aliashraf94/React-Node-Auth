import React from "react"
import {Link} from "react-router-dom"

const Login = () => {
    const signupClick = () =>{
        
    }
    return(
        <div>
            <h1>Login</h1>
           <input type="text" name="email" placeholder="email" /> 
           <input type="text" name="password" placeholder="password" /> 
           <button> Login </button>
            <Link to="/signup" >Signup</Link> 
        </div>
    )
}


export default Login