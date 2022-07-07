import './login.scss';

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm">
        <label htmlFor="">Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your email..."
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter yout password..."
        />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">Register</button>
    </div>
  );
}
