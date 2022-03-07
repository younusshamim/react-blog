import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>

        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/1089462/pexels-photo-1089462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <label htmlFor="fileInput">
              <i class="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>

          <label>Username</label>
          <input type="text" placeholder="Younus" />
          <label>Email</label>
          <input type="email" placeholder="younus@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>

      <Sidebar />
    </div>
  );
};

export default Settings;
