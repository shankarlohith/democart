import React from 'react'

export default function Contact() {
    return (
                <section className="col-10 col-sm-10 mx-auto py-5">
                <form action="https://formspree.io/mvowwqlv" enctype="multipart/form-data" method="POST">
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="Name">Name</label>
                    <input type="text" class="form-control" name="name" placeholder="Yours Name"/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" name="_replyto" placeholder="Yours Email" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="Mobile Number">Mobile Number</label>
                    <input type="text" class="form-control" name="number" placeholder="Your's Mobile Number" />
                </div>
                <div class="form-group">
                    <label for="inputAddress">Description</label>
                    <input type="textarea" class="form-control" name="message" placeholder="Your's Description" />
                </div>
                <div class="form-group">
                    <label for="inputAddress">Link</label>
                    <a>
                    <input  class="form-control" name="link" placeholder="Submit the link" />  
                    </a>
                </div>
                <label>
                    Your file:
                    <input type="file" name="upload" />
                </label>

                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                </section>
    )
}
