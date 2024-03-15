import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials,  Experience, Contacts, Services} from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} </title>
            </Helmet>
            <Navbar />        
            <Landing />
            <About />
            {/* <Skills /> */}
            {/* <Experience /> */}
            <Services /> 
            {/* <Testimonials /> */}
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
