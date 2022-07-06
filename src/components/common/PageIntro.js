import Container from "./Container";
import { H1, P } from "./DisplayText";
import styled from "styled-components";
import Illustration from "./Illustration";

const Div = styled.div`
 background-color: ${({ theme }) => theme.colors.primaryColor};
`;

const Flex = styled.div`
  @media ${({ theme }) => theme.devices.tabletS} { 
    display: flex;
    justify-content: space-between;
  }
`;

const PageIntro = ({ title, children, src, height, alt }) => {
  return (
    <Div>
      <Container>
        <Flex>
          <div>
            <H1 title={title} />
            <P paragraph={children} />
          </div>
          <Illustration src={src} alt={alt} height={height} />
        </Flex>
      </Container>
    </Div>
  );
};

export default PageIntro;