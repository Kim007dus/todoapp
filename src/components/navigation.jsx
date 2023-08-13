import {NavLink} from "react-router-dom";
import logo from '../assets/list-checks-duotone.svg'

function Navigation() {

    return (
        <header><nav>
            <div className="nav-container">
                <ul>
                   <li><img src={logo} alt="logo" className="logo"/></li>
                <li><h1>To Do App</h1></li>
            </ul>

                <ul>
                    <li><NavLink to="/" className={ ({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Home</NavLink></li>
                    <li><NavLink to="/aboutme" className={ ({isActive}) => isActive === true ? 'active-link' : 'default-link'}>About me</NavLink></li>

                </ul>
            </div>
        </nav>
        </header>
    );
}

export default Navigation;