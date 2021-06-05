import { MdShoppingCart } from 'react-icons/md'
import '../scss/cart.scss'
import { useSelector } from 'react-redux'
import Badge from '@material-ui/core/Badge'

function Cart() {
    const cart = useSelector((state) => {
        return state.cart
    })
    return (
        <div className="cart">
            <svg className="circle2" height="80" width="80">
                <circle cx="40" cy="40" r="24" fill="#2f2926" />
            </svg>

            <div className="cart-icon">
                <h1>
                    <Badge color="secondary" badgeContent={cart.length}>
                        <MdShoppingCart style={{ color: 'white' }} />
                    </Badge>
                </h1>
            </div>
        </div>
    )
}

export default Cart
