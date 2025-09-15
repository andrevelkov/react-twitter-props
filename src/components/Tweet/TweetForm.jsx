import { useState } from 'react'

export default function TweetForm({ loggedInUser, addTweet }) {

    const [createTweetContent, setCreateTweetContent] = useState('')

    return (
        <div className="create-tweet">
            <form onSubmit={(e) => addTweet(e, createTweetContent)}>
                <div className="avatar-section">
                    <div className="profile-icon">
                        <img src={loggedInUser.profileImage} />
                    </div>
                </div>

                <div className="textarea-section">
                    <textarea
                        className="content"
                        type="text"
                        placeholder="What is happening?!"
                        value={createTweetContent}
                        onChange={(e) => setCreateTweetContent(e.target.value)}
                    ></textarea>
                </div>

                <div></div>

                <div className="actions-section">
                    <div className="actions">
                        <i className="fa-regular fa-image action-icon"></i>
                        <i className="fa-solid fa-list action-icon"></i>
                        <i className="fa-regular fa-face-smile action-icon"></i>
                        <i className="fa-regular fa-calendar action-icon"></i>
                        <i className="fa-solid fa-location-dot action-icon"></i>
                    </div>

                    <button
                        type="submit"
                        disabled={createTweetContent.length < 1}
                        className="tweet-btn"
                    >
                        Tweet
                    </button>
                </div>
            </form>
        </div>
    )
}