import img from '../assets/download.png'

export default function Article() {

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
                <img src={img} alt="memo" />
                <span className='top'>One does not simply</span>
                <span className='bottom'>walk into mordor</span>
            </div>
        </main>
    )
}