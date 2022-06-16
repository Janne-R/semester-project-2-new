import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
body, html{
  height: 100%;
  margin: 0;
}
body{
  font-family: 'Open Sans', sans-serif;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
}
h1, h2, h3, h4{
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}
h1{
  font-size: 24px;
  @media ${({ theme }) => theme.devices.tabletS} { 
    font-size: 36px;
    }
}
h2{
  font-size: 21px;
}
@media ${({ theme }) => theme.devices.tabletS} { 
    font-size: 30px;
    }
h3{
  font-size: 18px;
  @media ${({ theme }) => theme.devices.tabletS} { 
    font-size: 28px;
    }
}
p{  
  font-size: 16px;
 
    @media ${({ theme }) => theme.devices.tabletS} { 
    font-size: 21px;
    }
}
`
export default GlobalStyle;
