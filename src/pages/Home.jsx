import { useNavigate } from "react-router-dom"

export default function home() {
    const  navigate = useNavigate(); 
  return (
    <div>
      <h1 className="rainbow-text" >Placify - Student jobs & Internships Portal</h1>
      <h1 className="head-h">Welcome to Placify</h1>
      <h4
        style={{
          textAlign: "center",
          textDecoration: "underline",
          marginTop: "20px",
          cursor:"pointer"
        }}
        onClick={() => {navigate('/login-page')}}
      >
        Login to continue
      </h4>
    </div>
  );
}
