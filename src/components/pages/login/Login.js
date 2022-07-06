import LoginForm from "./LoginForm";
import PageIntro from "../../PageIntro";

const Login = () => {
  return (
    <main>
      <PageIntro title="Login to your account" paragraph="Login to your account with the form you find on this page." src="images/loginDrawing.png" height="200px" alt="Illustration" />
      <LoginForm />
    </main>
  )
}

export default Login;