// 3. Create a simple form with an input field and a submit button.
//  The form should display the text entered in the input when the submit button is clicked.

import { useState } from "react";

function Form()
{
    const [name,setName]=useState();
    const [userName,setUsername]=useState('user');
    const getInput= (event)=> setName(event.target.value);

    function setname(event){
    event.preventDefault();
    console.log(name);
    setUsername(name);
    }
    return(
        <div>
            <form onSubmit={setname}>

                <input type="text" placeholder="enter your name" name="name" onChange={getInput}/>
                <input type="submit" />
            </form>
            <p>Hello, {userName}</p>
        </div>
    );
}



export default function Main()
{
    return(
        <div>
        <Form />
        
        </div>
    );
}