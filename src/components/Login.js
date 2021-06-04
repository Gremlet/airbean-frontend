import '../scss/login.scss'
import logo from '../assets/airbean-logo.svg'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/actions.js'

function Login() {
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')
    let [isLoggedIn, setIsLoggedIn] = useState(null)

    const handleUsername = (event) => setUsername(event.target.value)
    const handlePassword = (event) => setPassword(event.target.value)

    const dispatch = useDispatch()

    async function userLogin(event) {
        event.preventDefault()
        console.log(username, password)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username, password: password }),
        }
        const response = await fetch('http://localhost:8080/api/login', requestOptions)
        const data = await response.json()
        dispatch(addUser(data))
        console.log(data)
        setIsLoggedIn(data.loggedIn)
    }

    useEffect(() => {
        if (isLoggedIn) {
            console.log('This is where we push to profile page')
        }
        if (isLoggedIn === false) {
            console.log('an error message')
        }
    }, [isLoggedIn])

    return (
        <div className="login">
            <div className="logo">
                <img src={logo} alt="airbean-logo" />
            </div>
            <h1>Welcome to the AirBean family!</h1>
            <p>Login below to see your order history</p>
            <div className="login-form">
                <form action="" onSubmit={userLogin}>
                    <label htmlFor="username">Username</label>
                    <input type="text" required id="username" name="username" onChange={handleUsername} />
                    <label htmlFor="password">Password</label>
                    <input type="password" required id="password" name="password" onChange={handlePassword} />
                    <label htmlFor="gdpr">GDPR OK!</label>
                    <input type="checkbox" id="gdpr" required />
                    <input type="submit" id="submit" value="Log in!" />
                </form>
                {isLoggedIn === false ? (
                    <p className="errMsg">Wrong username or password. Please try again.</p>
                ) : (
                    <p></p>
                )}
            </div>
        </div>
    )
}

export default Login
