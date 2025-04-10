import Header from "./components/header";
import Entry from "./components/entry";
import pubg from "/assets/pubg.jpg";
import coc from "/assets/coc.jpg";
import subway from "/assets/subwaysurface.jpg";
export default function App() {
  return(
    <div id="content">
      <Header/>
      <div id="entry-content">
        <Entry
        img={pubg}
        imgName="PUBG"
        url="https://www.pubg.com/en/events/wwrdevent"
        name="PUBG"
        year= "23 March 2017"
        story="BATTLEGROUNDS is a battle royale that pits 100 players against each other. 
        Outplay your opponents to become the lone survivor. Play free now!"
      
      />
      <Entry
        img={coc}
        imgName="COC"
        url="https://store.supercell.com/clashofclans"
        name="coc"
        year= "2 August 2012"
        story="Clash of Clans is a 2012 free-to-play mobile strategy video game developed and published by Supercell.
        The game is set in a fantasy-themed persistent world where the player is the chief of a village."
      
      />
      <Entry
        img={subway}
        imgName="subway"
        url="https://poki.com/en/g/subway-surfers"
        name="SUBWAY SURFACE"
        year= "23 May 2012"
        story="Subway Surfers is a 2012 endless runner mobile game which is co-developed by Kiloo and SYBO Games, private companies based in Denmark. 
        It is available on iOS, Android, HarmonyOS, Amazon Fire Tablet, and Windows Phone platforms and uses the Unity game engine."
      
      />
    </div>
      </div>
      
    
  )
}