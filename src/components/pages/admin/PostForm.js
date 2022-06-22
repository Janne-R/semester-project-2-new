import { H2, H3, P } from "../../DisplayText.js";
import Container from "../../ui/Container";
import styled from "styled-components";
import Button from "../../ui/Button";


const PostContainer = styled(Container)`
margin: 100px 10px 0 10px;
border: 1px solid ${({ theme }) => theme.colors.primaryColor};
border-radius: 5px;
`;

const Flex = styled.div`
  display: flex ;
  justify-content: space-between;
  align-items: baseline;
`;

const FlexTablet = styled.div`
  @media ${({ theme }) => theme.devices.tabletS} { 
    display: flex ;
  justify-content: space-between;
  align-items: baseline;
  
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
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

        <button>Edit</button>
        <button>Delete</button>
      </Grid>
    </PostContainer>
  )
}

export default PostForm;