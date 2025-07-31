import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Intern = () => {
  const navigate = useNavigate();
  return (
    <div className='intern-container'>
        <h2>Internship Opportunities</h2>
        <p>List of current internship opportunity in market.</p>
        <Outlet/>
        <div className="interns" onClick={() => {navigate('/intern-details1')}}>
            <h3>Software Developer Intern</h3>
            <p>Company :Oasis Infobyte </p>
            <p>Stipend : 5,000-8,000</p>
            <p>Remote</p>
        </div>
        <div className="interns" onClick={() => {navigate('/intern-details2')}}>
            <h3>AI Intern</h3>
            <p>Company : CodeClause</p>
            <p>Salary : 8,000-16,000</p>
            <p>Remote</p>
        </div>
        <div className="interns" onClick={() => {navigate('/intern-details3')}}>
            <h3>Java Developer Intern</h3>
            <p>Company : Octanet</p>
            <p>Salary : 8,000-15,000</p>
            <p>Remote</p>
        </div>
        <div className="interns" onClick={() => {navigate('/intern-details4')}}>
            <h3>Data Analyst Intern</h3>
            <p>Company : Prodigy Infotech</p>
            <p>Stipend : 5,000-12,000</p>
            <p>Remote</p>
        </div>
        <div className="interns" onClick={() => {navigate('/intern-details5')}}>
            <h3>Frontend Intern</h3>
            <p>Company : InternPe</p>
            <p>Stipend : Unpaid</p>
            <p>Remote</p>
        </div>
        <br/>
        <button id='btn' onClick={()=>{navigate('/more-interns')}}>Click for more interns</button>
    </div>

  )
}

export default Intern