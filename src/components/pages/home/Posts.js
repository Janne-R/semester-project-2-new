import useApi from '../../../hooks/useApi';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../constants/api";
import Loader from "../../common/ui/Loader";
import { ErrorMessage } from "../../common/ui/DisplayMessage";
import Container from "../../common/ui/Container";
import Button from "../../common/ui/Button";
import { H2, P } from "../../common/DisplayText";

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostContainer = styled(Container)`
  background-color: ${({ theme }) => theme.colors.backgroundColorLight};
  width: 80%;
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 10px;
  :first-child{
    margin-top:-30px;
    box-shadow: 0 -6px 30px #24201C;
  }
`;

const StyledLink = styled(Link)`
text-decoration: none;
`;

const url = `${BASE_URL}/api/posts`;
console.log(url);

const Posts = () => {
  const { data, isLoading, isError } = useApi(url, []);
  console.log(data);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMessage>A error has occurred</ErrorMessage>;
  }

  if (data) {
    return (
      <Background>
        {data.map((post) => (
          <PostContainer key={post.id}>
            <StyledLink to={`/detail/${post.id}`}>
              <H2 primary title={post.attributes.title} />
              <P primary paragraph={post.attributes.short_description} />
              <Button text="Read more" />
            </StyledLink>
          </PostContainer>
        ))}
      </Background>
    )
  }
}

export default Posts;