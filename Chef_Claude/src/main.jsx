import React from "react";
import ClaudeRecipe from "./components/ClaudeRecipe";
import IngredientsList from "./components/IngredientsList";

import { getRecipeFromMistral} from "./ai"

export default function Main() {
    const [ingredient, setIngredient] = React.useState([
        "all the main spices", "pasta", "ground beef", "tomato paste"
    ]);
    const [recipeShown, setRecipeShown] = React.useState(false)

    async function getRecipe(){
        const recipeMarkdown = await getRecipeFromMistral(ingredient)
       console.log(recipeMarkdown)

    }

    function addIngredient(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("Ingredient")
        
        setIngredient(prevIngredient => [...prevIngredient, newIngredient])
    }

    

    return (
        <main>
            <form onSubmit={addIngredient}  className="add-ingredient-form">
                <input 
                  type="text"
                  placeholder="e.g: oregano"
                  aria-label="Add Ingredient"
                  name="Ingredient"
                  />
                <button>Add Ingredient</button>
            </form>
            {ingredient.length > 0 && <IngredientsList 
               toggleButton={getRecipe}
               ingredient={ingredient}

            />
            }

            {recipeShown && <ClaudeRecipe />}

        </main>
    )
}