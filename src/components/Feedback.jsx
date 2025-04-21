const Feedback = ({good, neutral, bad, totalFeedback, positiveFeedback}) => {


    return (
        <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {totalFeedback}</li>
            <li>Positive feedback: {positiveFeedback}%</li>
        </ul>
    )
}

export default Feedback