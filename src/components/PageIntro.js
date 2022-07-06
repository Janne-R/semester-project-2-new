import Container from "../components/ui/Container";
import { H1, P } from "../components/DisplayText";
import styled from "styled-components";
import Illustration from "../components/ui/Illustration";

const Div = styled.div`
 background-color: ${({ theme }) => theme.colors.primaryColor};
`;

const Flex = styled.div`
  @media ${({ theme }) => theme.devices.tabletS} { 
    display: flex;
    justify-content: space-between;
  }
`;

const PageIntro = ({ title, paragraph, src, height, alt }) => {
  return (
    <Div>
      <Container>
        <Flex>
          <div>
            <H1 title={title} />
            <P paragraph={paragraph} />
          </div>
          <Illustration src={src} alt={alt} height={height} />
        </Flex>
      </Container>
    </Div>
  );
};

export default PageIntro;