import React from 'react'
import Navbar from '../partials/navbar/Navbar'

import { FacebookOutlined, Instagram, Twitter } from '@mui/icons-material'

import './waitlist.scss'

const Waitlist = () => {
  return (
    <div className='waitlist'>
        <Navbar/>
        <div className="waitlistContainer">
                    <div className="union-icon">
                        <img src="https://krayonstore.s3.amazonaws.com/assets/Union.png" alt="" />
                    </div>
            <div className="waitlist-content">
                <div className="content-left">
                    <div className="top-text">
                        Where<br/><span className='content-bold'>Creators</span><br/>become<br/><span className='content-bold'>Entrepreneurs</span>
                    </div>
                    <div className="middle-text">
                        Krayon is a workspace that helps creators keep track of their cash flow, manage clients, and projects seamlessly.
                    </div>
                    <div className="bottom-waitlist">
                        <div className="formInput">
                            <input className='waitlist-input' type="email" name="email" id="email" placeholder=' ' autoComplete='off'/>
                            <label className='waitlist-label' htmlFor="email">Enter email address</label>
                        </div>
                        <div className="waitlist-button">
                            <button>Join the waitlist</button>
                        </div>
                    </div>

                    <div className="social-links">
                        <div className="facebook-icon"><div className="hold-icon"><FacebookOutlined/></div></div>
                        <div className="instagram-icon"><div className="hold-icon"><Instagram/></div></div>
                        <div className="twitter-icon"><div className="hold-icon"><Twitter/></div></div>
                    </div>
                </div>
                <div className="content-right">
                    <div className="content-right-container">
                        <div className="first-writing">Voice-over Artists</div>
                        <div className="second-writing">Writers & Podcasters</div>
                        <div className="third-writing">Influencers</div>
                        <div className="fourth-writing">YouTubers</div>
                        <div className="top-border"></div>
                        <div className="top-image">
                            <img src="https://krayonstore.s3.amazonaws.com/assets/jU6Fwi0obarZKwa4uW6eAlZiLRLBIU6GWfeS02yREnxfNiCneJnr5ucOffKhG2hAh9Zo5Nf8hRFYvi20t5MD_EHNhHe23AY3vjs_BMQttgBQOvOqqifW1SjGfJ4r6YUPZg6k25RigFW3uVvse5t2qtrVaIbrTkk%2B1e4pJSU3Tg4yZCMPZACMf3TU1zt9aIhgMC6XfBgkMAYbqHN6_JPDdV+1.png" alt="" />
                        </div>
                        <div className="bottom-border"></div>
                        <div className="bottom-image">
                            <img src="https://krayonstore.s3.amazonaws.com/assets/pexels-ron-lach-8154662+1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Waitlist