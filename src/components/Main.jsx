import ReactDOM from "react-dom/client"

export default function Main() {
    function handleClick(event) {
        event.preventDefault();
        console.log("button clicked 123");
    }

    function handleMouseOver() {
        console.log("mouse over")
    }
    
    return (
        <main>
            <form className="add-ingredient-form">
                <input 
                        type="text" 
                        placeholder="e.g oregano" 
                        aria-label="Add ingredient"/>
                <button 
                    type="button"
                    onClick={handleClick}
                    onMouseOver={handleMouseOver}>
                        + Add ingredient
                </button>
            </form>
        </main>
    )
}