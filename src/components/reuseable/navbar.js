import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from './gatsby-icon.png'
import { FaOpencart } from 'react-icons/fa';


export default class navbar extends Component {

    state = {
        navbarState:false,
        navbarClass:"collapse navbar-collapse",
        menus : [
            {id:1,text:"Home",url:"/"},
            {id:2,text:"About Us",url:"/About"},
            //{id:3,text:"Services",url:"/services"},
            {id:4,text:"Contact",url:"/contact"}
        ]
    }
    myToggler = () =>{
        this.state.navbarState ? this.setState({
            navbarState:false,
            navbarClass:"collapse navbar-collapse"
        }) : this.setState({
            navbarState:true,
            navbarClass:"collapse navbar-collapse show"
        })
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-theme text-white">
                <Link to="/" className="navbar-brand ml-4">
                    <img src={logo} alt="logo" width="40px"/>
                </Link>
                <button className="navbar-toggler" onClick={this.myToggler}>
                <span className="text-white">Menu</span>        
                </button>
                <div className={this.state.navbarClass}>
                    <ul className="navbar-nav ml-auto mr-5">
                        {this.state.menus.map(
                            menu =>{
                                return (
                                    <li key={menu.id} className="nav-item">
                                    <Link to={menu.url} className="nav-link text-white">{menu.text}</Link>
                                    </li>
                                )
                            }
                        )}
                    
                    </ul>
                </div>
            </nav>
        )
    }
}
