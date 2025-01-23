import {createPortal} from 'react-dom';

function Portal()
{
    return(
        createPortal(<p>kevin</p>,document.body)
    );
}
function HelloWorldd()
{
    return<h2 id='hello'>hello world</h2>
}

export default function MainPortal()
{
    return(
        <>
        <HelloWorldd/>
        <h1>hajhedkjqwek</h1>
        <Portal /></>
    )
}