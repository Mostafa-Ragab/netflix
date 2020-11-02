import React, { useState, useContext, useEffect } from "react";
import { FirebaseContext } from "../context/firebase";
import ProfileContainer from "./profile";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import { Header, Loading } from "../components";

export default function BrowseContainer({ slides }) {
	const [profile, setProfile] = useState({});

	const [loading, setLoading] = useState(true);

	const { firebase } = useContext(FirebaseContext);

	const user = firebase.auth().currentUser || {};

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, [profile.displayName]);

	return profile.displayName ? (
		<>
			{loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

			<Header src="joker1" dontShowOnSmallViewPort>
				<Header.Frame>
					<Header.Groupe>
						<Header.Logo to={ROUTES.HOME} src={logo} alt="NETFLIX" />
						<Header.TextLink>Series</Header.TextLink>
						<Header.TextLink>Films</Header.TextLink>
					</Header.Groupe>
				</Header.Frame>
				<Header.Feature>
					<Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
					<Header.Text>
						Forever alone in a crowd, failed comedian Arthur Fleck seeks
						connection as he walks the streets of Gotham City. Arthur wears two
						masks -- the one he paints for his day job as a clown, and the guise
						he projects in a futile attempt to feel like he's part of the world
						around him.
					</Header.Text>
				</Header.Feature>
			</Header>
		</>
	) : (
		<ProfileContainer user={user} setProfile={setProfile} />
	);
}
