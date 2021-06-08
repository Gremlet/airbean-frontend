import '../scss/menu.scss'
import { MdAddCircle } from 'react-icons/md'
import footer from '../assets/footer.svg'
import oops from '../assets/oops.svg'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions'
import Cart from '../components/Cart'

function Menu() {
    const [menu, setMenu] = useState(() => [])
    const [menuLoaded, setMenuLoaded] = useState(false)

    const dispatch = useDispatch()

    function addItem(id, title, price, quantity) {
        dispatch(addToCart(id, title, price, quantity))
        console.log(id, title, price, quantity)
    }

    useEffect(() => {
        async function fetchMenu() {
            try {
                const response = await fetch('http://localhost:8080/api/coffee')
                const data = await response.json()
                console.log(data)
                setMenu(data)
                setMenuLoaded(true)
            } catch (error) {
                setMenuLoaded(false)
                console.log('is a heckin error')
            }
        }
        fetchMenu()
    }, [])
    return (
        <div className="menu">
            <Cart />
            <h1 className="menu-title">Menu</h1>
            {menuLoaded &&
                menu.map((menuItem) => {
                    return (
                        <div key={menuItem.id} className="menu-container">
                            <button
                                className="add"
                                onClick={() => addItem(menuItem.id, menuItem.title, menuItem.price, 1)}
                            >
                                <MdAddCircle />
                            </button>
                            <h3 className="coffee">{menuItem.title}</h3>
                            <p className="desc">{menuItem.desc}</p>
                            <h3 className="coffee-price">{menuItem.price} kr</h3>
                        </div>
                    )
                })}
            {!menuLoaded && (
                <div className="whoops">
                    <h3>Aw shucks! Something went sideways... please try again!</h3>
                    <img src={oops} alt="spilled coffee" />
                </div>
            )}

            <img className="footer" src={footer} alt="footer-img" />
        </div>
    )
}

export default Menu
