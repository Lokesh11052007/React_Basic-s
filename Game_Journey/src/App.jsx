import Header from "./components/header";
import Entry from "./components/entry";

import entryData from "../public/resources/entryData";
export default function App() {
  const list =  entryData.map((data) => {
    return (
      <Entry 
          key={data.id}
          // img={data.img}
          // imgName={data.imgName}
          // url={data.url}
          // name={data.name}
          // year={data.year}
          // story={data.story}
           {...data}             // ----> this syntax do exactly like above line 10 - 15 , for this lhs & rhs should define same name
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