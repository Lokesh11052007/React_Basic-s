export default function IngredientsList(props){
    const mapping = props.ingredient.map(item => (
        <li key={item}> {item} </li>
    ))
    return (
        <section> 
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{mapping}</ul>
                {props.ingredient.length > 3 && <div  className="get-recipe-container">
                    <div ref={props.ref}>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredient.</p>
                    </div>
                    <button onClick={props.toggleButton} >Get a recipe</button>
                </div>}
            </section>
    )
}