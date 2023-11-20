import React from 'react'
import './NewsLetter.css'
export default function NewsLetter() {
  return (
    <div className='newsletter'>
      <h1>Get Excusive Offers On Your Email</h1>
      <p>Subscribe to our Newsletter and stay Updated</p>
      <div>
        <input type='email' placeholder='Your Email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}
