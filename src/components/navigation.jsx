import {NavLink} from "react-router-dom";


function Navigation() {

    return (
        <nav>
            <div className="nav-container">
                <h1>To Do App</h1>

                <ul>
                    <li><NavLink to="/" className={ ({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Home</NavLink></li>
                    <li><NavLink to="/edittodo" className={ ({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Edit to do</NavLink></li>

                </ul>
            </div>
        </nav>
    );
}

export default Navigation;