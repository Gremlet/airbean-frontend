import '../scss/profile.scss'
import avatar from '../assets/avatar.svg'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import * as dayjs from 'dayjs'

function Profile() {
    const currentUser = useSelector((state) => {
        return state.currentUser
    })

    let [history, setHistory] = useState(null)
    let [totalSpent, setTotalSpent] = useState(0)

    useEffect(() => {
        async function fetchHistory() {
            const response = await fetch(`http://localhost:8080/api/order/${currentUser.userID}`)
            const data = await response.json()
            console.log(data)
            setHistory(data)
            let total = 0

            for (let i = 0; i < data.length; i++) {
                total = total + data[i].price
                setTotalSpent(total)
            }
        }

        fetchHistory()
    }, [currentUser.userID])

    return (
        <div className="profile">
            <img src={avatar} alt="profile img" />
            <h1 className="username">{currentUser.fullname}</h1>
            <p className="email">{currentUser.email}</p>
            <div className="order-history">
                <h2>Order history</h2>
                {history &&
                    history.map((item) => {
                        return (
                            <div key={item.orderNumber} className="order-container">
                                <p className="orderno">ORDER # {item.orderNumber}</p>
                                <p className="date">{dayjs(item.ETA).format('YYYY/MM/DD')}</p>
                                <p className="total">Total price</p>
                                <p className="price">{item.price} kr</p>
                                <div className="line"></div>
                            </div>
                        )
                    })}
                <div className="total">
                    <p className="spent">Total Spent</p>
                    <p className="grandtotal">{totalSpent} kr</p>
                </div>
            </div>
        </div>
    )
}

export default Profile
