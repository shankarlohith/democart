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
    title="There is no place to hide"
    subtitle="Hacker"
    heroclass="hero-bg"
    />
   <Infoblock heading="About us"/>
   <Coursecart courses={data.courses}/>
    <Dinfoblock heading="This about col-8" phase="Get it"/>
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
            tracedSVG
          }
        }
      }
    }
  }
}
`

export default IndexPage
