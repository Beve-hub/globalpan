import React from 'react'
import { Outlet } from 'react-router-dom'


const SpecialLayout = () => {
    return (
        <div>
            {/*Render all other screen */}
            <Outlet/>
        </div>
    )
}

export default SpecialLayout
