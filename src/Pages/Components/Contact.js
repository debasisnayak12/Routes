import { useNavigate } from "react-router-dom";

const Contact = ({count}) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact </h1>
      <p>This is the Contact Page</p>
      <h2> {count}</h2>
      <button onClick={() => navigate("/blog")}>Go to Blog 1</button>
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate(1)}>Next</button>
    </div>
  );
};
export default Contact;
