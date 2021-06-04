import header from '../assets/header.svg'
import { MdMenu } from 'react-icons/md'
import '../scss/app.scss'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Header() {
    const history = useHistory()
    const currentUser = useSelector((state) => {
        return state.currentUser
    })

    // Check if redux store object is empty
    function isEmpty(obj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false
            }
        }
        return true
    }

    function handleClick() {
        if (isEmpty(currentUser) || currentUser.loggedIn === false) {
            alert('Please log in!')
        } else {
            history.push('/nav')
        }
    }
    return (
        <div className="header">
            <img src={header} alt="header-img" />
            <svg className="circle" height="80" width="80">
                <circle cx="40" cy="40" r="24" fill="white" />
            </svg>
            <div className="menu-icon" onClick={handleClick}>
                <h1>
                    <MdMenu />
                </h1>
            </div>
        </div>
    )
}

export default Header
