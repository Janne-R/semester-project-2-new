import Navigation from "./Navigation";
import HeaderImage from "./HeaderImage";
import styled from "styled-components";

const HeaderStyle = styled.header`
 background-color: ${({ theme }) => theme.colors.backgroundColorLight};
 margin-top: -20px;

`;

const Header = () => {
  return (
    <HeaderStyle>
      <Navigation />
      <HeaderImage />
    </HeaderStyle>
  )
}

export default Header;