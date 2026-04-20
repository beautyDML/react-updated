import { useState,useEffect } from "react"

function Infinite(){

    const [click,setclick]=useState(0);


    const toggle=()=>{
        setclick((prev)=>prev+1)
    }
    const reset=()=>{
        setclick(0);
    }
   
    useEffect(()=>{
        setclick(click+1);
    },[click])
    

    return(
        <>
        <h2>Task3: Infinite loop </h2>
        <button onClick={toggle}>Click {click} </button> <hr />
        <button onClick={reset}>Reset button click</button>
        </>
    );
}

export default Infinite;