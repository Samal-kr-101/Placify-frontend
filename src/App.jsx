import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Intern from './pages/Intern'
import About from './pages/About'
import {Routes,Route} from 'react-router-dom'
import ContactLayout from './layout/ContactLayout'
import ContactInfo from './components/ContactInfo'
import ContactForm from './components/ContactForm'
import NotFound from './components/NotFound'
import JobsLayout from './layout/JobsLayout'
import Jobs, { jobsLoader } from './pages/Jobs'
import JobDetails from './pages/JobDetails'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MoreJobs from './MoreJobs'
import ApplyPage from './pages/ApplyPage'
import SubmitJob from './SubmitJob'
import JobDetails2 from './pages/JobDetails2'
import JobDetails3 from './pages/JobDetails3'
import JobDetails4 from './pages/JobDetails4'
import JobDetails5 from './pages/JobDetails5'
import internDetails1 from './pages/InternDetails1'
import InternDetails1 from './pages/InternDetails1'
import InternDetails2 from './pages/InternDetails2'
import InternDetails3 from './pages/InternDetails3'
import InternDetails4 from './pages/InternDetails4'
import InternDetails5 from './pages/InternDetails5'
import ApplyIntern from './pages/ApplyIntern'
import SubmitIntern from './SubmitIntern'
import MoreInterns from './MoreInterns'

const App = () => {
  return (
    <div>
      <NavBar/>
      <div className='container'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactLayout/>}/>
        <Route path='/info' element={<ContactInfo/>}/>
        <Route path='/forms' element={<ContactForm/>}/>
        <Route path='/jobs' element={<JobsLayout/>}/>
        <Route path='/intern' element={<Intern/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/job-details1' element={<JobDetails/>}/>
        <Route path='/job-details2' element={<JobDetails2/>}/>
        <Route path='/job-details3' element={<JobDetails3/>}/>
        <Route path='/job-details4' element={<JobDetails4/>}/>
        <Route path='/job-details5' element={<JobDetails5/>}/>
        <Route path='/login-page' element={<LoginPage/>}/>
        <Route path='/register-page' element={<RegisterPage/>}/>
        <Route path='/more-jobs' element={<MoreJobs/>}/>
        <Route path='/apply-page' element={<ApplyPage/>}/>
        <Route path='/submit-job' element={<SubmitJob/>}/>
        <Route path='/intern-details1' element={<InternDetails1/>}/>
        <Route path='intern-details2' element={<InternDetails2/>}/>
        <Route path='intern-details3' element={<InternDetails3/>}/>
        <Route path='intern-details4' element={<InternDetails4/>}/>
        <Route path='intern-details5' element={<InternDetails5/>}/>
        <Route path='apply-intern' element={<ApplyIntern/>}/>
        <Route path='submit-intern' element={<SubmitIntern/>}/>
        <Route path='more-interns' element={<MoreInterns/>}/>
      </Routes>
      </div>
          <footer class="footer">
  <div class="footer-content">
    <p>&copy; 2025 Placify. All rights reserved.</p>
    <p>Made with ❤️ by Samal</p>
  </div>
</footer>
    </div>
  )
}

export default App