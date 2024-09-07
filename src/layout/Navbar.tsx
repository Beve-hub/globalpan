import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
            <nav>
                <h1>PanFlex</h1>
                <ul>
                    <li>
                        <NavLink to="/">
                            LandingPage
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/investment">
                            Investment
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/team">
                            Our Team
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <h1>log in</h1>
            </nav>
        </div>
    )
}

export default Navbar
