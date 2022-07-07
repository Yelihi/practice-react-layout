import './register.scss';

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm">
        <label htmlFor="">Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter yout password..."
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">Login</button>
    </div>
  );
}
