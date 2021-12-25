import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Account from '../layouts/Account'

export default function Dashboard() {
    return (
        <Account>
            <Head>
                <title>InstaFollowPanel || Dashboard</title>
            </Head>
            <div className="container">
                Dashboard page is set
            </div>
            
        </Account>
    )
}
