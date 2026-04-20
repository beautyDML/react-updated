import { useState,useEffect } from "react"

export default function Button(){

    const [click,setclick]=useState(0);


    const toggle=()=>{
        setclick((prev)=>prev+1)
    }
    const reset=()=>{
        setclick(0);
    }
    useEffect(()=>{
        console.log(`button clicked ${click}`);
    // },[click])//whenever button will be clicked this will print if once want then use empty dependency.
    },[click])
    

    return(
        <>
        <h2>Show running state(run once): </h2>
        <button onClick={toggle}>Click {click} </button> <hr />
        <button onClick={reset}>Reset button click</button>
        </>
    );
}