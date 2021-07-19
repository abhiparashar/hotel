import { useState } from "react";
import FormLogin from "../components/LoginForm";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        Login here
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <FormLogin
            email={email}
            password={password}
            setEmail = {setEmail}
            setPassword = {setPassword}
            submitHandler = {submitHandler}
             />
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
