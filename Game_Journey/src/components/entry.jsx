export default function entry(props) {
    return (
        <article className="journal-entry">
            <div className= "main-image-container">
                <img className="main-image" 
                src={props.img} 
                alt={props.imgName}
                />
            </div>
            <div className="entry-container">
                <div>
                    <img src="/assets/andriod.png"
                        alt="android" 
                        />
                    <span>android</span>
                </div>
                <a href={props.url}>Download Now</a>
                <h2 className="entry-title">{props.name}</h2>
                <h4>{props.year}</h4>
                <p>{props.story}</p>
            </div>
        </article>
    )
}