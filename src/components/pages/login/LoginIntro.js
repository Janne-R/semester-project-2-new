import Container from "../../ui/Container";
import { H1, P } from "../../DisplayText"
import styled from "styled-components";
import Illustration from "../../ui/Illustration";

const Div = styled.div`
 background-color: ${({ theme }) => theme.colors.primaryColor};
`;

const Flex = styled.div`
  @media ${({ theme }) => theme.devices.tabletS} { 
    display: flex;
    justify-content: space-between;
  }
`;

const LoginIntro = () => {
  return (
    <Div>
      <Container>
        <Flex>
          <div>
            <H1 title="Login to your account" />
            <P paragraph="Welcome to Code Stack, this is the wiki-page for
          front-end development. Browse all our post
          below or try the search filter."/>
          </div>
          <Illustration src="images/loginDrawing.png" alt="image" height="200px" />
        </Flex>
      </Container>
    </Div>
  );
};

export default LoginIntro;