import React from "react"
import './App.css';
import {Link} from "react-router-dom"

const Home = () => {
    return(
       <div class="home">
            <div class="card" >
                <h1>Welcome to Migracode</h1>
                <p>
                Migracode is a nonprofit coding school that empowers people from a migration background who are willing to make a career in the tech industry but not able to pursue their dreams due to a lack of resources. Migracode helps them to achieve their goals by providing all the resources with a big community of passionate volunteer teachers and tech companies. 
                </p>
                <p>
                Founded in 2019, they are cooperating with other code schools in Europe to build a large community of companies and students to foster both labor integration as well as social inclusion.Our program is for 99% powered and made possible by volunteers. Without this strong community, we would not be able to support vulnerable groups in Barcelona and offer them new opportunities in life.
                </p>
            <Link to="//migracode.openculturalcenter.org/" target="_blank" > <button>Support us!</button> </Link>
            
                
            </div>
       </div>
    )
}


export default Home