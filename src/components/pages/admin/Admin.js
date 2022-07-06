import { useContext, useEffect } from "react";
import AuthContext from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import PageIntro from "../../common/PageIntro";
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
    <>
      <PageIntro title="Welcome to your admin page" src="images/codeSharing.png" height="140px" alt="Illustration of code sharing">
        Share your code with our community.
      </PageIntro>
      <AdminForm />
    </>
  );
};

export default Admin;