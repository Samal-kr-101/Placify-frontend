import React from "react";
import { useNavigate } from "react-router-dom";

const JobDetails5 = () => {
  const navigate = useNavigate();
  return (
    <div className="job-detail">
      <h2>Job Openings</h2>
      <p>List of current job opening in our company.</p>
      <h4>Job Title: Data Science</h4>
      <b>
        Company: <span>Veriton</span>
      </b>
      <b>
        Salary: <span>80,000</span>
      </b>
      <b>
        Job Location: <span>USA</span>
      </b>
      <b>
        Skills Required :{" "}
        <span>
          Skills Required: Python/R, statistics, machine learning, data
          analysis, data visualization (Matplotlib, Seaborn, Tableau), SQL,
          pandas, Scikit-learn, Jupyter Notebooks, and hypothesis testing.
        </span>
      </b>

      <b>
        Description :{" "}
        <span>
          We are hiring a skilled Data Scientist who can turn data into
          actionable insights and drive data-driven decisions. You’ll be
          responsible for analyzing large datasets, building predictive models,
          and working closely with business teams to solve complex problems
          using data.
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

export default JobDetails5;
