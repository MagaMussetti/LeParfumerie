import "./Components/NavBar.css"

const NavBar = () => {​​​​​​​​
    return (
        <div className='container'>
            <div className='logo-box'>
                <img src='https://images.app.goo.gl/2kBkfX2yoEQh5PAZ6'/>
            </div>
            <nav>
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Productos</a></li>
                    <li><a href="">Quienes Somos</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </nav>
        </div>
    )
}​​​​​​​​
export default NavBar
