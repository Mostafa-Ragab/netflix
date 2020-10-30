import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
	display: flex;
	flex-direction: column;
	background: url(${({ src }) =>
			src ? `../images/misc/${src}.jpg` : "../images/misc/home-bg.jpg"})
		top left / cover no-repeat;
`;

export const Logo = styled.img`
	height: 32px;
	width: 108px;
	margin-right: 40px;

	@media (min-width: 1449px) {
		height: 45px;
		width: 167px;
	}
`;

export const Container = styled.div`
	display: flex;
	margin: 0 56px;
	padding: 18px 0;
	justify-content: space-between;
	align-items: center;
	height: 64px;

	a {
		display: flex;
	}

	@media (max-width: 1000px) {
		margin: 0 30px;
	}
`;

export const ButtonLink = styled(ReactRouterLink)`
	display: block;
	text-decoration: none;
	font-size: 15px;
	padding: 8px 17px;
	width: 84px;
	height: fit-content;
	border-radius: 3px;
	box-sizing: border-box;
	cursor: pointer;
	border: 0;
	color: white;
	background-color: #e50914;

	&:hover {
		background-color: #f40612;
	}
`;
