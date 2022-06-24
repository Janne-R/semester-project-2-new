import styled from "styled-components";
import { H3 } from "../../DisplayText";
import { MdClose } from 'react-icons/md';
import AddForm from "./AddForm";



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

const AddModal = ({ showAddModal, setShowAddModal }) => {
  return (
    <>
      {showAddModal ? (
        <Overlay>
          <ModalContent showAddModal={showAddModal}>
            <H3 primary uppercase title="Add post" />
            <div>
              <AddForm />
            </div>
            <CloseModalButton aria-label="Close modal" onClick={() => setShowAddModal(prev => !prev)} />
          </ModalContent>

        </Overlay>

      ) : null}
    </>

  )
};

export default AddModal;