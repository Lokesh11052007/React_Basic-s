export default function entry() {
    return (
        <article className="journal-entry">
            <div className= "main-image-container">
                <img className="main-image" 
                src="../public/assets/pubg.jpg"
                alt="pubg"
                />
            </div>
            <div className="entry-container">
                <div>
                    <img src="../public/assets/andriod.png"
                        alt="android" 
                        width="20px"
                        />
                    <span>android</span>
                </div>
                <a href="https://pubg.com/en/main">Download Now</a>
                <h2 className="entry-title">PUBG</h2>
                <h4>24 Sep 2018 - Current</h4>
                <p>BATTLEGROUNDS is a battle royale that pits 100 players against each other.
                Outplay your opponents to become the lone survivor. Play free now!</p>
            </div>
        </article>
    )
}