import React from "react";
import { useNavigate } from "react-router-dom";

const JobDetails2 = () => {
  const navigate = useNavigate();
  return (
    <div className="job-detail">
      <h2>Job Openings</h2>
      <p>List of current job opening in our company.</p>
      <h4>Job Title: Java Developer</h4>
      <b>
        Company: <span>Infosys</span>
      </b>
      <b>
        Salary: <span>50,000</span>
      </b>
      <b>
        Job Location: <span>Kolkata</span>
      </b>

      <b>
        Skills Required :{" "}
        <span>
          Java, Spring Boot, REST APIs, MySQL/PostgreSQL, HTML, CSS, JavaScript,
          React.js, Git/GitHub, MVC architecture, basic DevOps tools, and
          object-oriented programming.
        </span>
      </b>

      <b>
        Description :{" "}
        <span>
          We are looking for a passionate and skilled Full Stack Java Developer
          to join our growing development team. As a Full Stack Developer, you
          will be responsible for designing, developing, and maintaining both
          the backend and frontend of web applications using Java, Spring Boot,
          REST APIs, and modern frontend technologies like HTML, CSS,
          JavaScript, and React.
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

export default JobDetails2;
