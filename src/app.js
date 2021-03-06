import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Home, Browse, SignUp, SignIn } from "./pages";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { UseAuthListener } from "./hooks";
export function App() {
	const { user } = UseAuthListener();
	return (
		<Router>
			<Switch>
				<IsUserRedirect
					user={user}
					loggedInPath={ROUTES.BROWSE}
					path={ROUTES.SIGN_IN}
				>
					<SignIn />
				</IsUserRedirect>
				<IsUserRedirect
					user={user}
					loggedInPath={ROUTES.BROWSE}
					path={ROUTES.SIGN_UP}
				>
					<SignUp />
				</IsUserRedirect>
				<ProtectedRoute user={user} path={ROUTES.BROWSE}>
					<Browse />
				</ProtectedRoute>
				<IsUserRedirect
					user={user}
					loggedInPath={ROUTES.BROWSE}
					path={ROUTES.HOME}
				>
					<Home />
				</IsUserRedirect>
			</Switch>
		</Router>
	);
}
