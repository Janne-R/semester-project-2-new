import LoginForm from "./LoginForm";
import PageIntro from "../../common/PageIntro";

const Login = () => {
  return (
    <>
      <PageIntro title="Login to your account" src="images/loginDrawing.png" height="200px" alt="Illustration">
        Login to your account with the form you find on this page.
      </PageIntro>
      <LoginForm />
    </>
  )
}

export default Login;