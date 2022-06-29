import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "../../ui/DisplayMessage";
import { useState } from "react";
import Button from "../../ui/Button";


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
  border: 1px solid ${({ theme }) => theme.colors.primaryColor};
  padding: 10px;
  margin-bottom: 20px;
`;

const Textarea = styled.textarea`
  border-radius: 10px;
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 20px;
`;

const Span = styled.span`
color: ${({ theme }) => theme.colors.errorColor};
margin-bottom: 20px;
margin-top: -20px;
`;

const schema = yup.object().shape({
  title: yup.string().required("Please give the post a title").min(3, "The title must be at least 3 characters"),
  shortDescription: yup.string().required("Please give the post a short descriptionn").min(10, "The description must be at least 10 characters"),
  longDescription: yup.string().required("Please give the post a long description").min(10, "The long description must be at least 10 characters"),
  code: yup.string().required("Please give the post a code example").min(3, "The code example must be at least 3 characters"),
});

const AddForm = ({ onSubmit }) => {


  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });


  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Label for="title">Title</Label>
      <Input {...register("title")} />
      {errors.title && <Span>{errors.title.message}</Span>}

      <Label for="shortDescription">Short Description</Label>
      <Textarea rows="7" {...register("shortDescription")} />
      {errors.shortDescription && <Span>{errors.shortDescription.message}</Span>}


      <Label for="longDescription">Long Description</Label>
      <Textarea rows="12" {...register("longDescription")} />
      {errors.longDescription && <Span>{errors.longDescription.message}</Span>}

      <Label for="code">Code example</Label>
      <Textarea rows="7" {...register("code")} />
      {errors.code && <Span>{errors.code.message}</Span>}


      <Button text="Add post" />
    </FormContainer>
  )
}

export default AddForm;