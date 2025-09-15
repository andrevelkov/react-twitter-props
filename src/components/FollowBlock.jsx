
export default function FollowBlock({ nameHeader, tagHeader, img }) {

    return (
        <div className="follow-block">
            <div className="icon"><img src={img} /></div>

            <div className="content">
                <h4>{nameHeader}</h4>
                <h5>{tagHeader}</h5>
            </div>

            <div className="action">
                <button className="follow-btn">Follow</button>
            </div>
        </div>
    )
}