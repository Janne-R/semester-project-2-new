import { H1, P } from "../../DisplayText";
import useApi from "../../../hooks/useApi";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../constants/api";
import Loader from "../../ui/Loader";
import { ErrorMessage } from "../../ui/DisplayMessage";
import styled from "styled-components";

const PostContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundColorLight};
  margin: 0 auto;
  width: 80%;
  max-width: 800px;
  margin-bottom: 40px;
  margin-top: 40px;
  border-radius: 5px;
  padding: 10px;
`;

const CodeContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  margin-top: 50px; 
  padding: 10px;
  border-radius: 5px;
  border: solid 0.5em ${({ theme }) => theme.colors.primaryColor};
  border-left-color: ${({ theme }) => theme.colors.highLightColor};
`;

const Detail = () => {
  let { id } = useParams();
  const url = `${BASE_URL}/api/posts/${id}`;

  const { data: post, isLoading, isError } = useApi(url);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMessage>A error has occurred</ErrorMessage>;
  }

  if (post) {
    return (
      <main>
        <PostContainer>
          <H1 primary title={post.attributes.title} />
          <P primary paragraph={post.attributes.short_description} />
          <P primary paragraph={post.attributes.description} />
          <CodeContainer>
            <P paragraph={post.attributes.code} />
          </CodeContainer>
        </PostContainer>
      </main>
    );
  };
};

export default Detail;