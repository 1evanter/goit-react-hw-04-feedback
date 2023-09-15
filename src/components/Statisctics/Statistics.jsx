import {List} from './Statistics.styled'

export const Statisctics = ({ good, neutral, bad, totalFeedback, positivePercentage }) => {
    return (
        <List>
            {/* {  options.map(option => 
                <li key={option}>{option}: {currentState[option]}</li>
            )} */}

            <li>Good: { good }</li>
            <li>Neutral: { neutral}</li>
            <li>Bad: { bad}</li>

            <li>
            <p> Total feedback: {totalFeedback}</p> 
            </li>
            <li>
             <p>Positive feedback: { positivePercentage > 0 ? (<span>{positivePercentage}%</span>) : (<span style={{
              color: "red",
      }}>there's no positive feedback</span>) } </p> 
            </li>
        </List>
    )
}