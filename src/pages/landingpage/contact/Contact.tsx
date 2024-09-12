import React from 'react'
import ContactTop from './screen/ContactTop'
import ContactBody from './screen/ContactBody'

interface Props {
    
}

const Contact: React.FC<Props> = () => {
    return (
        <div>
            <ContactTop/>
            <ContactBody/>
        </div>
    )
}

export default Contact
