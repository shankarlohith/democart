import React from "react"
import "../bootstrap.min.css"
import Herosec from "../components/reuseable/Herosec"
import Infoblock from '../components/reuseable/infoblock'
import Dinfoblock from '../components/reuseable/Dinfoblock'
import {  graphql } from 'gatsby'
import Layout from "../components/layout"
import About from "../components/about/About"

const AboutPage = ({data}) => (
  <Layout>
    <Herosec
    img={data.img.childImageSharp.fluid}
    title="Internship Demo"
    subtitle=" Demo givien by Lohith "
    heroclass="hero-bg"
    />
   <Infoblock heading="About us"/>
  
    <About />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
  }
}
`

export default AboutPage    
