import React from "react";
import { useNavigate } from "react-router-dom";

const InternDetails2 = () => {
    const navigate = useNavigate();
  return (
    <div className="interns-details">
      <h2>AI Internship – Learn, Build, Innovate</h2>
      <p>
        Get hands-on experience in Artificial Intelligence, real-world projects,
        and team collaboration with our certified internship program.
      </p>
      <ul>
        <li>
          💻 Work with latest tech like Python, ML libraries like TensorFlow and
          PyTorch, data tools like Pandas and Jupyter, and deploy models using
          Flask, Docker, or cloud platforms.
        </li>
        <li>🔗 Build real applications related to AI</li>
        <li>📜 Internship certificate after completion</li>
        <li>👨‍🏫 Mentorship from industry experts</li>
        <li>
          🧠 Skills : Strong skills in Python, machine learning, data analysis,
          and a good understanding of libraries like TensorFlow, PyTorch, and
          basic AI concepts are essential for seeking an AI internship.
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

export default InternDetails2;
