// 3. Create a simple form with an input field and a submit button.
//  The form should display the text entered in the input when the submit button is clicked.

import { useState } from "react";

function Form()
{
    const [name,setName]=useState('user');
    return(
        <div>
            <form>
                <input type="text" placeholder="enter your name" name="name" onChange={(event)=> setName(event.target.value)}/>
                <input type="submit" />
            </form>
            <p>Hello, {name}</p>
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