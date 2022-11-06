import React from 'react'
import { Link } from 'react-router-dom'

export default function Gallery() {
    return (
        <div className='container'>
            <div className='d-flex justify-content-between align-items-center mb-3'>
                <h1>Explore</h1>
                <Link to='/create' className='btn btn-success'>Register</Link>
            </div>

            <div className="list-group">
                <div className="list-group-item list-group-item-action" aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Sam</h5>
                        <small>1 days ago</small>
                    </div>
                    <p className="mb-1">Programming</p>
                    <Link to='/profile' className='btn btn-primary btn-block'>View</Link>
                </div>
                <div className="list-group-item list-group-item-action" aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Ken</h5>
                        <small>2 days ago</small>
                    </div>
                    <p className="mb-1">Art</p>
                    <Link to='/profile' className='btn btn-primary btn-block'>View</Link>
                </div>
            </div>
        </div>
    )
}