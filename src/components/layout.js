/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Footer from './reuseable/Footer'
import Navbar from './reuseable/navbar'

// import Header from "./header"
import "./layout.css"


const Layout = ({ children }) => (
  <>
  <Navbar/>
  {children}
  <Footer/>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
