import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Container from "./ui/Container";
import { H3, P } from "./DisplayText";
import { FaPhoneAlt, FaMapMarker } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = styled.footer`
 background-color: ${({ theme }) => theme.colors.backgroundColorLight};
`;

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  li {
    margin-bottom:20px;
    margin-top:10px;
    a{
      text-decoration: none;
      font-size: 18px;
      color: ${({ theme }) => theme.colors.textColorDark};
    }
  }`

const Li = styled.li`
  display: flex;
  align-items: center;
  margin: 0;
  `;

const FooterWrapper = () => (
  <Footer>
    <Container>
      <div>
        <H3 primary uppercase title="Navigation" />
        <Ul>
          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">
              Login
            </NavLink>
          </li>
        </Ul>
      </div>


      <div>
        <H3 primary uppercase title="Contact Information" />
        <Ul>
          <Li>
            <FaPhoneAlt />
            <P primary paragraph="Phone" />
          </Li>
          <Li>
            <MdEmail />
            <P primary paragraph="mail" />
          </Li>
          <Li>
            <FaMapMarker />
            <P primary paragraph="adress" />
          </Li>
        </Ul>
      </div>
      <p>Copyright ©Janne Ringdal</p>
    </Container>

  </Footer>
);

export default FooterWrapper;