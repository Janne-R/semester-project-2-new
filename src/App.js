import { ThemeProvider } from "styled-components";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Detail from "./components/pages/detail/Detail";
import Admin from "./components/pages/admin/Admin";
import Header from "./components/Header";
import theme from "./layout/theme";
import GlobalStyle from "./layout/GlobalStyles";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext";
import FooterWrapper from "./components/Footer";
import Wrapper from "./components/ui/Wrapper";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Header />
          <Wrapper>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/detail/:id" exact element={<Detail />} />
              <Route path="/admin" exact element={<Admin />} />
            </Routes>
          </Wrapper>
          <FooterWrapper />
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;