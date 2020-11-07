import React, { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
	Background,
	ButtonLink,
	PlayButton,
	Container,
	Logo,
	Feature,
	Text,
	FeatureCallOut,
	Groupe,
	Link,
	Profile,
	Picture,
	Dropdown,
	Search,
	SearchIcon,
	SearchInput,
} from "./styles/header";

export default function Header({ pg = true, children, ...restProps }) {
	return pg ? <Background {...restProps}>{children}</Background> : children;
}

Header.PlayButton = function HeaderPlaButton({ children, ...restProps }) {
	return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.Search = function HeaderSearch({
	searchTerm,
	setSearchTerm,
	...restProps
}) {
	const [searchActive, setSearchActive] = useState(false);

	return (
		<Search {...restProps}>
			<SearchIcon
				onClick={() => setSearchActive((searchActive) => !searchActive)}
			>
				<img src="/images/icons/search.png" alt="Search" />
			</SearchIcon>
			<SearchInput
				value={searchTerm}
				onChange={({ target }) => setSearchTerm(target.value)}
				placeholder="Search Films and Searies"
				active={searchActive}
			/>
		</Search>
	);
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
	return <Profile {...restProps}>{children}</Profile>;
};
Header.Picture = function HeaderPicture({ src, ...restProps }) {
	return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};
Header.Groupe = function HeaderGroupe({ children, ...restProps }) {
	return <Groupe {...restProps}>{children}</Groupe>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
	return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
	return <Feature {...restProps}>{children}</Feature>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({
	children,
	...restProps
}) {
	return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
	return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
	return (
		<ReactRouterLink to={to}>
			<Logo {...restProps} />
		</ReactRouterLink>
	);
};

Header.TextLink = function HeaderLink({ children, ...restProps }) {
	return <Link {...restProps}>{children}</Link>;
};
