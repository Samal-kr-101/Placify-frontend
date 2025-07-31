import React from 'react'
import { useNavigate } from 'react-router-dom'

const ApplyIntern = () => {
    const navigate = useNavigate();
  return (
    <div className='apply-page'>
        <h2>Student Details</h2>
        <input type="text" placeholder='FullName'/>
        <input type="email" placeholder='Email Address'/>
        <input type='phone' placeholder='Phone No.'/>
        {/* <label for="file" >Upload Resume:</label> */}
        <p>Upload Resume :</p>
        <input type='file' id='file'/>
        <button id='btn' onClick={()=>{navigate('/submit-intern')}}>Submit</button>
    </div>
  )
}

export default ApplyIntern