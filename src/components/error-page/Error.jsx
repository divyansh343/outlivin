import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div>
            <h3>
                404 Something went wrong, back to <Link to="/">home </Link >
            </h3>
        </div>
    )
}

export default Error