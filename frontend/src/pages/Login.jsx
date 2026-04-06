import React, { useState } from 'react'
import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField'

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div>
            <form>

                <TextField
                    id="email"
                    label="Your email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    InputProps={{
                    className:'w-20 h-60'

                    }}
                />

                <div>

                    <label htmlFor="password">Your Password</label>
                    <input type="password" id='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

                </div>
                <Button variant='contained' type='submit' className='w-5 h-5 text-white'>Login</Button>

            </form>


        </div>
    )
}

export default Login
