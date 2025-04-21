import {useState, useEffect} from 'react';
import '../node_modules/normalize.css/normalize.css';
import Description from './components/Description.jsx';
import Feedback from './components/Feedback.jsx';
import Options from './components/Options.jsx';
import Notification from "./components/Notification.jsx";

function App() {
    const [feedback, setFeedback] = useState(() => {
        const savedFeedback = localStorage.getItem('feedback');
        return savedFeedback ? JSON.parse(savedFeedback) : {good: 0, neutral: 0, bad: 0};
    });

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFeedback = totalFeedback ? Math.round((feedback.good / totalFeedback) * 100) : 0;

    const updateFeedback = (feedbackType) => {
        if (feedbackType === 'reset') {
            setFeedback({good: 0, neutral: 0, bad: 0});
        } else {
            setFeedback((prevFeedback) => ({
                ...prevFeedback,
                [feedbackType]: prevFeedback[feedbackType] + 1,
            }));
        }
    };

    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback));
    }, [feedback]);

    return (
        <>
            <Description/>
            <Options updateFeedback={updateFeedback}/>
            {totalFeedback ? (
                <Feedback
                    good={feedback.good}
                    neutral={feedback.neutral}
                    bad={feedback.bad}
                    totalFeedback={totalFeedback}
                    positiveFeedback={positiveFeedback}
                />
            ) : (
                <Notification/>
            )}
        </>
    );
}

export default App;