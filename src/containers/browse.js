import React, { useState, useContext, useEffect } from "react";
import { FirebaseContext } from "../context/firebase";
import ProfileContainer from "./profile";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import { Card, Header, Loading } from "../components";

export default function BrowseContainer({ slides }) {
	const [profile, setProfile] = useState({});

	const [category, setCategory] = useState("series");

	const [loading, setLoading] = useState(true);

	const [searchTerm, setSearchTerm] = useState("");

	const { firebase } = useContext(FirebaseContext);
	const [slideRows, setSlideRows] = useState([]);

	const user = firebase.auth().currentUser || {};

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, [profile.displayName]);

	useEffect(() => {
		setSlideRows(slides[category]);
	}, [slides, category]);

	return profile.displayName ? (
		<>
			{loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

			<Header src="joker1" dontShowOnSmallViewPort>
				<Header.Frame>
					<Header.Groupe>
						<Header.Logo to={ROUTES.HOME} src={logo} alt="NETFLIX" />
						<Header.TextLink
							active={category === "series" ? "true" : "false"}
							onClick={() => setCategory("series")}
						>
							Series
						</Header.TextLink>
						<Header.TextLink
							active={category === "films" ? "true" : "false"}
							onClick={() => setCategory("films")}
						>
							Films
						</Header.TextLink>
					</Header.Groupe>
					<Header.Groupe>
						<Header.Search
							searchTerm={searchTerm}
							setSearchTerm={setSearchTerm}
						/>
						<Header.Profile>
							<Header.Picture src={user.photoURL} />
							<Header.Dropdown>
								<Header.Groupe>
									<Header.Picture src={user.photoURL} />
									<Header.TextLink>{user.displayName}</Header.TextLink>
								</Header.Groupe>
								<Header.Groupe>
									<Header.TextLink onClick={() => firebase.auth().signOut()}>
										Sign out
									</Header.TextLink>
								</Header.Groupe>
							</Header.Dropdown>
						</Header.Profile>
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
					<Header.PlayButton>Play</Header.PlayButton>
				</Header.Feature>
			</Header>
			<Card.Group>
				{slideRows.map((slideItem) => (
					<Card key={`${category}-${slideItem.title.toLowerCase()}`}>
						<Card.Title>{slideItem.title}</Card.Title>
					</Card>
				))}
			</Card.Group>
		</>
	) : (
		<ProfileContainer user={user} setProfile={setProfile} />
	);
}
