import './forms.css'

export default function Login() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="styles/style2.css" />
  <title>Login Page</title>
  <h1>Login </h1>
  <form action="" name="Login">
    <div className="form">
      <label htmlFor="username">Username</label>
      <br />
      <input type="text" name="username" id="username" placeholder="Username or Email"/>
      <div id="unameDiv" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" placeholder="Password" />
      <div id="passDiv" />
      <input type="submit" name="submit" defaultValue="Login" />
    </div>
  </form>
  <hr />
  <div className="loginfooter">
    Not Signed Up,<a href="registration.html">Sign Up</a>
  </div>
</>

  )
}
