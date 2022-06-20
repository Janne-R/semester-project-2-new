import styled from "styled-components";

const P = styled.p`
color: ${props => props.primaryColor ? ({ theme }) => theme.colors.textColorDark : ({ theme }) => theme.colors.textColorLight};
`;

const Paragraph = ({ Paragraph, primary }) => {
  return (
    <P primaryColor={primary}>{Paragraph}</P>
  );
};

export default Paragraph;