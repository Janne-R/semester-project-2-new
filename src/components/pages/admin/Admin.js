import { useContext, useEffect } from "react";
import AuthContext from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AdminIntro from "./AdminIntro";
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
      <AdminIntro />
      <AdminForm />
    </main>
  );
};

export default Admin;