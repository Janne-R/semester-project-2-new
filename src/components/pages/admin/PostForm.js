import { H2, H3, P } from "../../DisplayText.js";
import Container from "../../ui/Container";
import styled from "styled-components";
import Button from "../../ui/Button";
import { FiEdit } from 'react-icons/fi';
import { ImBin } from 'react-icons/im';


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
 background-color:${({ theme }) => theme.colors.backgroundColorLight};
 :nth-of-type(even){
  background-color:${({ theme }) => theme.colors.backgroundColor};
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



const PostForm = () => {
  return (
    <Container>
      <Background>
        <Flex>
          <H2 primary title="Posts" />
          <Button width={"150px"} text="Add new" />
        </Flex>
        <GridHeader>
          <H3 primary uppercase title="Id" />
          <H3 primary uppercase title="Post title" />
        </GridHeader>
        <Grid>
          <P primary paragraph="Id" />
          <P primary paragraph="Title" />
          <FormButton>Edit <FiEdit /></FormButton>
          <FormButton>Delete <ImBin /></FormButton>
        </Grid>
        <Grid>
          <P primary paragraph="Id" />
          <P primary paragraph="Title" />
          <FormButton>Edit <FiEdit /></FormButton>
          <FormButton>Delete <ImBin /></FormButton>
        </Grid>
      </Background>
    </Container>

  )
}

export default PostForm;