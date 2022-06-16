import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import Admin from "./pages/Admin";
import Header from "./components/Header";
import theme from "./components/layout/theme";
import GlobalStyle from "./components/layout/GlobalStyles";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/detail/:id" exact element={<Detail />} />
            <Route path="/admin" exact element={<Admin />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>

  );
}

export default App;

