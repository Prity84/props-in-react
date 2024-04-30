import React , {useState} from 'react'
import './App.css'

const  Grandchild = props =>{
  return(
    <>
    <h3>Grandchild</h3>
     <Child brand ={props.brand}/>
    </>
  )
}

const Child = props =>{
  return(
    <>
    <h2>Child : {props.brand}</h2>
    </>
  )
}

const App = ()=>{
  const [brandname] = useState("Amazon");
  return(
    <>
    <h1>Hello</h1>
    <Grandchild brand ={brandname}/>
    </>
  )
}

export default App;


//We pass props each and every level to change the value but if we have a big project then the manged would be difficult to tackle this we need to solve this problem so that we would not right much code at each and every level. so now createcontext came in the picture.