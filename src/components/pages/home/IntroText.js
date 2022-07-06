import styled from "styled-components";
import Container from "../../common/Container";

const CenterP = styled.p`
text-align: center;
`;

const IntroText = () => {
  return (
    <Container as="section">
      <CenterP>[FRONT_END_DEVELOPMENT]</CenterP>
      <CenterP>Front-end technologie resources. For developers, by developers.</CenterP>
    </Container>
  );
};

export default IntroText;