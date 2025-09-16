import ReactDOM from "react-dom/client"
import React from "react"

export default function Main() {
    const [ingredients, setIngredients] = React.useState(["Cheese", "Tomato", "Basil"]);
    const ingredientsListItems = ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
    ));


    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newIngredient = formData.get("ingredient");
        setIngredients(
            prevIngredients => [
                ...prevIngredients,
                newIngredient   
            ]
        );
        document.getElementById("ingredient-input").value = "";
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
                {ingredientsListItems}
            </ul>
        </main>
    )
}