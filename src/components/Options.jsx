const Options = ({updateFeedback, totalFeedback}) => {
    const feedbackOptions = ['good', 'neutral', 'bad'];

    return (
        <>
            {feedbackOptions.map(option => (
                <button
                    key={option}
                    className="feedback-button"
                    onClick={() => updateFeedback(option)}
                >{option.charAt(0).toUpperCase() + option.slice(1)}</button>
            ))}
            {totalFeedback > 0 && (
                <button
                    className="feedback-button"
                    onClick={() => updateFeedback('reset')}
                >Reset</button>
            )}
        </>
    );
};

export default Options;
