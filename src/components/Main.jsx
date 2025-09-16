import ReactDOM from "react-dom/client"
import React from "react"

export default function Main() {
    const ingredients = ["Cheese", "Tomato", "Basil"];
    const ingredientsListItems = ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
    ));
    const [listItems, setListItems] = React.useState(ingredientsListItems);

    function updateIngredients() {
        return ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("form submitted")
        const formData = new FormData(event.target);
        const newIngredient = formData.get("ingredient");
        console.log(newIngredient);
        ingredients.push(newIngredient);
        console.log(ingredients);
        setListItems(updateIngredients());
    }
    
    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form" >
                <input 
                        id="ingredient-input"
                        type="text" 
                        placeholder="e.g oregano" 
                        aria-label="Add ingredient"
                        name="ingredient"/>
                <button type="submit">
                        + Add ingredient
                </button>
            </form>

            <ul className="ingredient-list">
                {/* {ingredientsListItems} */}
                {listItems}
            </ul>
        </main>
    )
}