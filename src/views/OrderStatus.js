import { useSelector } from 'react-redux'
import '../scss/status.scss'
import drone from '../assets/drone.svg'
import { useEffect, useState } from 'react'
import * as dayjs from 'dayjs'
import { useHistory } from 'react-router'

function OrderStatus() {
    const latestOrder = useSelector((state) => {
        return state.latestOrder
    })

    const history = useHistory()

    const [status, setStatus] = useState('')

    // if status is !delivered then coffee on the way

    // gotta add some conditional rendering in case there's no order

    useEffect(() => {
        function getStatus() {
            let coffeeStatus = ''
            if (dayjs(latestOrder.ETA) < dayjs()) {
                coffeeStatus = 'Delivered'
            }
            if (dayjs(latestOrder.ETA) > dayjs()) {
                let diff = dayjs(latestOrder.ETA).diff(dayjs(), 'm') + 1
                if (diff === 1) {
                    coffeeStatus = `Coffee drone landing in ${diff} minute`
                } else {
                    coffeeStatus = `Coffee drone landing in ${diff} minutes`
                }
            }
            setStatus(coffeeStatus)
        }
        getStatus()
        console.log(status)
    })

    const returnToNav = () => {
        history.push('/nav')
    }

    return (
        <div className="order-status">
            <div className="top">
                <p className="orderNumber">
                    Order number <strong>#{latestOrder.orderNumber}</strong>
                </p>
                <img src={drone} alt="airbean drone" className="drone" />
            </div>
            {status === 'Delivered' ? (
                <div className="middle">
                    <h1>Delivered</h1>
                </div>
            ) : (
                <div className="middle">
                    <h1>Your order is on the way!</h1>
                    <p>{status}</p>
                </div>
            )}

            <button className="cool" onClick={returnToNav}>
                Ok, cool!
            </button>
        </div>
    )
}

export default OrderStatus
