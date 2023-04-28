import { useState, useMemo } from 'react';

import {
  FeedbackOptions,
  Container,
  Statistics,
  Section,
  Notification,
} from 'components';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = { good, neutral, bad };

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        console.log('error in switch option name ');
    }
  };

  const total = useMemo(() => {
    const countTotalFeedback = () => {
      return good + neutral + bad;
    };
    return countTotalFeedback(good + neutral + bad);
  }, [good, neutral, bad]);

  const positivePersantage = useMemo(() => {
    const countPositiveFeedbackPercentage = () => {
      const total = good + neutral + bad;
      if (total === 0) {
        return 0;
      }
      return Math.round((good * 100) / total);
    };
    return countPositiveFeedbackPercentage();
  }, [good, neutral, bad]);

  return (
    <Container>
      <Section title="Please, leave your feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePersantage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
}
