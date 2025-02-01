import './forms.css'

export default function Registration() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="styles/style2.css" />
  <title>Registration</title>
  <h1>Registration </h1>
  <form action="" name="registration">
    <div className="form">
    <label htmlFor="username">Username</label>
    <input class="" type="text" name="username" id="username" placeholder="Username / Email" />

    <label htmlFor="first_name">First Name</label>
    <input type="text" name="first_name" id="first_name" placeholder="First Name" />

    <label htmlFor="last_name">Last Name</label>
    <input type="text" name="last_name" id="last_name" placeholder="Last Name" />

    <div className="gender">
    <label htmlFor="gender">Gender </label>
    <input type="radio" defaultValue="Male" name="gender" /> Male
    <input type="radio" defaultValue="Female" name="gender" /> Female
    </div>

    <label htmlFor="dob">Date of Birth</label>
    <input type="date" name="dob" id="dob" />

    <label htmlFor="phone">Phone</label>
    <input type="text" maxLength={10} placeholder="Phone / Mobile Number" name="phone" id="phone" />

    <label htmlFor="address">Address</label>
    <textarea name="address" id="address" placeholder="Enter Full Address" defaultValue={""} />

    <label htmlFor="password">Password</label>
    <input type="password" name="password" id="password" placeholder="Password" />

    <label htmlFor="confirm_password">Confirm Password</label>
    <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm Password" />

      <input type="submit" name="submit" defaultValue="Register" id="submit" />
    </div>
  </form>
  <hr />
  <div className="loginfooter">
    <a href="login.html">Login now</a>
  </div>
</>

  )
}
