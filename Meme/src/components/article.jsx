import { useState } from 'react'

import img from  '../assets/download.png'

export default function Article() {

    const [meme, setMeme] = useState({
        topText:"One does not simply",
        bottomText: "walk into mordor",
        imgURL: img
    })

    function handleChange(event) {                  // this function taken place in two label 
        const {value, name} = event.currentTarget;  //capturing the value currently changing and fetching its field by name
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]:value                            // value is assigning corresponds to its name, and it act as attribute for setMeme  `` [name:topText || name:bottomText]:value ``
        }))                                         // setMeme has attributes there are "topText" and "bottomText" and "imgURL"
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input 
                    type="text"
                    placeholder="One does not simply"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                    />
                </label>

                <label >Bottom Text
                    <input 
                    type="text"
                    placeholder="Walk into moran"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                    />
                </label>
                <button >Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={meme.imgURL} alt="memo" />
                <span className='top'>{meme.topText} </span>
                <span className='bottom'>{meme.bottomText} </span>
            </div>
        </main>
    )
}