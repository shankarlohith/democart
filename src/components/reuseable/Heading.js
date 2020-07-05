import React from 'react'

export default function Heading({title}) {
    return (
        <div className="row">
            <div className="col text-center-mb-4">
                <div className="display-3">
                    {title}
                </div>
            </div>
        </div>
    )
}


