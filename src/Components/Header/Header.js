import './Header.css';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';

const Header = () => {
    return (
        <div className='Navigation'>
            <Navbar style={{
                backgroundColor: '#D70F64',
                height: '70px',
            }}>
                <NavbarBrand href="/" className='mr-auto ml-md-5 Brand'>
                    <img src={Logo} alt="Logo" width='80px' />
                </NavbarBrand>
                <Nav className='mr-md-5'>
                    <NavItem>
                        <Link to="/" className="NavLink">Burger Builder</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/orders" className="NavLink">Orders</Link>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}


export default Header;