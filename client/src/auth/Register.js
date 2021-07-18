import { useState } from "react";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert("abhishek");
  };

  const registerform = () => (
    <form className="container mb-3" onSubmit={submitHandler}>
      <div className="form-group">
        <label className="form-label">Name</label>
        <input
          className="form-control"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="form-label">Name</label>
        <input
          className="form-control"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="form-label">Name</label>
        <input
          className="form-control"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="mt-3">Submit</button>
    </form>
  );
  return (
    <div className="row">
      <div className="col md-6">{registerform()}</div>
    </div>
  );
};
export default Register;
