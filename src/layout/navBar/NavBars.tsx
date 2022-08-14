
export default function NavBars() {
  return (
    <div className="nav-bar-container">
      <div className="layout-nav">
        <div className="button-slide">
          <i className="fa-solid fa-bars-progress"></i>
        </div>
        <div className="search">
          <input
            type="text"
            className="form-control"
            placeholder="Enter text..."
          />
        </div>
        <div className="user-info">
          <img
            src="https://e7.pngegg.com/pngimages/1004/160/png-clipart-computer-icons-user-profile-social-web-others-blue-social-media-thumbnail.png"
            alt=""
          />
          <div className="info-item">
            <ul className="list-group">
              <li className="list-group-item bg-success text-white" aria-current="true">
                My Account  
              </li>
              <li className="list-group-item">Profile</li>
              <li className="list-group-item">Messages</li>
              <li className="list-group-item text-danger">Logout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
