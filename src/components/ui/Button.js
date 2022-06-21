import styled from "styled-components";
import { IoIosArrowForward } from 'react-icons/io';

const ButtonStyle = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.textColorLight};
  font-size: 18px;
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin: 35px 0 15px 0;
  min-width: 20%;
`;

const Icon = styled(IoIosArrowForward)`
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.textColorLight};
`;

const Button = ({ text, ...props }) => {
  return (
    <>
      <ButtonStyle {...props}>{text}  <Icon /></ButtonStyle>
    </>
  )
}

export default Button;