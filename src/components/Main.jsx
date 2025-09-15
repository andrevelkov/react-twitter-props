import { useState } from 'react'

// The initial tweet objects that should be displayed
import initialTweets from '../assets/data/tweets.js'
import Tweet from './Tweet/Tweet.jsx'
import TweetForm from './Tweet/TweetForm.jsx'

export default function Main({ loggedInUser, searchInput }) {

    const [tweets, setTweets] = useState(initialTweets)

    const addTweet = (e, createTweetContent) => {
        e.preventDefault()
        setTweets([
            {
                ...loggedInUser,
                date: '1m',
                content: createTweetContent,
                commentCount: 0,
                retweetCount: 0,
                heartCount: 0,
                analyticsCount: 0
            },
            ...tweets
        ])
    }

    const filteredTweets = tweets.filter(tweet =>
        tweet.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        tweet.handle.toLowerCase().includes(searchInput.toLowerCase()) ||
        tweet.content.toLowerCase().includes(searchInput.toLowerCase())
    )

    return (
        <main>
            <div className="top-bar">
                <h2 className="title">Home</h2>
            </div>

            <TweetForm loggedInUser={loggedInUser} addTweet={addTweet} />

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {filteredTweets.map((tweet, index) => {
                return (
                    <Tweet tweet={tweet} index={index} />
                )
            })}

        </main>
    );
}
