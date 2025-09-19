import React from "react";
import starEmpty from "../assets/star-empty.png"
import starFilled from "../assets/star-filled.png"
import avatar from "../assets/user.png"
import Star from "./Star";

export default function ComplexObject() {
    const [contact, setContact] = React.useState({
        firstName: "Duc Trung",
        lastName: "Bui",
        phone: "+84 966 674 287",
        email: "buiductrung.cva@gmail.com",
        isFavorite: false
    })

    let starIcon = contact.isFavorite ? starFilled : starEmpty

    function toggleFavorite() {
        console.log("Toggle Favorite")
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }

    return (
        <div className="object-container">
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    {/* <button
                        onClick={toggleFavorite}
                        aria-pressed={contact.isFavorite}
                        aria-label={contact.isFavorite ? "Remove from favorites" : "Add to favorites"}
                        className="favorite-button"
                    >
                        <img
                            src={starIcon}
                            alt={contact.isFavorite ? "Filled star icon" : "Empty star icon"}
                            className="favorite"
                        />
                    </button> */}
                    <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </div>
    )
}