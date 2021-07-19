const FormLogin = ({email,password,setEmail,setPassword,submitHandler})=>(
    <form className="container mb-3" onSubmit={submitHandler}>
      <div className="form-group">
        <label>Email</label>
        <input
          className="form-control"
          type="email"
          placeholder="Enter your Email here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>Password</label>
        <input
          className="form-control"
          type="password"
          placeholder="Enter your password here"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <button className="mt-3" type="submit">Submit</button>
    </form>
  );

export default FormLogin