import PageTitle from "../../common/PageTitle"
import { useContext, useEffect } from "react";
import AuthContext from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

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
      <PageTitle title="Admin" />

    </>
  );
};

export default Admin;