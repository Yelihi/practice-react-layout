import './sidebar.scss';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="./images/sidebar1.jpg" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A rem
          voluptas facere nisi beatae iure nihil,
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sideberIcon bx bxl-facebook-square"></i>
          <i className="sideberIcon bx bxl-twitter"></i>
          <i className="sideberIcon bx bxl-pinterest"></i>
          <i className="sideberIcon bx bxl-instagram"></i>
        </div>
      </div>
    </div>
  );
}
