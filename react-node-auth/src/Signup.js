import React from "react"
import './App.css';

const Signup = () => {
    return(
        <div class="form" >
            <h1>Sign up</h1>
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="email" placeholder="Email" /> 
            <input type="text" name="password" placeholder="Password" />
            <button>Sign up</button>
        </div>
    )
}


export default Signup