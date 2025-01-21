// 4. Create a component WelcomeMessage that takes a user prop.
// If the user prop is provided, display a message "Welcome, {user}!". If not, display "Welcome, guest!".

function WelcomeMessage({user='Guest'})
{
    return(
        <h2>Welcome, {user}</h2>
    )
}

export default function Welcome()
{
    return(
        <>
        <WelcomeMessage user="Sreekuttan" />
        <WelcomeMessage />
        </>
    )
}