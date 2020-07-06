import React, { Component } from 'react'
import Img from 'gatsby-image'
import Heading from '../reuseable/Heading'

export default class Coursescart extends Component {
    constructor(props){
        super(props)
        this.state = {
            courses:props.courses.edges,
        }
    }
    render() {
        console.log(this.state.courses)
        return (
            <section className="py-5">
                <div className="container">
                <Heading title="Courses" />
                <div className="row">
                    {
                        this.state.courses.map(({node}) =>{
                            return(
                                // <div
                                // key={node.id}
                                // className="col-11 col-md"
                                // >
                                //     <Img fixed={node.image.fixed}/>
                                //     <div className="flex-grow-1 px-3">
                                //         <div className="d-flex justify-content-between">
                                //         <h6 className="mb-0">{node.title}</h6>
                                //         <h6 className="mb-0 text-green">{node.description}</h6>
                                //         <h6 className="mb-0 text-green">{node.price}</h6>
                                //         </div>
                                //         <button className="btn btn-warning">Join us</button>
                                //     </div>
                                // </div>
                                <div 
                                key={node.id}
                                className="col-11 col-md"
                                >
                                      <div class="card">
                                        <Img fixed={node.image.fixed}/>
                                    <div class="card-body">
                                    <h5 class="card-title">{node.title}</h5>
                                    <p class="card-text">{node.description}</p>
                                    <p class="card-text">₹ {node.price}</p>
                                    </div>
                                    <div class="card-footer">
                                    <button 
                                    data-item-id={node.id}
                                    data-item-name={node.title}
                                    data-item-price={node.price}
                                    data-item-url="https://democartshop.netlify.app"
                                    data-item-image={node.image.fixed.src}
                                    className="btn btn-warning snipcart-add-item"
                                    >Join us</button>
                                    </div>
                                </div>
                                </div>
                            )
                        })
                    }
                </div>
                </div>
            </section>
        )
    }
}
