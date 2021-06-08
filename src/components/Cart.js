import { MdShoppingCart } from 'react-icons/md'
import '../scss/cart.scss'
import logo from '../assets/airbean-logo-lg.svg'
import { useSelector } from 'react-redux'
import Badge from '@material-ui/core/Badge'
import { useEffect, useState } from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown, MdDelete } from 'react-icons/md'
import { increment, decrement, removeItem, getLatestOrder, emptyCart } from '../redux/actions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

function Cart() {
    const cart = useSelector((state) => {
        return state.cart
    })

    const cartTotal = useSelector((state) => {
        return state.total
    })

    const discount = useSelector((state) => {
        return state.discount
    })

    const currentUser = useSelector((state) => {
        return state.currentUser
    })

    const dispatch = useDispatch()
    const history = useHistory()

    const [showCart, setShowCart] = useState(false)
    const [cartLength, setCartLength] = useState(0)
    const [orderArray, setOrderArray] = useState([])

    const toggleCart = () => {
        setShowCart(!showCart)
    }

    function increaseQty(id, quantity, price) {
        dispatch(increment(id, quantity, price))
    }

    function decreaseQty(id, quantity, price) {
        dispatch(decrement(id, quantity, price))
    }

    function deleteItem(id, quantity, price) {
        dispatch(removeItem(id, quantity, price))
    }

    function takeMyMoney() {
        dispatch({ type: 'CHECK_DISCOUNT' })
        let orderArr = []
        for (let i = 0; i < cart.length; i++) {
            for (let j = 0; j < cart[i].quantity; j++) {
                orderArr.push(cart[i].id)
            }
        }
        console.log(orderArr)
        setOrderArray(orderArr)
    }

    async function sendOrder() {
        console.log('SendOrder is working...')
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: orderArray, userId: currentUser.userID, discount: discount }),
        }
        const response = await fetch('http://localhost:8080/api/order', requestOptions)
        const data = await response.json()
        console.log(data)
        dispatch(getLatestOrder(data))
        dispatch(emptyCart())
        history.push('/status')

        // also remember to empty cart!
    }

    useEffect(() => {
        function getCartLength() {
            let badge = 0
            for (let i = 0; i < cart.length; i++) {
                badge = badge + cart[i].quantity
            }

            setCartLength(badge)
        }

        getCartLength()
    }, [cart, cartTotal])

    return (
        <div className="cart">
            <svg className="circle2" height="80" width="80">
                <circle cx="40" cy="40" r="24" fill="#2f2926" />
            </svg>

            <div className="cart-icon" onClick={toggleCart}>
                <h1>
                    <Badge color="secondary" badgeContent={cartLength}>
                        <MdShoppingCart style={{ color: 'white' }} />
                    </Badge>
                </h1>
            </div>
            {showCart && (
                <div className="cart-card">
                    <h1 className="cart-title">Your order</h1>
                    {cart.length === 0 && (
                        <p style={{ textAlign: 'center', fontSize: '0.8em' }}>Go on. Treat yourself! 🙂</p>
                    )}
                    {cart.map((item) => {
                        return (
                            <div className="cart-item" key={item.id}>
                                <h3 className="cart-item-title">{item.title}</h3>
                                <p className="cart-price">{item.price} kr</p>
                                <button
                                    className="remove"
                                    onClick={() => deleteItem(item.id, item.quantity, item.price)}
                                >
                                    <MdDelete style={{ color: '#e5674e' }} />
                                </button>
                                <button
                                    className="increase"
                                    onClick={() => increaseQty(item.id, item.quantity, item.price)}
                                >
                                    <MdKeyboardArrowUp />
                                </button>
                                <p className="cart-item-quantity">{item.quantity}</p>
                                <button
                                    className="decrease"
                                    onClick={() => decreaseQty(item.id, item.quantity, item.price)}
                                >
                                    <MdKeyboardArrowDown />
                                </button>
                            </div>
                        )
                    })}
                    {cart.length > 0 && (
                        <div className="cart-total">
                            <h2 className="c-total">Total</h2>
                            <h2 className="c-amount">{cartTotal} kr</h2>
                        </div>
                    )}
                    {cart.length > 0 && (
                        <div className="pay">
                            <button className="pay-button" onClick={() => takeMyMoney()}>
                                Take my money!
                            </button>
                        </div>
                    )}
                </div>
            )}
            {orderArray.length > 0 && (
                <div className="pay-now">
                    <img src={logo} alt="airbean logo" />
                    <h1>Soon... coffee!</h1>
                    {discount > 0 && (
                        <p>
                            Congrats! You unlocked the Gothenburg 400 discount! We've taken{' '}
                            <strong>{discount} kr</strong> off your order
                        </p>
                    )}
                    <h1>Total to pay: {cartTotal} kr</h1>
                    <button className="go" onClick={sendOrder}>
                        Let's go!
                    </button>
                </div>
            )}
        </div>
    )
}

export default Cart
