import React from 'react'
import './Card.css'
import pic from '../pic.jpeg'
import mail from '../mail.png'
import facebook from '../facebook.png'
import insta from '../instagram.png'
import git from '../github.png'
import tweet from '../twitter.png'



function Card() {
  return (
    <div className='main-div'>
        <div className='sub-div'>
            <img className='img' src={pic} alt='img'></img>
            <h1>Anish Parkhi</h1>
            <h3>Frontend Developer</h3>
            <h4 className='email'>anishparkhi03@gmail.com</h4>
            <button className='btn1'>
                {/* <img className='mail' src={mail} alt='img'></img> */}
                Email
            </button>
            <button className='btn2'>
                LinkdIn
            </button>
            <div className='about'>
                <h3>About</h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
            <div className='about'>
                <h3>Interests</h3>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
            <div className='footer'>
                {/* <h1>Hlo</h1> */}
                <img className='logos' src={facebook} alt='img'></img>
                <img className='logos' src={insta} alt='img'></img>
                <img className='logos' src={git} alt='img'></img>
                <img className='logos' src={tweet} alt='img'></img>
            </div>
        </div>
    </div>
  )
}

export default Card