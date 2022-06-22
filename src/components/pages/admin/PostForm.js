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


const PostForm = () => {
  return (
    <PostContainer>
      <Flex>
        <H2 primary title="Posts" />
        <Button width={"150px"} text="Add new" />
      </Flex>
      <Flex>
        <H3 primary uppercase title="Id" />
        <H3 primary uppercase title="Post title" />
      </Flex>
      <FlexTablet>
        <Flex>
          <P primary paragraph="Id" />
          <P primary paragraph="Title" />
        </Flex>
        <Flex>
          <Button text="Edit" />
          <Button text="Delete" />
        </Flex>
      </FlexTablet>

    </PostContainer>
  )
}

export default PostForm;