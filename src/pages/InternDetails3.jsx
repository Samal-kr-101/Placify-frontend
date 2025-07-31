import React from "react";
import { useNavigate } from "react-router-dom";

const InternDetails3 = () => {
    const navigate = useNavigate();
  return (
    <div className="interns-details">
      <h2>Java Developer Internship</h2>
      <p>
        Get hands-on experience in java development, real-world projects, and
        team collaboration with our certified internship program.
      </p>
      <ul>
        <li>
          💻 Work with latest tech like Core Java, Spring Boot, Hibernate,
          MySQL, REST APIs, Git, and Maven/Gradle for building scalable backend
          applications.{" "}
        </li>
        <li>🔗 Build real applications and REST APIs</li>
        <li>📜 Internship certificate after completion</li>
        <li>👨‍🏫 Mentorship from industry experts</li>
        <li>
          🧠 Skills : Strong in Core Java, OOPs concepts, Spring Boot,
          Hibernate, SQL, RESTful APIs, Git, and problem-solving skills.
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

export default InternDetails3;
