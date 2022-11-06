import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'

export default function Landing() {
    return (
        <div className='main'>
            <img className='mb-5' src={Logo} />
            <div className='card bg-dark card-width'>
                <div className='card-body'>
                    <h5 className='card-title text-white'>Welcome</h5>
                    <p className='card-text text-white'>Connect Wallet to Find Your New Friend</p>
                    <div className='d-grid gap-2'>
                        <Link to='/gallery' className='btn btn-primary btn-block'>Connect</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}