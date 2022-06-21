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
    padding: 10px 0 10px 0;
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
    @media ${({ theme }) => theme.devices.tabletS} { 
      margin-bottom: 10px;
      margin-left: 50px;
    
    }
    a{
      text-decoration: none;
      font-size: 21px;
    }
  }
  @media ${({ theme }) => theme.devices.tabletS} { 
    display: flex;
    flex-direction: row;
    position: unset;
  }
`;

const BurgerMenu = styled(FiMenu)`
  @media ${({ theme }) => theme.devices.tabletS} { 
    display: none;
  }
`;

const Link = styled(NavLink)`
  color: ${({ theme }) => theme.colors.textColorDark};
`;

const LoginButton = styled(NavLink)`
 color: ${({ theme }) => theme.colors.textColorDark};
 @media ${({ theme }) => theme.devices.tabletS} { 
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  border-radius: 10px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.textColorLight};
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
`;



const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [auth, setAuth] = useContext(AuthContext);

  const navigate = useNavigate();

  const logout = () => {
    console.log("hei");
    setAuth(null);
    navigate("/");
  }

  return (
    <Container>
      <Flex>
        <Link to="/"><img src="images/logoNew.png" alt="logo" height="50px" /></Link>
        <nav>
          <BurgerMenu color="black" size="2rem" onClick={() => setShowMenu(!showMenu)} />
          <Ul menu={showMenu}>
            <li>
              <Link to="/" style={({ isActive }) =>
                (isActive ? { textDecorationLine: "underline" } : { textDecorationLine: "none" })}>
                Home
              </Link>
            </li>
            <li>
              {auth ?
                <LogoutButton text="Logout" onClick={logout} />
                :
                <LoginButton to="/login" style={({ isActive }) =>
                  (isActive ? { textDecorationLine: "underline" } : { textDecorationLine: "none" })}>
                  Login
                </LoginButton>
              }
            </li>
          </Ul>
        </nav>
      </Flex>
    </Container>
  );
};

export default Navigation;