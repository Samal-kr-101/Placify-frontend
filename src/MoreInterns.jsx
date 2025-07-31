import React from "react";
import { useNavigate } from "react-router-dom";

const MoreInterns = () => {
    const navigate = useNavigate();
  return (
    <div className="job-details">
      <h2>
        😅 Oops! No more interns are available right now. Stay tuned — we’ll update
        soon!{" "}
      </h2>
      <button
        id="btn"
        onClick={() => {
          navigate("/intern");
        }}
      >
        Go to internship Page
      </button>
    </div>
  );
};

export default MoreInterns;
