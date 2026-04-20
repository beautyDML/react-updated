//it stop those thing which react has started 
//use when: unmount,dependency changes and 

//cleanup: remove sideeffect before next run and unmount..means: if we have added some extra side work in useEFfect so react will ensure that old effect should be stop before running new

import { useState,useEffect } from "react"

export default function Cleanup(){

    const [count,setcount]=useState(0);

    const handlecount=()=>{
        setcount((prev)=>prev+1);
    }

    useEffect(()=>{
        console.log("started");


        //create innterval:  
        const Interval=setInterval(() => {
            console.log("RUNNING..")
        }, 1000); 


        return()=>{
            console.log("cleanup done")
            clearInterval(Interval)
        }
    },[count])

    return(
        <button onClick={handlecount}>Click </button>
    )
}

// Next effect run hone se pehle, previous effect ka cleanup hota hai
//ab dependency change hoti hai, React pehle previous effect ka cleanup run karta hai, phir naya effect run karta hai — taaki duplicate side effects na bane.

//render-cleanup(old)-effect(new)
//with empty dependency array,cleanup runs only on unmount because effect runs only once


