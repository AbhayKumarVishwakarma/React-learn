import './Header.css'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='nav'>
            <div> <Link to='/'> <h1> Todo App </h1> </Link></div>
            <div className='nav-heading'>
                <div> <Link to='/todos'><h3> Todos </h3></Link> </div>
                <div> <Link to='/create'> <h3> Create Todo </h3> </Link> </div>
            </div>
        </div>
    )
}

export default Header