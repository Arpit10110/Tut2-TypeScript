import Box from "./components/Box"
//style
import "./style/style.css"
const App = () => {
  let count :number = 657;
  return (
  <>
  <h1>
    <Box heading={"This is a Tut2"} c={count}  fun={()=>{
      alert("This is a Tut2")
    }}  />
  </h1>
  </>
  )
}

export default App
