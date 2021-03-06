import styled from "styled-components";
import Container from "../../common/Container";
import { BiSearchAlt2 } from 'react-icons/bi';

const Form = styled.form`
  margin-top: 80px;
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
  align-items: center;  
`;

const Input = styled.input`
  border: 2px solid black;
  border-radius: 12px;
  padding: 10px;
  width: 80%;
  @media ${({ theme }) => theme.devices.tabletS} { 
    width: 50%;
  }
`;

const Icon = styled(BiSearchAlt2)`
  margin-left: -30px;
`;

const SearchPosts = (props) => {
  const onKeyUp = (event) => {
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredPosts = props.posts.filter((post) => {
      if (post.attributes?.title?.toLowerCase().includes(searchValue) || post.attributes?.short_description?.toLowerCase().includes(searchValue)) {
        return true;
      }
      return false;
    });

    props.searchResultUpdated(filteredPosts);
  };

  return (
    <Container as="section">
      <Form>
        <Input onChange={onKeyUp} placeholder="Search for posts here..." />
        <Icon size="1.5rem" />
      </Form>
    </Container>
  );
};

export default SearchPosts;