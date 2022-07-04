import styled from "styled-components";
import { H3 } from "../../DisplayText";
import { MdClose } from 'react-icons/md';
import EditPostForm from "./EditPostForm";
import putRequest from "../../../lib/putRequest";
import { BASE_URL } from "../../../constants/api";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { SuccessMessage } from "../../ui/DisplayMessage";
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
  padding:10px ;
  margin: 15% auto; 
  border-radius: 12px;
  width: 80%; 
  max-width: 800px;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  width: 32px ;
  height: 32px ;
  padding:0 ;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EditPostModal = ({ setShowEditModal, post }) => {
  const [editPostSuccess, setEditPostSuccess] = useState(null);
  const [auth, setAuth] = useLocalStorage("auth", null);

  const editPost = async (data) => {
    setEditPostSuccess(null);
    try {
      const response = await putRequest(`${BASE_URL}/api/posts/${post.id}`, { data }, auth.jwt);
      setEditPostSuccess("Post successfully edited!");

      setTimeout(() => {
        window.location.reload(false);
      }, 2000);

    } catch (error) {
      console.log("error", error);
    }
    return false;
  }

  return (
    <Overlay>
      <ModalContent>
        {editPostSuccess && <SuccessMessage>{editPostSuccess}</SuccessMessage>}
        <Flex>
          <H3 primary uppercase title="Edit post" />
          <CloseModalButton aria-label="Close modal" onClick={() => setShowEditModal(prev => !prev)} />
        </Flex>
        <div>
          <EditPostForm post={post} onSubmit={editPost} />
        </div>

      </ModalContent>
    </Overlay>
  )
};

export default EditPostModal;