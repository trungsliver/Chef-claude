import React from "react";

export default function ComplexArray() {
    const [myFav, setMyFav] = React.useState(["pizza"]);
    const allFav = ["dog", "cat", "roses", "PC", "ice-cream", "chocolate"];
    const thingsElement = myFav.map(thing => <p key={thing}>{thing}</p>)

    function addFavThing(){
        setMyFav(
            prevFav => [
                ...prevFav, 
                allFav[prevFav.length]]
        );
    }

    return (
        <div className="counter-container">
            <button className="addThing" onClick={addFavThing}>Add item</button>
            <section className="things-container" aria-live = "polite">
                {thingsElement}
            </section>
        </div>
    )
}