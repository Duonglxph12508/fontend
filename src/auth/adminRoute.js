
import { isAuthenticated } from "auth";
import { Route, Redirect } from "react-router-dom";
const AdminRoute = (props) => {
  // console.log(isAuthenticated());
  return (
    <Route
      render={() =>
        isAuthenticated() && isAuthenticated().user.id == 1 ? (
          props.children
        ) : (
          <Redirect
            to={{
              pathname: "/signin"
            }}
          />
        )
      }
    />
  );
};
export default AdminRoute;
