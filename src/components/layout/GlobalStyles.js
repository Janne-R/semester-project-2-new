import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
body, html{
  height: 100%;
  padding: 10px;
}
body{
  font-family: 'Open Sans', sans-serif;
}
h1, h2, h3, h4{
  font-family: 'Roboto', sans-serif;
  font-weight: 200;
}
h1{
  font-size: 36px;
}
h2{
  font-size: 24px;
}
h3{
  font-size: 21px;
}
p{  
  font-size: 18px;
}
`
export default GlobalStyle;
