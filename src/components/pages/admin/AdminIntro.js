import Container from "../../ui/Container";
import { H1, P } from "../../DisplayText"
import styled from "styled-components";

const Div = styled.div`
 background-color: ${({ theme }) => theme.colors.primaryColor};
`;

const Flex = styled.div`
  @media ${({ theme }) => theme.devices.tabletS} { 
    display: flex;
}
`;

const Img = styled.img`
  margin-top: 20px;
  margin-bottom: -55px;
  height:125px ;
  @media ${({ theme }) => theme.devices.mobileL} { 
    height:150px ;
  }
  @media ${({ theme }) => theme.devices.tabletS}{
    height: 175px;
  
  }
  @media ${({ theme }) => theme.devices.laptopS}{
    height: 200px;
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
          <Img src="images/codeSharing.png" alt="image" height="200px" />
        </Flex>
      </Container>
    </Div>

  )
}

export default AdminIntro;