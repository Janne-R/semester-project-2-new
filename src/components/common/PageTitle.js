import styled from "styled-components";

const H1 = styled.h1`
color: ${props => props.primaryColor ? ({ theme }) => theme.colors.textColorDark : ({ theme }) => theme.colors.textColorLight};
`;

const PageTitle = ({ title, primary }) => {
  return (
    <H1 primaryColor={primary}>{title}</H1>
  );
};

export default PageTitle;