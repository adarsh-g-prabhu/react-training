import { createContext, Profiler, useRef, useState,useContext, createElement } from "react";

const myContext=createContext('don');
function HelloWorld()
{
    const value=useContext(myContext);
    return createElement("p", null, `hello ${value}`);
    
}

const hellorender=(id,phase,actualDuration,baseDuration,startTime,commitTime)=>{
    console.log(`Component ${id} rendered during ${phase} phase.`);
    console.log(`Actual render time: ${actualDuration}ms`);
    console.log(`Base render time (without children): ${baseDuration}ms`);
    console.log(`Start time: ${startTime}`);
    console.log(`Commit time: ${commitTime}`);
  
}
export default function Reference()
{
    const newRef=useRef(null);
    const [text,setText]=useState("");

    function handleSubmit(event)
    {
        event.preventDefault();
        newRef.current.focus();
        setText(newRef.current.value);
    }
    
 return(
    <><form onSubmit={handleSubmit}>
         <input type="text" ref={newRef} />
         <input type="submit" />
     </form>
     <myContext.Provider value="corleone">
        <HelloWorld/>
     </myContext.Provider>
     <p>{text}</p>
     <Profiler id='profiler1' onRender={hellorender}>
     <HelloWorld/>
     </Profiler>
     </>
 );   
}