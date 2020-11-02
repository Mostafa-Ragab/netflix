import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import { Profiles } from "../components";

export default function ProfileContainer({ user, setProfile }) {
	return (
		<>
			<Header>
				<Header.Frame>
					<Header.Logo to={ROUTES.HOME} src={logo} alt="NETFLIX" />
				</Header.Frame>
			</Header>
			<Profiles>
				<Profiles.Title> Whos watching?</Profiles.Title>
				<Profiles.List>
					<Profiles.User
						onClick={() =>
							setProfile({
								displayName: user.displayName,
								photoURL: user.photoURL,
							})
						}
					>
						<Profiles.Picture src={user.photoURL} />
						<Profiles.Name>{user.displayName}</Profiles.Name>
					</Profiles.User>
				</Profiles.List>
			</Profiles>
		</>
	);
}
