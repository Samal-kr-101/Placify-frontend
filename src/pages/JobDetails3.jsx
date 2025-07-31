import React from "react";
import { useNavigate } from "react-router-dom";

const JobDetails3 = () => {
  const navigate = useNavigate();
  return (
    <div className="job-detail">
      <h2>Job Openings</h2>
      <p>List of current job opening in our company.</p>
      <h4>Job Title: Software Engineer</h4>
      <b>
        Company: <span>Cognizant</span>
      </b>
      <b>
        Salary: <span>40,000</span>
      </b>
      <b>
        Job Location: <span>Noida</span>
      </b>
      <b>
        Skills Required :{" "}
        <span>
          Skills Required: HTML5, CSS3, JavaScript, React.js,
          Bootstrap/Tailwind, responsive design, basic backend knowledge
          (Node.js/PHP), Git/GitHub, SEO basics, and cross-browser
          compatibility.
        </span>
      </b>

      <b>
        Description :{" "}
        <span>
          We are seeking a creative and detail-oriented Web Developer to build,
          enhance, and maintain modern, responsive websites and web
          applications. You should have a solid understanding of HTML, CSS,
          JavaScript, and be comfortable working with React.js or similar
          frontend frameworks.
        </span>
      </b>
      <button
        onClick={() => {
          navigate("/apply-page");
        }}
      >
        Apply Now
      </button>
    </div>
  );
};

export default JobDetails3;
