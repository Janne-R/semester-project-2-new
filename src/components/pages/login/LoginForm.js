import { useForm } from "react-hook-form";
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import postRequest from "../../../lib/postRequest";
import { BASE_URL } from "../../../constants/api";
import AuthContext from "../../../context/AuthContext";
import Button from "../../ui/Button";
import { ErrorMessage } from "../../ui/DisplayMessage";

const FormContainer = styled.form`
  display: flex;
    flex-direction: column;
    max-width: 500px;
`;

const Label = styled.label`
margin-bottom: 10px;
`;

const Input = styled.input`
  border-radius: 10px;
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 20px;
`;

const Span = styled.span`
color: red;
margin-bottom: 20px;
margin-top: -20px;
`;


const schema = yup.object().shape({
  identifier: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

const LoginForm = () => {
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [auth, setAuth] = useContext(AuthContext);

  const onSubmit = async (data) => {
    setLoginError(null);
    try {
      const response = await postRequest(`${BASE_URL}/api/auth/local`, data);
      console.log("response", response);
      setAuth(response);
      navigate("/admin");
    } catch (error) {
      setLoginError("Wrong username or password!");
    }
    return false;
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      {loginError && <ErrorMessage>{loginError}</ErrorMessage>}
      <Label for="identifier">Username/Email</Label>
      <Input {...register("identifier")} />
      {errors.identifier && <Span>{errors.identifier.message}</Span>}

      <Label for="password">Password</Label>
      <Input {...register("password")} type="password" />
      {errors.password && <Span>{errors.password.message}</Span>}

      <Button text="Login" />
    </FormContainer>
  );
}

export default LoginForm;