import React from "react"
import "../bootstrap.min.css"
import Herosec from "../components/reuseable/Herosec"
import Infoblock from '../components/reuseable/infoblock'
import Dinfoblock from '../components/reuseable/Dinfoblock'
import {  graphql } from 'gatsby'
import Layout from "../components/layout"
import Coursecart from "../components/Cart/Coursescart"

const IndexPage = ({data}) => (
  <Layout>
    <Herosec
    img={data.img.childImageSharp.fluid}
    title="Internship Demo"
    subtitle="Demo Givin By Lohith"
    heroclass="hero-bg"
    />
   <Infoblock heading="About us"/>
   <Coursecart courses={data.courses}/>
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
