interface propstype{
    heading :string,
    fun:()=>void,
    c:number
}
const Box = ({heading,fun,c}:propstype) => {
  return (
    <>
     <h1>{heading}</h1>
     <h2>Value of Count is {c}</h2>
     <button onClick={fun} >Click me</button>
    </>
  )
}

export default Box