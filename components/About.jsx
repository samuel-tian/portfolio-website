import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineProfile } from 'react-icons/ai'

const About = () => {
    return (
        <div>
            <h1>Sam Tian</h1>
            <p>Hi! My name is Sam, and I am a sophomore studying computer science at MIT.</p>
            <ul>
                <li><a href="https://github.com/samuel-tian"><AiFillGithub/></a></li>
                <li><a href="https://www.linkedin.com/in/samuel-tian/"><AiFillLinkedin/></a></li>
                <li><a href="../static/Resume_SamuelTian.pdf"><AiOutlineProfile/></a></li>
            </ul>
            
        </div>
    
  )
}

export default About