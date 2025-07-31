import React from 'react'
const ContactForm = () => {
  return (
    <div>
        <form className='form'>
            <h2>Contact Form</h2>
            <input type="text" placeholder='Name'></input>
            <br />
            <input type="email" placeholder='Email'></input>
            <br />
            <textarea placeholder='message'></textarea>
            <br />
            <button type="submit">submit</button>
        </form>
    </div>
  )
}

export default ContactForm;