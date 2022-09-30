import {Link} from 'react-router-dom'

function Header(){

    return (
        <header>
            <nav className='shadow-md w-full fixed top-0 left-0'>
                <ul>
                    <li>
                        <Link to="/login">Home</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/login">Contacto</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header