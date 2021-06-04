import '../scss/profile.scss'
import avatar from '../assets/avatar.svg'
import { useSelector } from 'react-redux'

function Profile() {
    const currentUser = useSelector((state) => {
        return state.currentUser
    })

    // fetch order history using currentUser.id
    return (
        <div className="profile">
            <img src={avatar} alt="profile img" />
            <h1 className="username">{currentUser.fullname}</h1>
            <p className="email">{currentUser.email}</p>
        </div>
    )
}

export default Profile
