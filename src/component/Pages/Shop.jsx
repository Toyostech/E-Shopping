import React from 'react'
import Hero from '../herosection/Hero'

import Popular from '../popular/Popular'
import Offers from '../offer/Offers'
import New_Collection from '../new_collection/New_Collection'
import NewLetter from '../newLetter/NewLetter'
import { useMediaQuery, useTheme } from '@mui/material'
import NavBars from '../navbars/NavBars'

const Shop = () => {
    const isMobile = useMediaQuery(useTheme().breakpoints.down("md"))
    return (
        <section style={{
            paddingTop: isMobile ? 2 : 50,
            marginTop: isMobile ? 1 : 15,



        }}>

            <Hero />
            <Popular />
            <Offers />
            <New_Collection />
            <NewLetter />


        </section>
    )
}

export default Shop