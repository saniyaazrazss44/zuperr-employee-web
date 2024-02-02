import React from 'react'
import Navbar from '../Navbar/Navbar'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import MainContent from '../MainContent/MainContent'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Main />
            <MainContent />
            {/* <Footer /> */}
        </div>
    )
}

export default Home