import React from "react";
import { useNavigate } from "react-router-dom";

const MoreJobs = () => {
  const navigate = useNavigate();
  return (
    <div className="job-details">
      <h2>
        😅 Oops! No more jobs are available right now. Stay tuned — we’ll update
        soon!{" "}
      </h2>
      <button
        id="btn"
        onClick={() => {
          navigate("/jobs");
        }}
      >
        Go to Jobs Page
      </button>
    </div>
  );
};

export default MoreJobs;
