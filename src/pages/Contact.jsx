import { useNavigate } from "react-router-dom";
export default function Contact() {
  const navigate = useNavigate();
  const handleForm = useNavigate();
  return (
    <div>
      {/* <h1>contact page </h1>
            <div className="contact-detail">
            <button id="info" onClick={() => {navigate('/info')}}>Info</button>
            <button id="form" onClick={() => {handleForm('/forms')}}>Form</button>
            </div> */}

      <header>
        <h1>Get In Touch</h1>
      </header>
      <div className="contact-container">
        <div className="message">
            <h2>Cotact Us</h2>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Query" />
          <button id="btn">Submit</button>
        </div>
        <div className="contact-info">
          <p>Email : samalkr99054@gmail.com</p>
          <p>Phone : 9905428001</p>
          <p>Address : RITEE, Raipur, India</p>
        </div>
        <div className="follow">
          <h3>Follow Us</h3>
          <img src="/linkedin.png" rel="Linkedin"></img>
          <img src="/github.png" rel="GitHub"></img>
          <img src="/twitter.png" rel="Twitter"></img>
          <img src="/facebook.png" rel="Facebook"></img>
          <img src="/insta.png" rel="Instagram"></img>
        </div>
      </div>
      <h2 className="query">
        Have questions? We’re here to help! Contact us anytime.
      </h2>
    </div>
  );
}
