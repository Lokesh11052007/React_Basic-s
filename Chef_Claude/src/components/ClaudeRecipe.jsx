import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


export default function ClaudeRecipe(props){
    const markDown =props.recipe
    return(
        <section className='suggested-recipe-container'>
            <h1>Chef Claude Recommendation: </h1>
         <Markdown remarkPlugins={[[remarkGfm, {singleTilde: false}]] }>{markDown}</Markdown>
        </section>
    )
}