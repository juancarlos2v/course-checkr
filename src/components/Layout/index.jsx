import Footer from '@components/Footer'
import Header from '@components/Header'
import React from 'react'


const index = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default index
