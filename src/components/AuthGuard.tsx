import { useSelector } from "react-redux";
import { Route, RouteProps, Redirect } from "react-router-dom";
import { getIsAuthorized } from "../redux/selectors/authSelector";
import Wrapper from "./Wrapper/Wrapper";

export function AuthGuard(props: RouteProps) {
  const { component: Component, ...rest } = props;
  const isAuthorized = useSelector(getIsAuthorized);

  return (
    <Route
      {...rest}
      render={props => {
        if (false) {
          return (
            <Redirect
              to={{
                pathname: "/signin",
                state: props.location
              }}
            />
          );
        }

        return (
          <Wrapper>
            <Component {...props} />
          </Wrapper>
        );
      }}
    />
  );
}
