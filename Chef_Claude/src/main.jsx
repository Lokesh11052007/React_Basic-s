import React, { useEffect } from "react";
// import ClaudeRecipe from "./components/ClaudeRecipe";
import IngredientsList from "./components/IngredientsList";

// import { getRecipeFromMistral} from "./ai"
import  SampleComponent  from "./components/sample";
export default function Main() {
    const [ingredient, setIngredient] = React.useState([1,2,3,4,5]);

    const [recipe, setRecipe] = React.useState("");

    const recipeSelection = React.useRef(null);

    console.log(recipeSelection)
    // async function getRecipe(){
    //     const recipeMarkdown = await getRecipeFromMistral(ingredient)
    //     setRecipe(recipeMarkdown)

    // }

    function getRecipe(){
        setRecipe(SampleComponent)
    }

    function addIngredient(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("Ingredient")
        
        setIngredient(prevIngredient => [...prevIngredient, newIngredient])
    }

    useEffect(() => {
        if (recipeSelection.current) {
            recipeSelection.current.scrollIntoView({ behavior: "smooth" });
        }
    },[recipe])
    

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
               ref = {recipeSelection}
            />
            }

            {recipe && <SampleComponent />}

        </main>
    )
}