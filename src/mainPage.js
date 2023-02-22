import React from 'react'
import Contents from './layout/Contents'
import Head from './layout/Header'
import Nav from './layout/Nav'

function MainPage() {
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Nav />

            <div className='navvscontent'>
                <Head />
                <Contents />


            </div>

        </div>
    )
}

export default MainPage