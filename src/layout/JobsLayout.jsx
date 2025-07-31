import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const JobsLayout = () => {

    const navigate = useNavigate();

  return (
    <div>
        <h2>Job Openings</h2>
        <p>List of current job opening in market.</p>
        <Outlet/>
        <div className="jobs" onClick={() => {navigate('/job-details1')}}>
            <h3>Frontend Developer</h3>
            <p>Company : TCS</p>
            <p>Salary : 25,000</p>
            <p>Location: Hydrabad</p>
        </div>
        <div className="jobs" onClick={() => {navigate('/job-details2')}}>
            <h3>Java Developer</h3>
            <p>Company : Infosys</p>
            <p>Salary : 50,000</p>
            <p>Location : Kolkata</p>
        </div>
        <div className="jobs" onClick={() => {navigate('/job-details3')}}>
            <h3>Software Engineer</h3>
            <p>Company : Cognizant</p>
            <p>Salary : 40,000</p>
            <p>Location : Noida</p>
        </div>
        <div className="jobs" onClick={() => {navigate('/job-details4')}}>
            <h3>AI Engineer</h3>
            <p>Company : Wipro</p>
            <p>Salary : 60,000</p>
            <p>Location : Gurgaon</p>
        </div>
        <div className="jobs" onClick={() => {navigate('/job-details5')}}>
            <h3>Data Science</h3>
            <p>Company : Veriton</p>
            <p>Salary : 80,000</p>
            <p>Location : USA</p>
        </div>
        <br/>
        <button id='btn' onClick={()=>{navigate('/more-jobs')}}>Click for more jobs</button>
    </div>

  )
}

export default JobsLayout