import { H1 } from "../../common/DisplayText"
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
      <H1 title="Admin" />

    </>
  );
};

export default Admin;