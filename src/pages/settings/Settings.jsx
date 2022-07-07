import Sidebar from '../../component/sidebar/Sidebar';
import './settings.scss';

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form action="" className="settingsForm">
          <label htmlFor="">Profile Picture</label>
          <div className="settingsPP">
            <img src="./images/blog/my.jpeg" alt="" />
            <label htmlFor="fileInput">
              <i class="settingsPPIcon bx bx-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: 'none' }} />
          </div>
          <label htmlFor="">Username</label>
          <input type="text" placeholder="safak" />
          <label htmlFor="">Email</label>
          <input type="email" placeholder="safak@gmail.com" />
          <label htmlFor="">Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
