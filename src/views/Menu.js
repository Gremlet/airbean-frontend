import '../scss/menu.scss'
import { MdAddCircle } from 'react-icons/md'
import footer from '../assets/footer.svg'
import { useEffect, useState } from 'react'

function Menu() {
    const [menu, setMenu] = useState(() => [])

    useEffect(() => {
        async function fetchMenu() {
            const response = await fetch('http://localhost:8080/api/coffee')
            const data = await response.json()
            console.log(data)
            setMenu(data)
        }
        fetchMenu()
    }, [])
    return (
        <div className="menu">
            <h1 className="menu-title">Menu</h1>
            {menu &&
                menu.map((menuItem) => {
                    return (
                        <div key={menuItem.id} className="menu-container">
                            <h1 className="add">
                                <MdAddCircle />
                            </h1>
                            <h3 className="coffee">{menuItem.title}</h3>
                            <p className="desc">{menuItem.desc}</p>
                            <h3 className="coffee-price">{menuItem.price} kr</h3>
                        </div>
                    )
                })}

            <img className="footer" src={footer} alt="footer-img" />
        </div>
    )
}

export default Menu
