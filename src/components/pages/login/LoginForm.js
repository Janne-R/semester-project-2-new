import { useForm } from "react-hook-form";
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import postRequest from "../../../lib/postRequest";
import { BASE_URL } from "../../../constants/api";
import AuthContext from "../../../context/AuthContext";
import Button from "../../common/Button";
import { ErrorMessage } from "../../common/Messages";
import Container from "../../common/Container";
import { H2 } from "../../common/DisplayText"

const FormContainer = styled.form`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;

const Label = styled.label`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primaryColor};
  padding: 10px;
  margin-bottom: 20px;
`;

const Span = styled.span`
  color: ${({ theme }) => theme.colors.errorColor};
  margin-bottom: 20px;
  margin-top: -20px;
`;

const LoginButton = styled(Button)`
  width: 30%;
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

  const [, setAuth] = useContext(AuthContext);
  console.log(setAuth);

  const onSubmit = async (data) => {
    setLoginError(null);
    try {
      const response = await postRequest(`${BASE_URL}/api/auth/local`, data);
      setAuth(response);
      navigate("/admin");
    } catch (error) {
      setLoginError("Wrong username or password!");
    }
    return false;
  };

  return (
    <Container as="section">
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <H2 primary title="Login form" />
        {loginError && <ErrorMessage>{loginError}</ErrorMessage>}

        <Label for="identifier">Username</Label>
        <Input {...register("identifier")} />
        {errors.identifier && <Span>{errors.identifier.message}</Span>}

        <Label for="password">Password</Label>
        <Input {...register("password")} type="password" />
        {errors.password && <Span>{errors.password.message}</Span>}

        <LoginButton text="Login" />
      </FormContainer>
    </Container>
  );
};

export default LoginForm;