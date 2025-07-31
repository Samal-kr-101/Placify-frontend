import React from "react";
import { useNavigate } from "react-router-dom";

const JobDetails4 = () => {
  const navigate = useNavigate();
  return (
    <div className="job-detail">
      <h2>Job Openings</h2>
      <p>List of current job opening in our company.</p>
      <h4>Job Title: AI Engineer</h4>
      <b>
        Company: <span>Wipro</span>
      </b>
      <b>
        Salary: <span>60,000</span>
      </b>
      <b>
        Job Location: <span>Gurgaon</span>
      </b>
      <b>
        Skills Required :{" "}
        <span>
          Skills Required: Python, TensorFlow/PyTorch, machine learning, deep
          learning, NLP, OpenCV, data preprocessing, Scikit-learn, model
          deployment, and basic cloud (AWS/GCP) knowledge.
        </span>
      </b>

      <b>
        Description :{" "}
        <span>
          We are looking for a talented and motivated AI Engineer to join our
          tech team. As an AI Engineer, you will work on building intelligent
          systems and solutions using machine learning, deep learning, and
          natural language processing technologies. You’ll collaborate with data
          scientists and developers to integrate AI capabilities into real-world
          applications.
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

export default JobDetails4;
