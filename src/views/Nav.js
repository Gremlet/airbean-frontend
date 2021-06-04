import '../scss/nav.scss'
import { MdClose } from 'react-icons/md'
import { useHistory, Link } from 'react-router-dom'

function Nav() {
    const history = useHistory()

    function goBack() {
        history.goBack()
    }
    return (
        <div className="nav-menu">
            <svg className="circle-close" height="80" width="80">
                <circle cx="40" cy="40" r="24" fill="white" />
            </svg>
            <div className="close-icon" onClick={goBack}>
                <h1>
                    <MdClose />
                </h1>
            </div>
            <div className="nav-links">
                <h1>Menu</h1>
                <hr />
                <h1>Our Coffee</h1>
                <hr />
                <Link to="/profile" className="link-text">
                    <h1>My Profile</h1>
                </Link>
                <hr />
                <h1>Order Status</h1>
            </div>
        </div>
    )
}

export default Nav
