import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
    
}

const SideBar: React.FC<Props> = () => {
    return (
        <aside>
            <ul>
            <li>
                <NavLink to="/dashboard">
                    Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink to="/invest">
                    Invest
                </NavLink>
            </li>
            <li>
                <NavLink to="/withdraw">
                    Withdraw
                </NavLink>
            </li>
            <li>
                <NavLink to="/analysis">
                    Analysis
                </NavLink>
            </li>
            <li>
                <NavLink to="/transaction">
                    Transactions
                </NavLink>
            </li>
            <li>
                <NavLink to="/settings">
                    Settings
                </NavLink>
            </li>
            </ul>
        </aside>
    )
}

export default SideBar
