import '../scss/nav.scss'
import { MdClose } from 'react-icons/md'
import { useHistory, Link } from 'react-router-dom'

function Nav(props) {
    const history = useHistory()

    function goBack() {
        history.goBack()
    }

    function changeColor(color) {
        props.updateColor(color)
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
                <Link to="/menu" className="link-text" onClick={() => changeColor('#f3e4e1')}>
                    <h1>Menu</h1>
                </Link>
                <hr />
                <Link to="/about" className="link-text" onClick={() => changeColor('#f3e4e1')}>
                    <h1>Our Coffee</h1>
                </Link>
                <hr />
                <Link to="/profile" className="link-text" onClick={() => changeColor('#2f2926')}>
                    <h1>My Profile</h1>
                </Link>
                <hr />
                <Link to="/status" className="link-text" onClick={() => changeColor('#2f2926')}>
                    <h1>Order Status</h1>
                </Link>
            </div>
        </div>
    )
}

export default Nav
