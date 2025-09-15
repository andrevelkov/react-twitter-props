import TweetActions from "./TweetActions";

export default function Tweet({ tweet, index }) {

    return (
        <article className="tweet" key={index}>
            <div className="profile-icon">
                <img src={tweet.profileImage} />
            </div>

            <div className="tweet-content">
                <h4>
                    {tweet.name}{" "}
                    <span>
                        {tweet.handle} · {tweet.date}
                    </span>
                </h4>
                <p>{tweet.content}</p>

                {tweet.article && (
                    <div className="tweet-article">
                        <img src={tweet.article.image} />
                        <small>{tweet.article.site}</small>
                        <h5>{tweet.article.title}</h5>
                        <p>{tweet.article.content}</p>
                    </div>
                )}

                <TweetActions tweet={tweet} />

            </div>
        </article>
    );
}