import React from 'react'
import { FaFacebook, FaGit, FaGitSquare, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
            <div>
                <p>Cairo. Egypt</p>
            </div>
          </div>
          <div className="phone">
            <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>01111535238</h4>
          </div>
          <div className="email">
            <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>hossamshapan88@gmail.com</h4>
          </div>
        </div>
        <div className="right">
            <h4>About my self</h4>
            <p>I enjoy discussing new projects and design challenges</p>
            <div className="social">
            <Link to="https://www.linkedin.com/in/hossamshaaban/"><FaLinkedin size={35} style={{color:"#fff",marginRight:"3rem"}}/></Link>
            <Link to={"https://github.com/ELWAZEIR"}><FaGitSquare size={35} style={{color:"#fff",marginRight:"3rem"}}/></Link>
            <FaFacebook  size={35} style={{color:"#fff",marginRight:"3rem"}}/>
            </div>
        </div>
      </div>
    </div>
  )
}
