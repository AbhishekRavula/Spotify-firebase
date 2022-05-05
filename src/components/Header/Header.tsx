import { Logout } from "../UserAuthenticate";
import "./Header.css";

const Header = props => {
  return (
    <div className="HeaderContainer">
      <div className="text">Welcome {localStorage.getItem("username")}</div>
      <div>
        <Logout />
      </div>
    </div>
  );
};

export { Header };
