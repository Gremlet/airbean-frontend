import header from '../assets/header.svg'
import { MdMenu } from 'react-icons/md'
import '../scss/app.scss'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'

function Header() {
    const history = useHistory()
    const currentUser = useSelector((state) => {
        return state.currentUser
    })

    function handleClick() {
        if (currentUser.loggedIn === true) {
            history.push('/nav')
        } else {
            console.log('not logged in')
        }
    }
    return (
        <div className="header">
            <img src={header} alt="header-img" />

            <svg className="circle" height="80" width="80">
                <circle cx="40" cy="40" r="24" fill="white" />
            </svg>
            <div className="menu-icon" onClick={handleClick} data-tip="Please log in first!">
                <h1>
                    <MdMenu />
                </h1>
            </div>
            {!currentUser.loggedIn && <ReactTooltip />}
        </div>
    )
}

export default Header
