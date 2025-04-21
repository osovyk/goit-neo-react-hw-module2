const Options = ({updateFeedback}) => {
    return (
        <>
            <button className="feedback-button" onClick={() => updateFeedback('good')}>Good</button>
            <button className="feedback-button" onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button className="feedback-button" onClick={() => updateFeedback('bad')}>Bad</button>
            <button className="feedback-button" onClick={() => updateFeedback('reset')}>Reset</button>
        </>
    )
}

export default Options