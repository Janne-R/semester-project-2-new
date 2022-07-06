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


const AdminIntro = () => {
  return (
    <Div>
      <Container>
        <Flex>
          <div>
            <H1 title="Welcome to your admin page" />
            <P paragraph="Share your code with our community." />
          </div>
          <Illustration src="images/codeSharing.png" alt="image" height="140px" />
        </Flex>
      </Container>
    </Div>

  );
};

export default AdminIntro;