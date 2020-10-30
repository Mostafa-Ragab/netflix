import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Browse, SignUp, SignIn } from "./pages";
import * as ROUTES from "./constants/routes";
export function App() {
	return (
		<Router>
			<Route exact path="/signin">
				<SignIn />
			</Route>
			<Route exact path="/browse">
				<Browse />
			</Route>
			<Route exact path="/signup">
				<SignUp />
			</Route>

			<Route exact path={ROUTES.HOME}>
				<Home />
			</Route>
		</Router>
	);
}
