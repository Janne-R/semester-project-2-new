import styled from "styled-components";
import { H3 } from "../../DisplayText";
import { MdClose } from 'react-icons/md';
import AddNewPostForm from "./AddNewPostForm";
import postRequest from "../../../lib/postRequest";
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


const AddNewPostModal = ({ showAddModal, setShowAddModal }) => {
  const [auth, setAuth] = useLocalStorage("auth", null);

  const addNewProduct = async (data) => {
    try {
      const response = await postRequest(`${BASE_URL}/api/posts`, { data }, { Authorization: `Bearer ${auth.jwt}` });
      console.log("response", response);

    } catch (error) {
      console.log("error", error);
    }
    return false;
  }

  return (
    <>
      {showAddModal ? (
        <Overlay>
          <ModalContent showAddModal={showAddModal}>
            <H3 primary uppercase title="Add new post" />
            <div>
              <AddNewPostForm onSubmit={addNewProduct} />
            </div>
            <CloseModalButton aria-label="Close modal" onClick={() => setShowAddModal(prev => !prev)} />
          </ModalContent>
        </Overlay>
      ) : null}
    </>

  )
};

export default AddNewPostModal;