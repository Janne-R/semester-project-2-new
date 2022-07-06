import { useContext, useEffect } from "react";
import AuthContext from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import PageIntro from "../../PageIntro.js";
import AdminForm from "./AdminForm";

const Admin = () => {
  const [auth] = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  }, [auth, navigate]);

  return (
    <main>
      <PageIntro title="Welcome to your admin page" paragraph="Share your code with our community." src="images/codeSharing.png" height="140px" alt="Illustration" />
      <AdminForm />
    </main>
  );
};

export default Admin;