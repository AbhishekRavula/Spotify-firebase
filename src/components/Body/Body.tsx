import { Header } from "../Header";
import "./Body.css";

export const Body = props => {
  return (
    <div className="body-container">
      {/* <div className="header"> */}
      <Header />
      {/* </div> */}
      <div className="main-content">{props.children}</div>
    </div>
  );
};
