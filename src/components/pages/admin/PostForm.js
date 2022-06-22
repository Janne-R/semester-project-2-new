import { H2, H3, P } from "../../DisplayText.js";
import Container from "../../ui/Container";
import styled from "styled-components";
import Button from "../../ui/Button";
import { FiEdit } from 'react-icons/fi';
import { ImBin } from 'react-icons/im';




const PostContainer = styled(Container)`
margin: 100px 10px 0 10px;
border: 1px solid ${({ theme }) => theme.colors.primaryColor};
border-radius: 5px;
`;

const Flex = styled.div`
 display: grid;
    grid-template-columns: 3fr 1fr;
    align-items: baseline;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media ${({ theme }) => theme.devices.tabletS} { 
  grid-template-columns: 1fr 1fr 1fr 1fr;
  }
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

const PostForm = () => {
  return (
    <PostContainer>
      <Flex>
        <H2 primary title="Posts" />
        <Button width={"150px"} text="Add new" />
      </Flex>
      <Grid>
        <H3 primary uppercase title="Id" />
        <H3 primary uppercase title="Post title" />
      </Grid>
      <Grid>

        <P primary paragraph="Id" />
        <P primary paragraph="Title" />

        <FormButton>Edit <FiEdit /></FormButton>
        <FormButton>Delete <ImBin /></FormButton>
      </Grid>
    </PostContainer>
  )
}

export default PostForm;