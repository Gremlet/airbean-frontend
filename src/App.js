import './scss/app.scss'
import header from './assets/header.svg'
import { MdMenu } from 'react-icons/md'
import Login from './components/Login'

function App() {
    return (
        <div className="App">
            <div className="header">
                <img src={header} alt="header-img" />
                <svg className="circle" height="80" width="80">
                    <circle cx="40" cy="40" r="24" fill="white" />
                </svg>
                <div className="menu-icon">
                    <h1>
                        <MdMenu />
                    </h1>
                </div>
            </div>
            <Login />
        </div>
    )
}

export default App
