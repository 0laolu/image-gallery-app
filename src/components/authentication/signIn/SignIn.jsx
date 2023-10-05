import { useState } from "react";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
            .then(userCred => console.log(userCred))
            .catch(error => console.log(error))
    }

    return (
        <div>
            <h3>Sign In</h3>
            <form onSubmit={handleSubmit}>
                {/* Email input field */}
                <div className="input-container">
                    <label htmlFor="login-email">Email Address</label><br />
                    <input 
                        type="email" 
                        id="login-email" 
                        placeholder="Enter email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <p></p>
                </div>
                
                {/* Password input field */}
                <div className="input-container">
                    <label htmlFor="login-password">Password</label><br />
                    <input 
                        type="password" 
                        id="login-password" 
                        placeholder="Enter password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <p></p>
                </div>

                {/* Submit Button */}
                <button>Submit</button>
            </form>
        </div>
    )
}