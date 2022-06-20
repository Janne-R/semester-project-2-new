import Container from "../../common/ui/Container";
import PageTitle from "../../common/PageTitle"
import Paragraph from "../../common/Paragraph"
import styled from "styled-components";

const Div = styled.div`
 background-color: ${({ theme }) => theme.colors.primaryColor};
`;

const Flex = styled.div`
  @media ${({ theme }) => theme.devices.tabletS} { 
    display: flex;
    flex-direction: row-reverse;
}
`;

const Img = styled.img`
  margin-top: 20px;
  margin-bottom: -56px;
  @media ${({ theme }) => theme.devices.tabletS} { 
    height: 265px;
    margin-right: 17px;
  }
`;

const PostsIntro = () => {
  return (
    <Div>
      <Container>
        <Flex>
          <div>
            <PageTitle title="Browse our posts" />
            <Paragraph Paragraph="Welcome to Code Stack, this is the wiki-page for
          front-end development. Browse all our post
          below or try the search filter."/>
          </div>
          <Img src="images/codeDrawing.png" alt="image" height="200px" />
        </Flex>
      </Container>
    </Div>

  )
}

export default PostsIntro;