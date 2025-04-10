import Header from "./components/header";
import Entry from "./components/entry";

import entryData from "../public/resources/entryData";
export default function App() {
  const list =  entryData.map((data) => {
    return (
      <Entry 
          key={data.id}
          img={data.img}
          imgName={data.imgName}
          url={data.url}
          name={data.name}
          year={data.year}
          story={data.story}
          />
    )
  })
  return(
    <div id="content">
      <Header/>
      <>
      {list}
      </>
    </div>
      
    
  )
}