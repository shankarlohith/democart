import React from 'react'
import Heading from './Heading'
import { Link} from 'gatsby'
export default function Infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                    <Heading title={heading}/>
                        <p className="lead text-white mb-4">
                            leorm ipsum i got his from the element
                            leorm ipsum i got his from the element
                            leorm ipsum i got his from the element
                            leorm ipsum i got his from the element
                            leorm ipsum i got his from the element
                            leorm ipsum i got his from the element
                            leorm ipsum i got his from the element
                            leorm ipsum i got his from the element
                            leorm ipsum i got his from the element
                            leorm ipsum i got his from the element
                            leorm ipsum i got his from the element
                        </p>
                        <Link to="/about/">
                            <button className="btn btn-warning btn-lg">
                                About us
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
