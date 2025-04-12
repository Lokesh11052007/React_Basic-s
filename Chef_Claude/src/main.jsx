import React from "react";
import ClaudeRecipe from "./components/ClaudeRecipe";
import IngredientsList from "./components/IngredientsList";

export default function Main() {
    const [ingredient, setIngredient] = React.useState([]);

    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("Ingredient")
        
        setIngredient(prevIngredient => [...prevIngredient, newIngredient])
    }

    const [showRecipe, setShowRecipe] = React.useState(false)

    function toggleButton(){
            setShowRecipe(prevShow => !prevShow)
    }

    return (
        <main>
            <form onSubmit={handleSubmit}  className="add-ingredient-form">
                <input 
                  type="text"
                  placeholder="e.g: oregano"
                  aria-label="Add Ingredient"
                  name="Ingredient"
                  />
                <button>Add Ingredient</button>
            </form>
            {ingredient.length > 0 && <IngredientsList 
               toggleButton={toggleButton}
               ingredient={ingredient}

            />
            }

            {showRecipe && <ClaudeRecipe />}

        </main>
    )
}