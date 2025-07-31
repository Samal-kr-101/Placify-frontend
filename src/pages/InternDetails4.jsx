import React from "react";
import { useNavigate } from "react-router-dom";

const InternDetails4 = () => {
  const navigate = useNavigate();
  return (
    <div className="interns-details">
      <h2>Internship in Data Analytics & Visualization</h2>
      <p>
        Get hands-on experience in data analytics, real-world projects, and team
        collaboration with our certified internship program.
      </p>
      <ul>
        <li>
          💻 Work with latest tech like Excel, SQL, Python, Pandas, NumPy,
          Matplotlib, Power BI or Tableau, and basic knowledge of statistics and
          data cleaning.{" "}
        </li>
        <li>🔗 Build real applications related to data analysis</li>
        <li>📜 Internship certificate after completion</li>
        <li>👨‍🏫 Mentorship from industry experts</li>
        <li>
          🧠 Skills : Proficiency in Excel, SQL, Python (Pandas, NumPy), data
          visualization tools (Tableau/Power BI), and strong analytical and
          communication skills.
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

export default InternDetails4;
