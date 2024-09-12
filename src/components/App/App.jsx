import css from './App.module.css';

import Description from '../Description/Description.jsx';
import Feedback from '../Feedback/Feedback.jsx';
import Options from '../Options/Options.jsx';
import Notification from '../Notification/Notification.jsx';

import { useEffect, useState } from 'react';

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    let feedback = JSON.parse(localStorage.getItem('feedback'));
    if (!feedback) {
      feedback = {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }

    return feedback;
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const updateFeedback = feedbackType => {
    if (feedbackType == 'reset') {
      setFeedback({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    } else {
      setFeedback({
        ...feedback,
        [feedbackType]: feedback[feedbackType] + 1,
      });
    }
  };

  return (
    <div className={css.container}>
      <Description />
      <Feedback updater={updateFeedback} total={totalFeedback} />
      {totalFeedback ? (
        <Options
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
