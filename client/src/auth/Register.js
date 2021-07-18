import { useState } from "react";
import Registerform from "../components/Registerform";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.table({ name, email, password });
  };

  return (
    <>
    <div className="container-fluid bg-secondary p-5 text-center">
    Register here
    </div>
    <div className="container">
      <div className="row">
      <div className="col-md-6 offset-md-3">
        <Registerform
          name={name}
          email={email}
          password={password}
          setName={setName}
          setEmail={setEmail}
          setName={setEmail}
          setPassword={setPassword}
          submitHandler={submitHandler}
        />
      </div>
    </div>
    </div>
    </>
  );
};
export default Register;
