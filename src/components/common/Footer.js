import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Container from "./Container";
import { H4, P } from "./DisplayText";
import { FaPhoneAlt, FaMapMarker } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.backgroundColorLight};
`;

const Flex = styled.div`
  @media ${({ theme }) => theme.devices.tabletS} { 
    display: flex;
    justify-content: space-between;
  }
`;

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  li {
    margin-bottom:20px;
    margin-top:10px;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.textColorDark};
    }
  }
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  height: 25px;
`;

const PhoneIcon = styled(FaPhoneAlt)`
  margin-right: 10px;
`;

const MailIcon = styled(MdEmail)`
  margin-right: 10px;
`;

const MapIcon = styled(FaMapMarker)`
  margin-right: 10px;
`;

const CenterP = styled.p`
  text-align: center;
`;

const Div = styled.div`
  margin-top: 50px;
  @media ${({ theme }) => theme.devices.tabletS} { 
    margin-top:0;
  }
`;

const FooterWrapper = () => (
  <Footer>
    <Container>
      <Flex>
        <div>
          <H4 primary uppercase title="Navigation" />
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
        <Div>
          <H4 primary uppercase title="Contact Information" />
          <Ul>
            <Li>
              <PhoneIcon />
              <P primary paragraph="+47 123 12 123" aria-label="Phone" />
            </Li>
            <Li>
              <MailIcon />
              <P primary paragraph="post@codestack.com" aria-label="Email" />
            </Li>
            <Li>
              <MapIcon />
              <P primary paragraph="123 Street, Norway" aria-label="Adress" />
            </Li>
          </Ul>
        </Div>
      </Flex>
      <CenterP>Copyright ©CodeStack</CenterP>
    </Container>
  </Footer>
);

export default FooterWrapper;