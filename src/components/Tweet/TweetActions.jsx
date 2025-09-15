
export default function TweetActions({ tweet }) {

    return(
        <div className="tweet-actions">
            <span>
                <i className="fa-regular fa-comment"></i>
                <small>{tweet.commentCount}</small>
            </span>

            <span>
                <i className="fa-solid fa-arrows-rotate"></i>
                <small>{tweet.retweetCount}</small>
            </span>

            <span>
                <i className="fa-regular fa-heart"></i>
                <small>{tweet.heartCount}</small>
            </span>

            <span>
                <i className="fa-solid fa-chart-simple"></i>
                <small>{tweet.analyticsCount}</small>
            </span>

            <span>
                <i className="fa-solid fa-upload"></i>
            </span>
        </div>
    )
}