import styled from "styled-components";
import FocusTrap from "focus-trap-react";
import { H3 } from "../../common/DisplayText";
import { MdClose } from 'react-icons/md';
import PostForm from "./PostForm";
import putRequest from "../../../lib/putRequest";
import postRequest from "../../../lib/postRequest";
import { BASE_URL } from "../../../constants/api";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { SuccessMessage } from "../../common/Messages";
import { useState } from 'react';

const Overlay = styled.div`
  position: fixed;
  overflow-y: scroll;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.8);
`;

const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundColorLight};
  padding:10px;
  margin: 15% auto; 
  border-radius: 12px;
  width: 80%; 
  max-width: 800px;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  font-size: xx-large;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PostModal = ({ setShowModal, post, onSuccess }) => {
  const [postSuccess, setPostSuccess] = useState(null);
  const [auth] = useLocalStorage("auth", null);
  const isAddMode = post === undefined;

  const addNewPost = async (data) => {
    setPostSuccess(null);
    try {
      const addedPost = await postRequest(`${BASE_URL}/api/posts`, { data }, { Authorization: `Bearer ${auth.jwt}` });
      onSuccess(addedPost.data);
      setPostSuccess("Post successfully added!");

    } catch (error) {
      console.log("error", error);
    }
    return false;
  };

  const editPost = async (data) => {
    setPostSuccess(null);
    try {
      const updatedPost = await putRequest(`${BASE_URL}/api/posts/${post.id}`, { data }, auth.jwt);
      onSuccess(updatedPost.data);
      setPostSuccess("Post successfully edited!");

    } catch (error) {
      console.log("error", error);
    }
    return false;
  };

  const title = isAddMode ? "Add new post" : "Edit post";
  const formAction = isAddMode ? addNewPost : editPost;

  return (
    <FocusTrap>
      <Overlay>
        <ModalContent>
          <Flex>
            <H3 primary uppercase title={title} />
            <CloseModalButton aria-label="Close modal" onClick={() => setShowModal(prev => !prev)}><MdClose /></CloseModalButton>
          </Flex>
          <div>
            <PostForm post={post} submitText={title} onSubmit={formAction} />
          </div>
          {postSuccess && <SuccessMessage>{postSuccess}</SuccessMessage>}
        </ModalContent>
      </Overlay>
    </FocusTrap>
  );
};

export default PostModal;