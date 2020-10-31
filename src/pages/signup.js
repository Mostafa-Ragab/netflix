import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from "../containers/Header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

export default function SignUp() {
	const history = useHistory();
	const { firebase } = useContext(FirebaseContext);
	const [firstName, setFirstName] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");

	const isInvalid = firstName === "" || password === "" || emailAddress === "";
	const handleSignup = (event) => {
		event.preventDefault();
		// DO FIREBASE STUFF
	};
	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign Up</Form.Title>
					{Error && <Form.Error>{Error}</Form.Error>}
					<Form.Base onSubmit={handleSignup} method="POST">
						<Form.Input
							placeholder="first name"
							onChange={({ target }) => setFirstName(target.value)}
							value={firstName}
						/>
						<Form.Input
							placeholder="email address"
							value={emailAddress}
							onChange={({ target }) => setEmailAddress(target.value)}
						/>
						<Form.Input
							type="password"
							placeholder="password"
							autoComplete="off"
							value={password}
							onChange={({ target }) => setPassword(target.value)}
						/>
						<Form.Submit disabled={isInvalid} type="submit">
							Sign Up
						</Form.Submit>
						<Form.Text>
							already a user? <Form.Link to="/signin">Sign in now</Form.Link>
						</Form.Text>
						<Form.TextSmall>
							This page is protected by Google reCAPTCHA to ensure you're not a
							bot. Learn more.
						</Form.TextSmall>
					</Form.Base>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
}
