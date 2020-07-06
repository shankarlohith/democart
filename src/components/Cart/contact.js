import React from "react"
import "../bootstrap.min.css"
import Herosec from "../components/reuseable/Herosec"
import Infoblock from '../components/reuseable/infoblock'
import Dinfoblock from '../components/reuseable/Dinfoblock'
import {  graphql } from 'gatsby'
import Layout from "../components/layout"
import About from "../components/about/About"

const ContactPage = ({data}) => (
  <Layout>
    <Herosec
    img={data.img.childImageSharp.fluid}
    title="There is no place to hide"
    subtitle=" Services "
    heroclass="hero-bg"
    />
   <Infoblock heading="About us"/>
    <Dinfoblock heading="This about col-8" phase="Get it"/>
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

export default ContactPage    
