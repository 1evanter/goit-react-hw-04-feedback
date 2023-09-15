import { useState } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statisctics } from "./Statisctics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import { GlobalStyle } from "./GlobalStyle";

export const App = () => {

const options = [ 'good', 'neutral', 'bad'];

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

   
       const handleClick = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      
      default:
        return;
    }
  };

    const countTotalFeedback = () => {
        return good + neutral + bad;
    }
           
const countPositiveFeedbackPercentage = () => {
    return Math.ceil((good / countTotalFeedback()) * 100);
}



 return (
            <div  style={{
                maxWidth: "250px",
                margin: "0 auto",
      }}>
                <Section title="Please leave feedback">

                    <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
                    
                </Section>

                <Section title="Statistics">

             {countTotalFeedback() > 0 ? <Statisctics
                 options={options}
                 good={good}
                 neutral={neutral}
                 bad={bad}
                 totalFeedback={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} /> : <Notification
                     message="There is no feedback"></Notification>}
            
                </Section>

                <GlobalStyle/>
            </div>
        )
}