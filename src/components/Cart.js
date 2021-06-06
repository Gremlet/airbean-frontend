import { MdShoppingCart } from 'react-icons/md'
import '../scss/cart.scss'
import { useSelector } from 'react-redux'
import Badge from '@material-ui/core/Badge'
import { useState } from 'react'

function Cart() {
    const cart = useSelector((state) => {
        return state.cart
    })

    const [showCart, setShowCart] = useState(false)

    const toggleCart = () => {
        setShowCart(!showCart)
    }

    // might add quantity to json data if can't do it via redux

    return (
        <div className="cart">
            <svg className="circle2" height="80" width="80">
                <circle cx="40" cy="40" r="24" fill="#2f2926" />
            </svg>

            <div className="cart-icon" onClick={toggleCart}>
                <h1>
                    <Badge color="secondary" badgeContent={cart.length}>
                        <MdShoppingCart style={{ color: 'white' }} />
                    </Badge>
                </h1>
            </div>
            {showCart && (
                <div className="cart-card">
                    <h1>I'm a cart!</h1>
                    {cart.map((item) => {
                        return <p key={item.id}>{item.title}</p>
                    })}
                </div>
            )}
        </div>
    )
}

export default Cart
