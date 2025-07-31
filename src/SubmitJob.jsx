import React from 'react'
import { useNavigate } from 'react-router-dom'

const SubmitJob = () => {
    const navigate = useNavigate();
  return (
    <div className='submit-h'>
        <h2>Congatulation!!</h2>
        <h2>Your application has been submitted!</h2>
        <h3>You will get an email confirmation at your email</h3>
        <button id='btn' onClick={()=>{navigate('/jobs')}}>Go to job portal</button>
    </div>
  )
}

export default SubmitJob