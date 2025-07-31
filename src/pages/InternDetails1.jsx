import React from "react";
import { useNavigate } from "react-router-dom";

const InternDetails1 = () => {
    const navigate = useNavigate();
  return (
    <div className="interns-details">
      <h2>Software Engineer Internship Opportunities</h2>
      <p>
        Get hands-on experience in full-stack development, real-world projects,
        and team collaboration with our certified internship program.
      </p>
      <ul>
        <li>💻 Work with latest tech like JavaScript, React, SQL, MERN </li>
        <li>🔗 Build real applications and APIs</li>
        <li>📜 Internship certificate after completion</li>
        <li>👨‍🏫 Mentorship from industry experts</li>
        <li>🧠 Skills : 
          Strong foundation in programming, data structures, web development,
          databases, Git, and a willingness to learn and collaborate effectively
          in a team.
        </li>
      </ul>
      <button
        onClick={() => {
          navigate("/apply-intern");
        }}
      >
        Apply Now
      </button>
    </div>
  );
};

export default InternDetails1;
