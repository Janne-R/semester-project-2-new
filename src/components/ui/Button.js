import styled from "styled-components";

const ButtonStyle = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.textColorLight};
  font-size: 21px;
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin: 35px 0 15px 0;
  width: ${props => props.width};
`;

const Button = ({ text, ...props }) => {
  return (
    <>
      <ButtonStyle {...props}>{text} </ButtonStyle>
    </>
  )
}

export default Button;