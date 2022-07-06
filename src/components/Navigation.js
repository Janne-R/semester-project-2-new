import { useState } from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import AuthContext from "../context/AuthContext";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: -12px;
  margin-top: 10px;
`;

const Ul = styled.ul`
  display: ${(props) => props.menu ? "flex" : "none"};
  background-color: ${({ theme }) => theme.colors.backgroundColorLight};
  position: absolute;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  right: 0;
  width:100% ;
  z-index: 1;
  margin-top: 5px; 
  li {
    margin-bottom:20px;
    margin-top:10px;
  }
    a {
      text-decoration: none;
      font-size: 21px;
    }
  @media ${({ theme }) => theme.devices.tabletS} { 
    display: flex;
    flex-direction: row;
    position: unset;
  }
`;

const Li = styled.li`
  @media ${({ theme }) => theme.devices.tabletS} { 
    margin-bottom: 10px;
    margin-right: 50px;
  }
`;

const BurgerMenu = styled(FiMenu)`
  @media ${({ theme }) => theme.devices.tabletS} { 
    display: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.textColorDark};
  &.active {
    text-decoration: underline;
  }
`;

const LoginButton = styled(NavLink)`
  &.active {
    text-decoration: underline;
  }
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textColorDark};
  width: 150px ;
  @media ${({ theme }) => theme.devices.tabletS} { 
    background-color: ${({ theme }) => theme.colors.primaryColor};
    border-radius: 10px;
    padding: 10px;
    color: ${({ theme }) => theme.colors.textColorLight}; 
  }
  transition-duration: 0.4s;
  :hover{
    background-color: ${({ theme }) => theme.colors.highLightColor};
  }
`;

const LogoutButton = styled(Button)`
 background-color: ${({ theme }) => theme.colors.backgroundColorLight};
 color: ${({ theme }) => theme.colors.textColorDark};
 margin: 0;
 padding:0 ;
 @media ${({ theme }) => theme.devices.tabletS} { 
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.textColorLight};
  padding: 10px;
 }
 transition-duration: 0.4s;
  :hover{
    background-color: ${({ theme }) => theme.colors.highLightColor};
  }
`;

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [auth, setAuth] = useContext(AuthContext);

  const navigate = useNavigate();

  const logout = () => {
    const dologOut = window.confirm("Are you sure you want to logout?");
    if (dologOut) {
      setAuth(null);
      navigate("/");
    }
  };

  return (
    <Container>
      <Flex>
        <NavLink to="/"><img src="/images/logoNew.png" alt="logo" height="70px" /></NavLink>
        <nav>
          <BurgerMenu color="black" size="2rem" onClick={() => setShowMenu(!showMenu)} />
          <Ul menu={showMenu}>
            <Li>
              <StyledNavLink to="/">
                Home
              </StyledNavLink>
            </Li>
            <>
              {auth ? (
                <>
                  <Li>
                    <StyledNavLink to="/admin">
                      Admin
                    </StyledNavLink>
                  </Li>
                  <li>
                    <LogoutButton text="Logout" onClick={logout} />
                  </li>
                </>
              ) :
                <li>
                  <LoginButton to="/login">
                    Login
                  </LoginButton>
                </li>
              }
            </>
          </Ul>
        </nav>
      </Flex>
    </Container>
  );
};

export default Navigation;