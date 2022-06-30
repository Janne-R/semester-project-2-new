import styled from "styled-components";

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.textColorLight};
  max-width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.highLightColor};
  border-radius: 6px;
`;

export const ErrorMessage = styled(Message)`
      background-color: ${({ theme }) => theme.colors.errorColor};
`;

export const SuccessMessage = styled(Message)`
   background-color: ${({ theme }) => theme.colors.successColor};
`;