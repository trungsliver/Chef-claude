import ReactDOM from "react-dom/client"
import React from "react"

export default function Main() {
    // const [ingredients, setIngredients] = React.useState(
    //     [   
    //         "Chicken Breasts",
    //         "Most of the main spices",
    //         "Olive oil",
    //         "Heavy cream",
    //         "Chicken broth",
    //         "Parmesan cheese",
    //         "Spinach"
    //     ]);
    const [ingredients, setIngredients] = React.useState([]);
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

    function addIngredients(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients(
            prevIngredients => [
                ...prevIngredients,
                newIngredient   
            ]
        );
    }
    
    return (
        <main>
            <form 
            // onSubmit={handleSubmit} 
            action={addIngredients}
            className="add-ingredient-form" >
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

            {ingredients.length > 0 && <section id="ingredients-section">
                <h2>Ingredients on hand:</h2>
                <ul className="ingredient-list" aria-live="polite">
                    {ingredientsListItems}
                </ul>
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section>}
            
        </main>
    )
}