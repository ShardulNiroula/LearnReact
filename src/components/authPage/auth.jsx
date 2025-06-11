import { useState } from 'react';
import Login from './login';
import SignUp from './signup';




function AuthPage() {
    const [user, setUser] = useState(null)
    return (
        <div>
            <SignUp setUser = {setUser}/>
            <Login user = {user}/>
        </div>
    )
}

export default AuthPage