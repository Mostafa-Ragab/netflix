import React, { useState, useContext, useEffect } from "react";
import { FirebaseContext } from "../context/firebase";
import ProfileContainer from "./profile";
import { Loading } from "../components";
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
			<Header src={joker1}>
				<p>hello raslan</p>
			</Header>
		</>
	) : (
		<ProfileContainer user={user} setProfile={setProfile} />
	);
}
