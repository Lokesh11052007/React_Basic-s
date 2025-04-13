import { useState } from 'react'

import img from  '../assets/download.png'

export default function Article() {

    const [meme, setMeme] = useState({
        topText:"One does not simply",
        bottomText: "walk into mordor",
        imgURL: img
    })

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input 
                    type="text"
                    placeholder="One does not simply"
                    name="topText"
                    />
                </label>

                <label >Bottom Text
                    <input 
                    type="text"
                    placeholder="Walk into moran"
                    name="bottomText" />
                </label>
                <button>Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={meme.imgURL} alt="memo" />
                <span className='top'>{meme.topText} </span>
                <span className='bottom'>{meme.bottomText} </span>
            </div>
        </main>
    )
}