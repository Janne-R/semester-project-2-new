import styled from "styled-components";
import { H3 } from "../../DisplayText";
import { MdClose } from 'react-icons/md';
import EditPostForm from "./EditPostForm";
import putRequest from "../../../lib/putRequest";
import { BASE_URL } from "../../../constants/api";
import useLocalStorage from "../../../hooks/useLocalStorage";


const Overlay = styled.div`
  position: fixed;
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
position: absolute ;
top: 200px;
right: 225px;
width: 32px ;
height: 32px ;
padding:0 ;
`;


const EditPostModal = ({ setShowEditModal, post }) => {
  const [auth, setAuth] = useLocalStorage("auth", null);

  const editPost = async (data) => {
    try {
      console.log(data);
      const response = await putRequest(`${BASE_URL}/api/posts/${post.id}`, { data }, auth.jwt);
      console.log("response", response);

    } catch (error) {
      console.log("error", error);
    }
    return false;
  }

  return (
    <Overlay>
      <ModalContent>
        <H3 primary uppercase title="Edit post" />
        <div>
          <EditPostForm post={post} onSubmit={editPost} />
        </div>
        <CloseModalButton aria-label="Close modal" onClick={() => setShowEditModal(prev => !prev)} />
      </ModalContent>
    </Overlay>
  )
};

export default EditPostModal;