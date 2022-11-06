import React from 'react'
import { Link } from 'react-router-dom'

export default function Profile() {
    return (
        <div className='container'>
            <div className='w-75'>
                <Link to='/gallery' className='btn btn-danger mt-2'>Back</Link>
                <h1 className='mt-4 mb-0'>Sam</h1>
                <span className="badge bg-secondary mb-3">Programming</span>
                <p className='card-text'>I love to code</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem dolor illo tempore obcaecati voluptatem, provident magnam nisi, debitis consectetur veniam ex, a repellat assumenda soluta recusandae in quas reiciendis est!</p>
                <button className='btn btn-primary btn-lg mt-1'>
                    Contact
                </button>
                <button className='btn btn-success btn-lg mt-1'>
                    Chat
                </button>
            </div>
        </div>
    )
}