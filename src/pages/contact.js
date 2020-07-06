import React from "react"
import "../bootstrap.min.css"
import Herosec from "../components/reuseable/Herosec"
import Infoblock from '../components/reuseable/infoblock'
import {  graphql } from 'gatsby'
import Layout from "../components/layout"
import Contact from "../components/contact/Contact"

const IndexPage = ({data}) => (
  <Layout>
    <Herosec
    img={data.img.childImageSharp.fluid}
    title="There is no place to hide"
    subtitle="Hacker"
    heroclass="hero-bg"
    />
   <Infoblock heading="Contact us"/>
   <Contact />
    
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              tracedSVG
            }
          }
  }
  courses:allContentfulCourses{
    edges{
      node{
        id
        title
        description
        price
        category
        image{
          fixed(width:200,height:200){
            ...GatsbyContentfulFixed
          }
        }
      }
    }
  }
}
`

export default IndexPage
