import { H1 } from "../../DisplayText"
import { useContext, useEffect } from "react";
import AuthContext from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AdminIntro from "./AdminIntro";
import PostForm from "./PostForm";

const Admin = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <AdminIntro />
      <PostForm />

    </>
  );
};

export default Admin;