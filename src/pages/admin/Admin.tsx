import React from 'react'
import AdminWallet from './screen/AdminWallet'
import AdminTransactions from './screen/AdminTransactions'
import { Text } from '@mantine/core'


const Admin = () => {
    return (
        <div>
            <Text fz={24} fw={600}>
                Admin Dashboard
            </Text>
            <AdminWallet/>
            <AdminTransactions/>
        </div>
    )
}

export default Admin
