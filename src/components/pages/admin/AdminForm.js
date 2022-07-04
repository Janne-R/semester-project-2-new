import { H2, H3, P } from "../../DisplayText.js";
import Container from "../../ui/Container";
import styled from "styled-components";
import Button from "../../ui/Button";
import { FiEdit } from 'react-icons/fi';
import { ImBin } from 'react-icons/im';
import useApi from '../../../hooks/useApi';
import { BASE_URL } from "../../../constants/api";
import Loader from "../../ui/Loader";
import { ErrorMessage } from "../../ui/DisplayMessage";
import deleteRequest from "../../../lib/deleteRequest";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { useState } from "react";
import PostModal from "./PostModal";

const Background = styled.div`
  background-color:${({ theme }) => theme.colors.backgroundColorLight};
  margin: 100px 10px 100px 10px;
  border: 1px solid ${({ theme }) => theme.colors.primaryColor};
  border-radius: 5px;
`;

const Flex = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: baseline;
  padding: 10px;
`;

const Grid = styled.div`
  :nth-of-type(even){
    background-color:${({ theme }) => theme.colors.backgroundColor};
    margin: 1px;
  }
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media ${({ theme }) => theme.devices.tabletS} { 
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const GridHeader = styled(Grid)`
  background-color:${({ theme }) => theme.colors.backgroundColor};
`;

const FormButton = styled.button`
  background: none;
  border: none;
  text-align: start;
  padding:0;
  font-size: 16px;
  font-family: 'Open Sans',sans-serif;
  @media ${({ theme }) => theme.devices.tabletS} { 
    font-size: 18px;
  }
`;

const url = `${BASE_URL}/api/posts`;

const AdminForm = () => {
  const { data: posts, isLoading, isError } = useApi(url, []);
  const [auth, setAuth] = useLocalStorage("auth", null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [postToEdit, setPostToEdit] = useState(null);

  const openAddModal = () => {
    setShowAddModal(prev => !prev)
  }

  const openEditModal = (post) => {
    setPostToEdit(post);
    setShowEditModal(prev => !prev)
  }

  const deletePost = async (postId) => {
    const confirmDelete = window.confirm("Do you want to delete this post?");
    if (confirmDelete) {
      window.location.reload(false)
      try {
        const response = await deleteRequest(`${BASE_URL}/api/posts/${postId}`, auth.jwt);
      } catch (error) {
      }
      return false;
    }
  }

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMessage>A error has occurred</ErrorMessage>;
  }

  if (posts) {
    return (
      <Container>
        <Background>
          <Flex>
            <H2 primary title="Posts" />
            <Button onClick={openAddModal} width={"150px"} text="Add new" />
            {showAddModal &&
              <PostModal setShowModal={setShowAddModal} />}
          </Flex>
          <GridHeader>
            <H3 primary uppercase title="Id" />
            <H3 primary uppercase title="Post title" />
          </GridHeader>
          {posts.map((post) => (
            <Grid key={post.id}>
              <P primary paragraph={post.id} />
              <P primary paragraph={post.attributes.title} />
              <FormButton onClick={() => openEditModal(post)}>Edit <FiEdit /></FormButton>
              <FormButton onClick={() => deletePost(post.id)}>Delete <ImBin /></FormButton>
            </Grid>
          ))}
          {posts.length === 0 && <ErrorMessage>There are no more posts!</ErrorMessage>}
          {showEditModal &&
            <PostModal post={postToEdit} setShowModal={setShowEditModal} />}
        </Background>
      </Container>
    )
  }
}

export default AdminForm;