import './topbar.scss';
import { Link } from 'react-router-dom';

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon bx bxl-facebook-square"></i>
        <i className="topIcon bx bxl-twitter"></i>
        <i className="topIcon bx bxl-pinterest"></i>
        <i className="topIcon bx bxl-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">{user && 'LOGOUT'}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img src="./images/wonik.png" alt="" className="topImg" />
        ) : (
          <>
            <Link className="link" to="/login">
              LOGIN
            </Link>
            <Link className="link" to="/register">
              REGISTER
            </Link>
          </>
        )}
        <i className="topSearchIcon bx bx-search-alt-2"></i>
      </div>
    </div>
  );
}
