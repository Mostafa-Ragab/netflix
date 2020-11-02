import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
	Background,
	ButtonLink,
	Container,
	Logo,
	Feature,
	Text,
	FeatureCallOut,
	Groupe,
	Link,
} from "./styles/header";

export default function Header({ pg = true, children, ...restProps }) {
	return pg ? <Background {...restProps}>{children}</Background> : children;
}

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
