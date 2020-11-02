import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Browse, SignUp, SignIn } from "./pages";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect } from "./helpers/routes";

export function App() {
	const user = {};
	return (
		<Router>
			<IsUserRedirect
				user={user}
				loggedInPath={ROUTES.BROWSE}
				path={ROUTES.SIGN_IN}
				exact
			>
				<SignIn />
			</IsUserRedirect>
			<IsUserRedirect
				user={user}
				loggedInPath={ROUTES.BROWSE}
				path={ROUTES.SIGN_UP}
				exact
			>
				<SignUp />
			</IsUserRedirect>
			<Route exact path="/browse">
				<Browse />
			</Route>
			<Route exact path={ROUTES.HOME}>
				<Home />
			</Route>
		</Router>
	);
}
