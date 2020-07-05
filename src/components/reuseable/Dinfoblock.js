import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'
import { useState } from 'react';


export default function Dinfoblock({heading,phase}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-4 mx-auto">
                    <div class="card">
                        <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="Image"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">
                                {phase}
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="col-4 mx-auto">
                    <div class="card">
                        <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="Image"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">
                                {phase}
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
