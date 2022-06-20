import Container from "../../common/ui/Container";
import PageTitle from "../../common/PageTitle"
import Paragraph from "../../common/Paragraph"
import styled from "styled-components";

const Div = styled.div`
 background-color: ${({ theme }) => theme.colors.primaryColor};
`;

const Img = styled.img`
  margin-top: 20px;
  margin-bottom: -56px;
`;

const PostsIntro = () => {
  return (
    <Div>
      <Container>
        <PageTitle title="Browse our posts" />
        <Paragraph Paragraph="Welcome to Code Stack, this is the wiki-page for
          front-end development. Browse all our post
          below or try the search filter."/>
        <Img src="images/codeDrawing.png" alt="image" height="200px" />
      </Container>
    </Div>

  )
}

export default PostsIntro;