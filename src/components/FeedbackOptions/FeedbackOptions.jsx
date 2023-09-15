import {List, Button} from './FeedbackOptions.styled'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <List>
            {options.map(option => {
                return (<li key={option}>
                <Button type="button" onClick={(e) => onLeaveFeedback(e.target.textContent)}>{option}</Button>
            </li>)        
        })}
        </List>
    )
}