import useApi from '../../../hooks/useApi';
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../constants/api";
import Loader from "../../common/Loader";
import { ErrorMessage } from "../../common/Messages";
import Container from "../../common/Container";
import Button from "../../common/Button";
import { H2, P } from "../../common/DisplayText";
import SearchPosts from "./SearchPosts";

const Background = styled.section`
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
  :first-child {
    margin-top:-30px;
    box-shadow: 0 -6px 30px #24201C;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const url = `${BASE_URL}/api/posts`;

const PostList = () => {
  const { data: posts, isLoading, isError } = useApi(url, null);
  const [searchResult, setSearchResult] = useState(null);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMessage>A error has occurred</ErrorMessage>;
  }

  const postsToPresent = searchResult ? searchResult : posts;

  if (posts) {
    const postsByNewest = postsToPresent.sort((firstPost, secondPost) => {
      const firstPostUtcTime = (new Date(firstPost.attributes.createdAt)).getTime();
      const secondPostUtcTime = (new Date(secondPost.attributes.createdAt)).getTime();

      return secondPostUtcTime - firstPostUtcTime;
    });

    return (
      <>
        <SearchPosts posts={posts} searchResultUpdated={setSearchResult} />
        <Background>
          {postsByNewest.map((post) => (
            <PostContainer as="article" key={post.id}>
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
    );
  };
};

export default PostList;