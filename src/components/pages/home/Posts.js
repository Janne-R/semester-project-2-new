import useApi from '../../../hooks/useApi';
//import styled from "styled-components";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../constants/api";
import Loader from "../../common/ui/Loader";
import { ErrorMessage } from "../../common/ui/DisplayMessage";

//import Container from "../../common/ui/Container";

/*const Background = styled.div`
 background-color: ${({ theme }) => theme.colors.primaryColor};
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostContainer = styled.div`
 background-color: ${({ theme }) => theme.colors.backgroundColorLight};
 width: 80%;
 margin-bottom: 20px;
 border-radius: 5px;
`;*/

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
      <div>
        {data.map((post) => (
          <div key={post.id}>
            <Link to={`/detail/${post.id}`}>
              <p>{post.attributes.title}</p>
            </Link>
          </div>
        ))}
      </div>
    )
  }
}

export default Posts;