const Registerform = ({name,email,password,setName,setEmail,setPassword,submitHandler}) => (
    <form className="container mb-3" onSubmit={submitHandler}>
      <div className="form-group">
        <label className="form-label">Name</label>
        <input
          className="form-control"
          type="text"
          placeholder="Enter your Name here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="form-label">Email</label>
        <input
          className="form-control"
          type="email"
          placeholder="Enter your Email here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="form-label">Password</label>
        <input
          className="form-control"
          type="password"
          placeholder="Enter your Password here"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="mt-3">Submit</button>
    </form>
  );

  export default Registerform