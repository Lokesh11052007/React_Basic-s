import img from '../assets/meme.png'

export default function Header(){
    return(
        <header>
            <img src={img} alt="meme" />
            <h1>Meme Generator</h1>
        </header>
    )
}