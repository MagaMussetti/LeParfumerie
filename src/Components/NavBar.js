import './NavBar.css';

const NavBar = () => {
    return (
        <div className="container">
            <div className="logo-box">
                <img src="" />
            </div>
            <nav className="NavBar">
                <div className="LeftNav">
                    <div className="NavOptionsLeft">
                        <ul>
                            <li>
                                <a href="">Inicio</a>
                            </li>
                            <li>
                                <a href="">Productos</a>
                            </li>
                            <li>
                                <a href="">Quienes Somos</a>
                            </li>
                            <li>
                                <a href="">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="RightNav">
                    <div className="NavOptionsRight">
                        <button className="Option">SignIn</button>
                        <button className="Option">SignUp</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default NavBar;
