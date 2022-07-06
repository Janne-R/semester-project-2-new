import styled from "styled-components";

const StyledH1 = styled.h1`
  color: ${props => props.primaryColor ? ({ theme }) => theme.colors.textColorDark : ({ theme }) => theme.colors.textColorLight};
`;

const StyledH2 = styled.h2`
  color: ${props => props.primaryColor ? ({ theme }) => theme.colors.textColorDark : ({ theme }) => theme.colors.textColorLight};
`;

const StyledH3 = styled.h3`
  color: ${props => props.primaryColor ? ({ theme }) => theme.colors.textColorDark : ({ theme }) => theme.colors.textColorLight};
`;

const StyledH4 = styled.h4`
  color: ${props => props.primaryColor ? ({ theme }) => theme.colors.textColorDark : ({ theme }) => theme.colors.textColorLight};
  text-transform: ${props => props.uppercase ? "uppercase" : "lowercase"};
`;

const StyledP = styled.p`
  color: ${props => props.primaryColor ? ({ theme }) => theme.colors.textColorDark : ({ theme }) => theme.colors.textColorLight};
  white-space: pre-wrap;
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

export const H3 = ({ title, primary }) => {
  return (
    <StyledH3 primaryColor={primary} >{title}</StyledH3>
  );
};

export const H4 = ({ title, primary, uppercase }) => {
  return (
    <StyledH4 primaryColor={primary} uppercase={uppercase}>{title}</StyledH4>
  );
};

export const P = ({ paragraph, primary }) => {
  return (
    <StyledP primaryColor={primary}>{paragraph}</StyledP>
  );
};