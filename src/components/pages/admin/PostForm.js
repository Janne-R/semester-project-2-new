import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
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
  short_description: yup.string().required("Please give the post a short descriptionn").min(10, "The description must be at least 10 characters"),
  description: yup.string().required("Please give the post a long description").min(10, "The long description must be at least 10 characters"),
  code: yup.string().required("Please give the post a code example").min(3, "The code example must be at least 3 characters"),
});

const PostForm = ({ onSubmit, post = { attributes: {} }, submitText }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: post.attributes.title,
      short_description: post.attributes.short_description,
      description: post.attributes.description,
      code: post.attributes.code,
    },
  });

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Label for="title">Title</Label>
      <Input {...register("title")} />
      {errors.title && <Span>{errors.title.message}</Span>}

      <Label for="short_description">Short Description</Label>
      <Textarea rows="7" {...register("short_description")} />
      {errors.short_description && <Span>{errors.short_description.message}</Span>}

      <Label for="description">Long Description</Label>
      <Textarea rows="12" {...register("description")} />
      {errors.description && <Span>{errors.description.message}</Span>}

      <Label for="code">Code example</Label>
      <Textarea rows="7" {...register("code")} />
      {errors.code && <Span>{errors.code.message}</Span>}

      <Button text={submitText} />
    </FormContainer>
  );
};

export default PostForm;