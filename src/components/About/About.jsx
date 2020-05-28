import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const About = () => {


  return (
    <div>
      <section>
        <h1>About the Developers</h1>
      </section>
      {/* chris */}
      <ul>
        <li> 
          <img src="../assets/chris.jpeg"></img>
          <h3>Chris Ficht</h3>
          <a href="https://www.linkedin.com/in/chrisficht/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
          <a href="https://github.com/cficht" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
        </li>
      </ul>
      {/* jenna */}
      <ul>
        <li>
          <img src="../assets/jenna.jpeg"></img>
          <h3>Jenna Goldman</h3>
          <a href="https://www.linkedin.com/in/jennagoldman/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
          <a href="https://github.com/jennagoldman" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
        </li>
      </ul>
       {/* hannah */}
      <ul>
        <li>
          <img src="../assets/hannah.jpeg"></img>
          <h3>Hannah Riley</h3>
          <a href="https://www.linkedin.com/in/hannah-m-riley/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
          <a href="https://github.com/hannahriley33" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
        </li>
      </ul>
        {/* josh */}
      <ul>
        <li>
          <img src="../assets/josh.jpeg"></img>
          <h3>Josh Ford</h3>
          <a href="https://www.linkedin.com/in/thisisjoshford/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
          <a href="https://github.com/thisisjoshford" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
        </li>  
      </ul>
    </div>
  )
}
export default About;
