
import './Navbar.scss'


export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
            
                
                <h1 className="header__logo">Zatecno Materiales electricos</h1>

                <nav className="header__navbar">
                    <p className="header__navlink">Sobre Nostros</p>
                    <p className="header__navlink">Contactanos</p>
                    <p className="header__navlink">Galeria de imagenes</p>
                    
                </nav>
            </div>
        </header>
    )
}

export default Navbar