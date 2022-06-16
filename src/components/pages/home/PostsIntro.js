import Container from "../../common/Container";
import PageTitle from "../../common/PageTitle"
import styled from "styled-components";

const Div = styled.div`
 background-color: ${({ theme }) => theme.colors.primaryColor};
`;

const PostsIntro = () => {
  return (
    <Div>
      <Container>
        <PageTitle title="Browse our posts" />
      </Container>
    </Div>

  )
}

export default PostsIntro;