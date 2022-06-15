import { useState } from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import AuthContext from "../context/AuthContext";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.backgroundColorLight};
  padding: 5px;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-top: -20px;
`;

const Ul = styled.ul`
  display: ${(props) => props.menu ? "flex" : "none"};
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 0;
  list-style-type: none;
  li {
    margin-bottom:20px;
    @media ${({ theme }) => theme.devices.tabletS} { 
      margin-bottom: 10px;
    }
    a{
      text-decoration: none;
      font-size: 21px;
      color: ${({ theme }) => theme.colors.textColorDark};
    }
  }
  @media ${({ theme }) => theme.devices.tabletS} { 
    display: flex;
    flex-direction: row;
  }
`;

const BurgerMenu = styled(FiMenu)`
  @media ${({ theme }) => theme.devices.tabletS} { 
    display: none;
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
    <Nav>
      <BurgerMenu color="black" size="2rem" onClick={() => setShowMenu(!showMenu)} />
      <Ul menu={showMenu}>
        <li>
          <NavLink to="/" style={({ isActive }) =>
            (isActive ? { textDecorationLine: "underline" } : { textDecorationLine: "none" })}>
            Home
          </NavLink>
        </li>

        <li>
          {auth ?
            <Button onClick={logout}>Log out</Button>
            :
            <NavLink to="/login" style={({ isActive }) =>
              (isActive ? { textDecorationLine: "underline" } : { textDecorationLine: "none" })}>
              Login
            </NavLink>
          }
        </li>
      </Ul>
    </Nav>
  );
};

export default Navigation;