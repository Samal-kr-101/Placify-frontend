import React from "react";
import { useNavigate } from "react-router-dom";

const InternDetails5 = () => {
    const navigate = useNavigate();

  return (
    <div className="interns-details">
      <h2>Frontend Developer Internship</h2>
      <p>
        Get hands-on experience in frontend development, real-world projects,
        and team collaboration with our certified internship program.
      </p>
      <ul>
        <li>
          💻 Work with latest tech like HTML, CSS, JavaScript, React.js (or
          Angular/Vue), Tailwind or Bootstrap, Git, and REST API integration.{" "}
        </li>
        <li>🔗 Build real applications and APIs</li>
        <li>📜 Internship certificate after completion</li>
        <li>👨‍🏫 Mentorship from industry experts</li>
        <li>
          🧠 Skills : Proficient in HTML, CSS, JavaScript, React.js, responsive
          design, version control with Git, and a good eye for UI/UX.
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

export default InternDetails5;
