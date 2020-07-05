import React from 'react'
import BackgroundImage from 'gatsby-background-image'




export default function Herosec({img, title, subtitle, heroclass}) {
    return (
        <BackgroundImage
            className={heroclass}
            fluid={img}
        >
        <h1 className="text-black text-uppercase text-center dispaly-4">{title}</h1>
        <p className="text-warning">{subtitle}</p>
        </BackgroundImage>
    )
}


