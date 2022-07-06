import styled from "styled-components";
import Container from "../../ui/Container";

const CenterP = styled.p`
text-align: center;
`;

const IntroText = () => {
  return (
    <Container>
      <CenterP>[FRONT_END_DEVELOPMENT]</CenterP>
      <CenterP>Front-end technologie resources. For developers, by developers.</CenterP>
    </Container>
  );
};

export default IntroText;