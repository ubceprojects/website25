import "./style.css";

const GoalCard = ({ number, heading, content }) => {
    return (
        <div className="goal-card">
            <div className="goal-number">{number}.</div>
            <div className="goal-heading">{heading}</div>
            <div className="goal-content">{content}</div>
        </div>
    );
};

export default GoalCard;
