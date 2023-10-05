import { useState } from "react";
import { auth } from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        createUserWithEmailAndPassword(auth, email, password, confirmPassword)
            .then(userCred => console.log(userCred))
            .catch(error => console.log(error))
    }

    return (
        <div>
            <h3>Sign Up</h3>
            <form onSubmit={handleSubmit}>
                {/* Email input field */}
                <div className="input-container">
                    <label htmlFor="signup-email">Email Address</label><br />
                    <input 
                        type="email" 
                        id="signup-email" 
                        placeholder="Enter email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <p></p>
                </div>
                
                {/* Password input field */}
                <div className="input-container">
                    <label htmlFor="signup-password">Password</label><br />
                    <input 
                        type="password" 
                        id="signup-password" 
                        placeholder="Enter password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <p></p>
                </div>

                {/* Password input field */}
                <div className="input-container">
                    <label htmlFor="confirm-password">Confirm Password</label><br />
                    <input 
                        type="password" 
                        id="confirm-password" 
                        placeholder="Enter password"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                    />
                    <p></p>
                </div>

                {/* Submit Button */}
                <button>Submit</button>
            </form>
        </div>
    )
}