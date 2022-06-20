import styled from "styled-components";

const StyledH1 = styled.h1`
color: ${props => props.primaryColor ? ({ theme }) => theme.colors.textColorDark : ({ theme }) => theme.colors.textColorLight};
`;

const StyledH2 = styled.h2`
color: ${props => props.primaryColor ? ({ theme }) => theme.colors.textColorDark : ({ theme }) => theme.colors.textColorLight};
`;

const StyledP = styled.p`
color: ${props => props.primaryColor ? ({ theme }) => theme.colors.textColorDark : ({ theme }) => theme.colors.textColorLight};
`;

export const H1 = ({ title, primary }) => {
  return (
    <StyledH1 primaryColor={primary}>{title}</StyledH1>
  );
};

export const H2 = ({ title, primary }) => {
  return (
    <StyledH2 primaryColor={primary}>{title}</StyledH2>
  );
};

export const P = ({ paragraph, primary }) => {
  return (
    <StyledP primaryColor={primary}>{paragraph}</StyledP>
  );
};



