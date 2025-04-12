import React from "react";
import ClaudeRecipe from "./components/ClaudeRecipe";
import IngredientsList from "./components/IngredientsList";

import { getRecipeFromMistral} from "./ai"

export default function Main() {
    const [ingredient, setIngredient] = React.useState([]);
    const [recipe, setRecipe] = React.useState("")

    async function getRecipe(){
        const recipeMarkdown = await getRecipeFromMistral(ingredient)
        setRecipe(recipeMarkdown)

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
                  placeholder="e.g: chicken"
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

            {recipe && <ClaudeRecipe recipe={recipe}/>}

        </main>
    )
}