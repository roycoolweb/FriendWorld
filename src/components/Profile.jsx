import React from 'react'
import { Link } from 'react-router-dom'

export default function Profile() {
    return (
        <div className='container'>
            <Link to='/gallery' className='btn btn-danger mt-2'>Back</Link>
            <h1 className='mt-4'>Sam</h1>
            <p className='card-text'>I love to code</p>
            <button className='btn btn-primary btn-lg mt-1'>
                Contact
            </button>
        </div>
    )
}