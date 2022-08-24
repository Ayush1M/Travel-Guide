import Navbar from "./components/Navbar";
import Main from "./components/Main";
import data from "./data";

export default function App() {
  const info = data.map(item =>{
    return(
      <Main
        key = {item.id}
        title = {item.title}
        location = {item.location}
        googleMapsUrl = {item.googleMapsUrl}
        startDate = {item.startDate}
        endDate = {item.endDate}
        description = {item.description}
        img = {item.img}
      />
    )
  })
  
return (
<div>
  <Navbar />
  <section className="">{info}</section>   
</div>
 )
}

