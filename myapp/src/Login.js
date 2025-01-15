import "./App.css";

function Login()
{
    return(
        <div>
        <form action="" name="Login">
            <div className="form">  
                <div>
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Username or Email"/>
                </div>
                    <div>
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password"/>
                    </div>
                       
                        <input type="submit" name="submit" value="Login"/>
                        </div>
                        
                    </form>
                    </div>
    );
}



export default function LoginPage(){
    return(
        <div>
        <h1>Login </h1>
        <Login />
        <hr/>
    
        </div>
                    );
                    }