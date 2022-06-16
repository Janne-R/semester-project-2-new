import { useState } from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import AuthContext from "../../context/AuthContext";

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

const LinkButton = styled(NavLink)`
 color: ${({ theme }) => theme.colors.textColorDark};
 @media ${({ theme }) => theme.devices.tabletS} { 
  background-color: ${({ theme }) => theme.colors.primaryColor};
  border-radius: 10px;
  padding: 5px 20px;
  color: ${({ theme }) => theme.colors.textColorLight};
  }

`;

const Button = styled.button`
border-radius: 10px;
padding: 8px;
border: none;
`;

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [auth, setAuth] = useContext(AuthContext);

  const navigate = useNavigate();

  function logout() {
    setAuth(null);
    navigate("/");
  }

  return (
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
              <Button onClick={logout}>Log out</Button>
              :
              <LinkButton to="/login" style={({ isActive }) =>
                (isActive ? { textDecorationLine: "underline" } : { textDecorationLine: "none" })}>
                Login
              </LinkButton>
            }
          </li>
        </Ul>
      </nav>

    </Flex>
  );
};

export default Navigation;