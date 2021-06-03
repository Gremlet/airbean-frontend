import '../scss/login.scss'
import logo from '../assets/airbean-logo.svg'

function Login() {
    return (
        <div className="login">
            <div className="logo">
                <img src={logo} alt="airbean-logo" />
            </div>
            <h1>Welcome to the AirBean family!</h1>
            <p>Login below to see your order history</p>
            <div className="login-form">
                <form action="">
                    <label htmlFor="username">Username</label>
                    <input type="text" required id="username" name="username" />
                    <label htmlFor="password">Password</label>
                    <input type="password" required id="password" name="password" />
                    <label htmlFor="gdpr">GDPR OK!</label>
                    <input type="checkbox" id="gdpr" required />
                    <input type="submit" id="submit" value="Log in!" />
                </form>
            </div>
        </div>
    )
}

export default Login
