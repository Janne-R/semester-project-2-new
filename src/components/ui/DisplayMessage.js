import styled from "styled-components";

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.textColor};
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.secondaryColorDark};
  border-radius: 6px;
`;

export const ErrorMessage = styled(Message)`
    background-color: red;
`;

export const SuccessMessage = styled(Message)`
  background-color: green;
`;