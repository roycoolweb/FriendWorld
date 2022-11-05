import React from 'react'

export default function CreateChalkboard() {
    return (
        <div className='container'>
            <h1>Register</h1>
            <form className='form-width'>
                <div className="mb-3 row">
                    <label for="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="name" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="summary" className="col-sm-2 col-form-label">Summary</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="summary" />
                    </div>
                </div>
                <button className='btn btn-primary btn-lg mt-1'>
                    Register
                </button>
            </form>

        </div>
    )
}