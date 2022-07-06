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

const InfoText = styled.div`
@media ${({ theme }) => theme.devices.tabletS} { 
  margin-right: 40px;
}
`;

const LoginIntro = () => {
  return (
    <Div>
      <Container>
        <Flex>
          <InfoText>
            <H1 title="Login to your account" />
            <P paragraph="You need to have an administrator account to login." />
            <P paragraph="Contact post@post.no if you are having problems
or need a to create a new account."/>
          </InfoText>
          <Illustration src="images/loginDrawing.png" alt="image" height="200px" />
        </Flex>
      </Container>
    </Div>
  );
};

export default LoginIntro;