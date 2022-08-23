import Navbar from "./components/Navbar";
import Main from "./components/Main";
import data from "./data"

export default function App() {
  const info = data.map(item =>{
    return(
      <Main
        key = {item.id}
        item = {item}
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

