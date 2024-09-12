import React from 'react'
import TeamTop from './screen/TeamTop'
import TeamCeo from './screen/TeamCeo'
import AdminTeam from './screen/AdminTeam'
import InvestorTeam from './screen/InvestorTeam'


const Team = () => {
    return (
        <div>
           <TeamTop/>
           <TeamCeo/>
           <InvestorTeam/>
           <AdminTeam/>
        </div>
    )
}

export default Team
