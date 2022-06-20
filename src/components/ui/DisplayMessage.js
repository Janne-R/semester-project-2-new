import styled from "styled-components";

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.textColor};
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