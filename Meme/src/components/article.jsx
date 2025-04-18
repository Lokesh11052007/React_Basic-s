import { useState , useEffect} from 'react'

import img from  '../assets/download.png'

export default function Article() {

    // this is a state for meme image and text  
    const [meme, setMeme] = useState({
        topText:"One does not simply",
        bottomText: "walk into mordor",
        imgURL: img
    });

    //to generate random meme image we need to fetch data from api
    // so we will use useEffect to fetch data from api and store it in state
    const [ allMeme, setAllMeme ] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
         .then(res => res.json())
         .then(data => setAllMeme(data.data.memes))
    }, [])


    // to change the text in input field we need to use onChange event and set the state of meme
    // so we will create a function to handle the change in input field
    function handleChange(event) {                  // this function taken place in two label 
        const {value, name} = event.currentTarget;  //capturing the value currently changing and fetching its field by name
        setMeme(prevMeme => ({
            ...prevMeme,                            // name means here fetching from input field's name 
            [name]:value                            // value is assigning corresponds to its name, and it act as attribute for setMeme  `` [name:topText || name:bottomText]:value ``
        }))                                         // setMeme has attributes there are "topText" and "bottomText" and "imgURL"
    }

    // to get a random meme image we will create a function that will generate a random number and use it to get a random meme image from the array of memes
    // so we will create a function to get a random meme image
    function getMemeImage(){
        const getRandomNumber = Math.floor(Math.random() * allMeme.length);
        const newMemeUrl  = allMeme[getRandomNumber].url;
        const newMemeName = allMeme[getRandomNumber].name;
        setMeme(prevMeme => ({
            ...prevMeme,
            imgURL: newMemeUrl,
            topText: newMemeName,
            bottomText: ""
        }))
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
                    placeholder={meme.bottomText}
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                    />
                </label>
                <button onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={meme.imgURL} alt="memo" />
                <span className='top'>{meme.topText} </span>
                <span className='bottom'>{meme.bottomText} </span>
            </div>
        </main>
    )
}