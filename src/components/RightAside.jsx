
// You may need to move these when creating new components
import { useState } from 'react'
import imgElon from '../assets/images/elon.jpg'
import imgZuck from '../assets/images/zuck.jpg'
import FollowBlock from './FollowBlock'

export default function RightAside({ searchValue, onSearch}) {

    const handleOnChange = (e) => {
        e.preventDefault()
        const value = e.target.value
        console.log(value)
        onSearch(value)
        
    }

    return (
        <aside className='right-side'>

            <div className='search-section'>
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
                <input 
                    className="search" 
                    type="text" 
                    placeholder="Search Twitter"
                    value={searchValue}
                    onChange={handleOnChange}
                />
            </div>

            <div className='widget'>
                <div className="widget-grid">
                    <h1>Get Verified</h1>
                    <h3>Subscribe to unlock nothing.</h3>

                    <button className="verify-btn">Get Verified</button>
                </div>
            </div>

            <div className='widget'>
                <h1>What's happening</h1>

                <div className="news-block">
                    <div className="content">
                        <small>Entertainment · Trending</small>
                        <h4>Elon Musk</h4>
                        <small>14.5k Tweets</small>
                    </div>

                    <div className="action">
                        <i className="fa-solid fa-ellipsis"></i>
                    </div>
                </div>

                <div className="news-block">
                    <div className="content">
                        <small>Cage Fights · Trending</small>
                        <h4>Mark Zuckerberg</h4>
                        <small>59.1k Tweets</small>
                    </div>

                    <div className="action">
                        <i className="fa-solid fa-ellipsis"></i>
                    </div>
                </div>

            </div>

            <div className='widget'>
                <h1>Who to follow</h1>

                <FollowBlock 
                    nameHeader={"Elon Musk"} 
                    tagHeader={"@elonmusk"} 
                    img={imgElon}
                />

                <FollowBlock 
                    nameHeader={"Mark Zuckerberg"} 
                    tagHeader={"@markzuckerberg"} 
                    img={imgZuck}
                />

            </div>
        </aside>
    )
}