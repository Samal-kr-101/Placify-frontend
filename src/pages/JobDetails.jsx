import React from "react";
import { useNavigate } from "react-router-dom";

const JobDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="job-detail">
      <h2>Job Openings</h2>
      <p>List of current job opening in our company.</p>
      <h4>Job Title: Frontend Developer</h4>
      <b>
        Company: <span>TCS</span>
      </b>
      <b>
        Salary: <span>25,000</span>
      </b>
      <b>
        Job Location: <span>Hydrabad IN</span>
      </b>

      <b>
        Skills Required :{" "}
        <span>
          HTML5, CSS3, JavaScript (ES6+), React.js, Redux,
          Bootstrap/Tailwind CSS, responsive design, REST API integration,
          Git/GitHub, basic performance
          optimization, and UI tools like Figma or Adobe XD.
        </span>
      </b>

      <b>
        Description :{" "}
        <span>
          We are seeking a skilled Frontend Developer to join our team and help
          create engaging, high-performance web applications. The ideal
          candidate should have a strong understanding of web development
          fundamentals, experience with modern JavaScript frameworks (especially
          React.js), and the ability to work collaboratively with UI/UX
          designers and backend developers.
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

export default JobDetails;
