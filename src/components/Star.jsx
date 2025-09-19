import starEmpty from "../assets/star-empty.png"
import starFilled from "../assets/star-filled.png"

export default function Star(props) {
    let starIcon = props.isFilled ? starFilled : starEmpty

    return (
        <button
            onClick={props.handleClick}
            aria-pressed={props.isFilled}
            aria-label={props.isFilled ? "Remove from favorites" : "Add to favorites"}
            className="favorite-button">
            <img
                src={starIcon}
                alt={props.isFilled ? "Filled star icon" : "Empty star icon"}
                className="favorite"
            />
        </button>
    )
}