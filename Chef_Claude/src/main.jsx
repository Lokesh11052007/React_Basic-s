import React from "react";

export default function Main() {
    const [ingredient, setIngredient] = React.useState([]);
    const mapping = ingredient.map(item => (
        <li key={item}> {item} </li>
    ))

    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("Ingredient")
        
        setIngredient(prevIngredient => [...prevIngredient, newIngredient])
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
            <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{mapping}</ul>
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredient.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section>
        </main>
    )
}