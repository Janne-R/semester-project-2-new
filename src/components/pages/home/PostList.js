import useApi from '../../../hooks/useApi';
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../constants/api";
import Loader from "../../ui/Loader";
import { ErrorMessage } from "../../ui/DisplayMessage";
import Container from "../../ui/Container";
import Button from "../../ui/Button";
import { H2, P } from "../../DisplayText";
import SearchPosts from "./SearchPosts";

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostContainer = styled(Container)`
  background-color: ${({ theme }) => theme.colors.backgroundColorLight};
  width: 80%;
  max-width: 800px;
  margin-bottom: 40px;
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

const PostList = () => {
  const { data: posts, isLoading, isError } = useApi(url, []);
  const [searchResult, setSearchResult] = useState(null);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMessage>A error has occurred</ErrorMessage>;
  }

  const postsToPresent = searchResult ? searchResult : posts;

  return (
    <>
      <SearchPosts posts={posts} searchResultUpdated={setSearchResult} />
      <Background>
        {postsToPresent.map((post) => (
          <PostContainer key={post.id}>
            <StyledLink to={`/detail/${post.id}`}>
              <H2 primary title={post.attributes.title} />
              <P primary paragraph={post.attributes.short_description} />
              <Button text="Read more" />
            </StyledLink>
          </PostContainer>
        ))}
        {searchResult && searchResult.length === 0 && posts.length > 0 && <ErrorMessage>No posts matching your search</ErrorMessage>}
        {posts.length === 0 && <ErrorMessage>Sorry we have no posts</ErrorMessage>}
      </Background>
    </>
  )
}

export default PostList;